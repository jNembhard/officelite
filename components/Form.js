import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";

export default function SignList() {
  const signup_list = ["Name", "Email Address", "Phone Number", "Company"];
  const items = [
    { id: 1, plan: "Basic Pack", price: "Free" },
    { id: 2, plan: "Pro Pack", price: "$9.99" },
    { id: 3, plan: "Ultimate Pack", price: "$19.99" },
  ];

  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues.name);
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regExName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Cannot be blank";
    } else if (!regExName.test(values.name)) {
      errors.name = "Name must be more than 4 characters";
    }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regExEmail.test(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const submitForm = () => {
    console.log(formValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  return (
    <form onSubmit={handleSubmit} className="signup" noValidate>
      {signup_list.slice(0, 2).map((index) => (
        <input
          key={index}
          id={
            `${index}` === "Name"
              ? formErrors.name && "border--error"
              : formErrors.email && "border--error"
          }
          name={`${index}` === "Name" ? "name" : "email"}
          placeholder={`${index}`}
          type={`${index}` === "Name" ? "text" : "email"}
          className="border--error"
          value={`${index}` === "Name" ? formValues.name : formValues.email}
          onChange={handleChange}
        />
      ))}

      <div className="signup__dropdown">
        <Dropdown title="Basic Pack" subtitle={"Free"} items={items} />
      </div>
      {signup_list.slice(2, 4).map((index) => (
        <input key={index} type="text" placeholder={`${index}`}></input>
      ))}
      <button type="submit" className="signup__button">
        Get on the list
      </button>
      <style jsx>{`
        #border--error {
          color: var(--softred);
          border-bottom: 1px solid var(--softred);
        }
        .signup {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 327px;
          height: 465px;
          margin: 64px 24px 27px;
          border-radius: 8px;
          box-shadow: 0 0 15px hsla(0deg, 0%, 0%, 0.1);
          .signup__dropdown {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid red;
          }
          input {
            width: 279px;
            height: 45px;
            margin: 12px 24px;
            border: 0;
            outline: 0;
            background: transparent;
            border-bottom: 1px solid var(--grey);
            color: var(--grey);
            font-size: 16px;
            line-height: 28px;
            text-indent: 16px;
          }
          span {
            font-weight: var(--header-font);
          }
          .signup__button {
            /* position: absolute; */
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 270px;
            height: 56px;
            background-color: var(--midblue);
            color: var(--white);
            font-size: 16px;
            font-weight: var(--header-font);
            margin-top: 20px;
            border-radius: 50px;
            cursor: pointer;
            /* z-index: -1; */
            bottom: 10px;
            border: none;
            &:hover {
              background-color: var(--softblue);
            }
          }
        }
      `}</style>
    </form>
  );
}
