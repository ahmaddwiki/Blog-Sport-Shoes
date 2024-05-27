import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/p2.jpeg" alt="Lands Sport" width={50} height={50} />
          <h1 className={styles.logoText}>Lands Sport</h1>
        </div>
        <p className={styles.desc}>
          Ingin terlihat lebih stylish, kece, dan elegan? Belilah sepatu di
          Lands.sport, desain sepatunya modern, nyaman dipakai, bahan yang
          digunakan juga berkualitas tinggi. Harganya juga cukup terjangkau.
          Jika tertarik, kamu bisa DM langsung untuk pemesanan.
        </p>
        <div className={styles.icons}>
          <Link href="https://www.facebook.com">
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          </Link>
          <Link href="https://www.instagram.com/lands.sport._?igsh=eHkxd3l5YXExb3A1">
            <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          </Link>
          <Link href="https://www.tiktok.com">
            <Image src="/tiktok.png" alt="TikTok" width={18} height={18} />
          </Link>
          <Link href="https://www.youtube.com">
            <Image src="/youtube.png" alt="Youtube" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Sneakers</Link>
          <Link href="/">Badminton</Link>
          <Link href="/">Basket</Link>
          <Link href="/">SlipOn</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com">Facebook</Link>
          <Link href="https://www.instagram.com/lands.sport._?igsh=eHkxd3l5YXExb3A1">Instagram</Link>
          <Link href="https://www.tiktok.com">Tiktok</Link>
          <Link href="https://www.youtube.com">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
