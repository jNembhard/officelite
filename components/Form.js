import { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

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
    console.log(formErrors.name);
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
      console.log(formErrors.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <form
      onSubmit={handleSubmit}
      className="signup"
      autoComplete={"" + Math.random()}
    >
      <div className="cross">
        <input
          id={formErrors.name && "border--error"}
          name="name"
          placeholder="Name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          autoComplete={"" + Math.random()}
        />
        {formErrors.name && (
          <div className="cross--one">
            <Image
              priority
              src="/assets/sign-up/icon-cross.svg"
              width={20}
              height={20}
              alt="cross"
            />
          </div>
        )}
      </div>
      <div className="cross">
        <input
          id={formErrors.email && "border--error"}
          name="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleChange}
        />

        {formErrors.email && (
          <div className="cross--two">
            <Image
              priority
              src="/assets/sign-up/icon-cross.svg"
              width={20}
              height={20}
              alt="cross"
            />
          </div>
        )}
      </div>

      <div className="signup__dropdown">
        <Dropdown option={items.plan} items={items} />
      </div>
      {signup_list.slice(2, 4).map((index) => (
        <input
          key={index}
          type="text"
          placeholder={`${index}`}
          autoComplete={"" + Math.random()}
        ></input>
      ))}
      <button type="submit" className="signup__button">
        Get on the list
      </button>
      <style jsx>{`
        @import "./styles/mixins.scss";
        #border--error {
          color: var(--softred);
          border-bottom: 1px solid var(--softred);
        }

        .cross {
          display: flex;
        }
        .cross--one {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 42.5px;
          right: 35px;

          @include tablet {
            top: 56.5px;
            right: 60px;
          }
        }

        .cross--two {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 112.5px;
          right: 35px;

          @include tablet {
            top: 130.5px;
            right: 60px;
          }
        }

        .signup {
          background-color: var(--white);
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

          @include tablet {
            width: 445px;
            height: 508px;
            align-items: center;

            @include desktop {
              box-shadow: 5px 10px hsla(0deg, 0%, 0%, 0.1);
            }
          }
          .signup__dropdown {
            width: 100%;
            box-sizing: border-box;

            @include tablet {
              display: flex;
              align-items: center;
              justify-content: center;
            }
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

            &:focus {
              border-bottom: 2px solid var(--midblue);
            }

            @include tablet {
              margin: 12px 0;
              width: 360px;
            }
          }
          span {
            font-weight: var(--header-font);
          }
          .signup__button {
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
            bottom: 10px;
            border: none;

            &:hover {
              background-color: var(--softblue);
            }

            @include tablet {
              width: 360px;
              height: 56px;
            }
          }
        }
      `}</style>
    </form>
  );
}
