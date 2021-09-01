import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import card_data from "../components/card_data";
import Countdown from "../components/Countdown";
import countdown_data from "../components/countdown_data";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Officelite Coming Soon</title>
        <meta name="description" content="Officelite coming soon" />
        <link rel="icon" href="/favicon.ico" />
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

          <div className={styles.intro__wrap}>
            <div className={styles.intro__image}>
              <Image
                priority
                src="/assets/home/illustration-charts.svg"
                width={171}
                height={192}
                layout="responsive"
                alt="charts"
              />
            </div>
            <div className={styles.intro__home}>
              <h1 className={styles.home__1}>
                A simple solution to complex tasks is coming soon
              </h1>

              <p>
                Say goodbye to inefficient juggling of multiple apps, teams, and
                projects. Officelite is the new collaboration platform built
                with an intuitive interface to improve productivity.
              </p>
              <div className={styles.button__wrapper}>
                <Link href="/signup/sign-up">
                  <a className={styles.home__button}>Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          {card_data.map((data) => (
            <Card
              key={data.id}
              plan={data.plan}
              price={data.price}
              description={data.description}
              benefits={data.benefits}
              number={data.number}
              image={data.image}
            />
          ))}
        </section>

        <section className={styles.countdown}>
          {/*If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
          <p>
            Coming <span> 4 Nov 2021</span>
          </p>
          <div className={styles.countdown__map}>
            <Countdown color="grey" />
          </div>
          <div>
            <Link href="/signup/sign-up">
              <a className={styles.countdown__button}>Get Started</a>
            </Link>
          </div>
          <div className={styles.footer} />
        </section>
      </main>
    </div>
  );
}
