import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.scss";
import Countdown from "../../components/Countdown";
import countdown_data from "../../components/countdown_data";
import Form from "../../components/Form";

export default function SignUp() {
  return (
    <>
      <div>
        <Head>
          <title>Officelite Sign Up</title>
        </Head>
        <Header />
        <main>
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
              <p>
                Easily manage your projects. Get on the list and receive in-app
                perks available only to early subscribers. We are moving into
                final development and getting ready for official launch soon.
              </p>
            </div>
          </section>
          <section className={styles.countdown}>
            {/*If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
            <p className={styles.p__mod}>
              Coming <span> 4 Nov 2021</span>
            </p>
            <div className={styles.countdown__map}>
              {/* If you're choosing to make this timer dynamic, have it countdown from the date you set above */}
              <Countdown color="blue" />
            </div>
          </section>
          <section className="form-wrapper">
            <Form />
          </section>
          <div className={styles.footer__signup} />
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

          #signup {
            width: 375px;
          }

          .form-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    </>
  );
}
