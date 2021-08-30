import { initializeClock } from "./initializeClock";

export default function Countdown({ number, unit, color }) {
  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  // const initClock = initializeClock("count", deadline);

  return (
    <div className="count">
      <div className={`count__block ${color}`}>
        <p>
          <span className={unit}>{number} </span>
          {unit}
        </p>
      </div>
      <style jsx>{`
        .count {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          margin: 18px 8px 0;

          .blue {
            background-color: mix(white, #829cff, $weight: 80%);
            p {
              span {
                color: var(--midblue);
              }
            }
          }

          .grey {
            background-color: var(--slategrey);
            p {
              span {
                color: var(--white);
              }
            }
          }

          .count__block {
            border-radius: 5px;
            width: 72px;
            height: 92px;

            p {
              margin-top: 16px;
              flex-direction: column;
              font-size: 12px;
              font-weight: var(--header-font);
              letter-spacing: inherit;
              text-transform: inherit;
              line-height: inherit;

              span {
                font-size: 32px;
                font-weight: var(--header-font);
                line-height: 48px;
                padding-left: 0;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
