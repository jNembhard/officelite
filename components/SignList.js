import Dropdown from "./Dropdown";

export default function SignList() {
  const signup_list = ["Name", "Email Address", "Phone Number", "Company"];
  const items = [
    { id: 1, plan: "Basic Pack", price: "Free" },
    { id: 2, plan: "Pro Pack", price: "$9.99" },
    { id: 3, plan: "Ultimate Pack", price: "$19.99" },
  ];

  return (
    <div className="signup">
      {signup_list.slice(0, 2).map((index) => (
        <input key={index} type="text" placeholder={`${index}`}></input>
      ))}
      <div className="signup__dropdown">
        <Dropdown title="Basic Pack" subtitle={"Free"} items={items} />
      </div>
      {signup_list.slice(2, 4).map((index) => (
        <input key={index} type="text" placeholder={`${index}`}></input>
      ))}
      <div className="signup__button">Get on the list</div>
      <style jsx>{`
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

            &:hover {
              background-color: var(--softblue);
            }
          }
        }
      `}</style>
    </div>
  );
}
