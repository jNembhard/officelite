import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Header() {
  return (
    <Link href="/">
      <a>
        <Image
          priority
          className={styles.header__Image1}
          src="/assets/shared/logo.svg"
          alt="logo"
          width={155}
          height={30}
        />
      </a>
    </Link>
  );
}
