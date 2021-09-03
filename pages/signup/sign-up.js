import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Signup.module.scss";
import Countdown from "../../components/Countdown";
import Form from "../../components/Form";

export default function SignUp() {
  return (
    <>
      <div>
        <Head>
          <title>Officelite Sign Up</title>
        </Head>
        <header>
          <Header />
        </header>
        <main id="main">
          <section className={styles.home}>
            <div className={styles.header__Image2}>
              <Image
                priority
                src="/assets/home/bg-pattern-header.svg"
                height={458}
                width={458}
                alt="bg-pattern"
              />
            </div>
            <div id="intro" className={styles.intro__wrap}>
              <h1 className={styles.mod}>Work smarter. Save time.</h1>
              <p className={styles.intro__paragraph}>
                Easily manage your projects. Get on the list and receive in-app
                perks available only to early subscribers. We are moving into
                final development and getting ready for official launch soon.
              </p>
            </div>

            <div className={styles.countdown}>
              <p id="counter" className={styles.p__mod}>
                Coming <span> 30 Dec 2021</span>
              </p>
              <div id="counter-map" className={styles.countdown__map}>
                <Countdown color="blue" />
              </div>
            </div>
          </section>
          <section id="form" className={styles.form}>
            <Form />
          </section>
          <section className={styles.footer}>
            <div className={styles.footer__container} />
          </section>
        </main>

        <style jsx>{`
          @import "./styles/mixins.scss";
          .countdown__color {
            span {
              background-color: var(--midblue);
            }
          }

          #intro {
            @include tablet {
              display: flex;
              flex-direction: column;
              margin: 0;
            }
          }

          #counter {
            @include desktop {
              margin-right: 170px;
            }
          }

          #form {
            @include landscape {
              position: relative;
              overflow-x: hidden;
            }
          }

          #main {
            @include desktop {
              display: flex;
              bottom: -200px;
            }
          }

          #signup {
            width: 375px;
          }
        `}</style>
      </div>
    </>
  );
}
