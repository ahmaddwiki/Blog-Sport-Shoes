import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://www.facebook.com">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </a>
        <a href="https://www.instagram.com/lands.sport._?igsh=eHkxd3l5YXExb3A1">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </a>
        <a href="https://www.tiktok.com">
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </a>
      </div>
      <div className={styles.logo}>LandsSport</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link
          href="https://www.instagram.com/lands.sport._?igsh=eHkxd3l5YXExb3A1"
          className={styles.link}
        >
          Contact
        </Link>
        <Link
          href="https://tokosepatu8888.wordpress.com/about-2/"
          className={styles.link}
        >
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
