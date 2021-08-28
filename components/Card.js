import Link from "next/link";

export default function Card({ plan, price, description, benefits, number }) {
  return (
    <div className={`card__basic ${number}`}>
      <h3>{plan}</h3>
      <h1>{price}</h1>
      <p>{description}</p>
      <ul>
        <li>{benefits[0]}</li>
        <li>{benefits[1]}</li>
        <li>{benefits[2]}</li>
      </ul>
      <Link href="/signup/sign-up">
        <a className="button">Try for Free</a>
      </Link>

      <style jsx>{`
        .card__basic {
          width: 327px;
          height: 508px;
          margin: 32px 25px 32px;
          text-align: center;
          border-radius: 20px;
          box-shadow: 0 0 15px hsla(0deg, 0%, 0%, 0.1);

          h3 {
            margin: 40px 0;
          }

          h1 {
            font-size: 52px;
            margin-bottom: 8px;
          }

          p {
            font-size: 16px;
            margin-bottom: 56px;
            color: var(--slategrey);
          }
          ul {
            li {
              color: var(--grey);
              list-style-type: none;
              padding-bottom: 16px;
              line-height: 28px;
            }
          }
        }

        .bg--white {
          background-color: var(--white);
          .button {
            background-color: mix(#ffffff, #829cff, $weight: 80%);
            color: var(--midblue);
            filter: opacity(100%);

            &:hover {
              background-color: mix(#ffffff, #829cff, $weight: 60%);
            }
          }
        }

        .bg--midblue {
          background-color: var(--midblue);
          background-image: url("/assets/home/bg-pattern-pricing.svg");
          background-position: center -24rem;
          background-repeat: no-repeat;
          h3,
          h1,
          p,
          ul {
            color: var(--white);
            li {
              color: var(--white);
            }
          }
          .button {
            background-color: var(--white);
            color: var(--midblue);

            &:hover {
              color: var(--softblue);
            }
          }
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 171px;
          height: 56px;
          background-color: var(--softblue);
          color: var(--white);
          margin-top: 24px;
          border-radius: 40px;
          cursor: pointer;
          font-weight: var(--header-font);
        }
      `}</style>
    </div>
  );
}
