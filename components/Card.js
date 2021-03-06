import Link from "next/link";

export default function Card({ plan, price, description, benefits, number }) {
  return (
    <div className={`card ${number}`}>
      <div className="card-header__wrapper">
        <div className="card-header__container">
          <h3>{plan}</h3>
          <h1>{price}</h1>
          <p>{description}</p>
        </div>
        <div className="card-benefits">
          <ul>
            <li>{benefits[0]}</li>
            <li>{benefits[1]}</li>
            <li>{benefits[2]}</li>
          </ul>
        </div>
      </div>

      <div className="card__button">
        <Link href="/signup/sign-up">
          <a className="button">Try for Free</a>
        </Link>
      </div>

      <style jsx>{`
        @import "./styles/mixins.scss";
        .card {
          width: 327px;
          height: 508px;
          margin: 32px 25px;
          text-align: center;
          border-radius: 20px;
          box-shadow: 0 0 15px hsla(0deg, 0%, 0%, 0.1);

          @include tablet {
            width: 689px;
            height: 316px;
            text-align: left;
            display: flex;
            flex-direction: column;
            margin: 24px 32px;
          }

          @include desktop {
            width: 350px;
            height: 508px;
            text-align: center;
            margin: 82px 15px;
          }

          h3 {
            margin: 40px 0;
            @include tablet {
              margin: 48px 0 0 48px;
            }

            @include desktop {
              margin: 40px 0;
            }
          }

          h1 {
            font-size: 52px;
            margin-bottom: 8px;

            @include tablet {
              margin: 16px 30px 24px 48px;
            }

            @include desktop {
              margin: 0 0 8px 0;
            }
          }

          p {
            font-size: 16px;
            margin-bottom: 56px;
            color: var(--slategrey);
            line-height: 28px;
            @include tablet {
              margin-left: 48px;
              margin-bottom: 24px;
            }

            @include desktop {
              margin: 0 48px 56px;
            }
          }

          .card-benefits {
            @include tablet {
              margin-top: 86px;
              margin-left: 175px;
            }
            @include desktop {
              margin: inherit;
            }
            ul {
              @inclued tablet {
                margin: 0 20px 0 140px;
              }
              @include desktop {
                /* margin: inherit; */
              }
              li {
                list-style-type: none;
                padding-bottom: 16px;
                line-height: 28px;
              }
            }
          }

          .card-header__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @include tablet {
              flex-direction: row;
              justify-content: inherit;
              align-items: inherit;
            }

            @include desktop {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .card-header__container {
            }
          }
        }

        .bg--white {
          background-color: var(--white);
          .card__button {
            .button {
              background-color: mix($white, $midblue, $weight: 80%);
              color: var(--midblue);
              filter: opacity(100%);

              &:hover {
                background-color: mix($white, $midblue, $weight: 60%);
              }
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
          @include tablet {
            position: relative;
            flex-direction: column;
            align-items: left;
            background-position: right -18rem;
            background-position-x: -20rem;
          }

          @include desktop {
            align-items: center;
            background-position: center -24rem;
          }
          .card__button {
            .button {
              background-color: var(--white);
              color: var(--midblue);

              &:hover {
                color: var(--softblue);
              }
            }
          }
        }

        .card__button {
          @include desktop {
            margin-top: 32px;
          }
          .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 171px;
            height: 56px;
            margin-top: 24px;
            background-color: var(--softblue);
            color: var(--white);
            border-radius: 40px;
            cursor: pointer;
            font-weight: var(--header-font);

            @include tablet {
              margin: 0 48px 48px;
            }

            @include desktop {
              margin: 0 90px 40px;
            }
          }
        }
      `}</style>
    </div>
  );
}
