import { Fragment } from "react";

export default function Clock({
  color,
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className={`timer__clock ${color}`}>
            <section>
              <p>{timerDays}</p>
              <span>days</span>
            </section>
            <section>
              <p>{timerHours}</p>
              <span>hours</span>
            </section>
            <section>
              <p>{timerMinutes}</p>
              <span>mins</span>
            </section>
            <section>
              <p>{timerSeconds}</p>
              <span>sec</span>
            </section>
          </div>
        </section>
        <style jsx>{`
          @import "./styles/mixins.scss";
          .timer-container {
            text-align: center;
            margin: 18px 8px 0;

            .blue {
              section {
                background-color: mix(white, #829cff, $weight: 80%);
                p {
                  color: var(--midblue);
                }
                span {
                  color: var(--slategrey);
                }
              }
            }

            .grey {
              section {
                background-color: var(--slategrey);
                p {
                  color: var(--white);
                }
                span {
                  color: mix(white, #747b95, $weight: 20%);
                }
              }
            }

            .timer {
              .timer__clock {
                display: inline-flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                section {
                  display: flex;
                  flex-direction: column;
                  border-radius: 10px;
                  width: 72px;
                  height: 92px;
                  margin-left: 7.5px;
                  margin-right: 7.5px;

                  @include tablet {
                    width: 100px;
                    height: 128px;
                  }

                  p {
                    margin-top: 16px;
                    font-size: 32px;
                    font-weight: var(--header-font);
                    letter-spacing: inherit;
                    text-transform: inherit;
                    line-height: inherit;

                    @include tablet {
                      font-size: 56px;
                    }
                  }
                  span {
                    font-size: 12px;
                    font-weight: var(--header-font);
                    line-height: 28px;
                    padding-left: 0;

                    @include tablet {
                      font-size: 16px;
                    }
                  }
                }
              }
            }
          }
        `}</style>
      </section>
    </Fragment>
  );
}
