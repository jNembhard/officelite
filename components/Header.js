import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        priority
        className={styles.header__Image1}
        src="/assets/shared/logo.svg"
        alt="logo"
        width={155}
        height={30}
      />
    </header>
  );
}
