export default function Countdown({ number, unit }) {
  return (
    <div className="count">
      <div className="count__block">
        <p>
          <span>{number} </span>
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

          .count__block {
            border-radius: 5px;
            width: 72px;
            height: 92px;
            background-color: var(--slategrey);

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
                color: white;
                padding-left: 0;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
