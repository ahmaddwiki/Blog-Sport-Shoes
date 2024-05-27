import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/sneakers.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.sneakers}`}>
            Sneakers
          </span>
          <h3 className={styles.postTitle}>
            Sneakers adalah sepatu yang dirancang khusus untuk aktivitas
            sehari-hari. Awalnya sepatu ini hanya digunakan untuk kegiatan
            berolahraga. Namun, saat ini bisa kalian pakai untuk berbagai
            kegiatan, karena memiliki sol yang fleksibel dan nyaman, sehingga
            cocok untuk berjalan jauh atau berolahraga.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Lands Sport Offcial</span>
            <span className={styles.date}> - XX.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/badminton.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.badminton}`}>
            Badminton
          </span>
          <h3 className={styles.postTitle}>
            Sepatu badminton atau bulutangkis diproduksi dengan jenis sepatu
            yang lebih elastis terutama pada bagian jempol dan jari kaki. Hal
            ini bertujuan supaya pemain badminton mampu lebih leluasa untuk
            bergerak, karena memang olahraga yang satu ini menuntut pemainnya
            untuk bergerak cepat dan tangkas.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Lands Sport Official</span>
            <span className={styles.date}> - XX.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/basket.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.basket}`}>Basket</span>
          <h3 className={styles.postTitle}>
            Sepatu basket adalah sepatu yang khusus dipakai untuk berolahraga
            basket, Sepatu jenis ini yang terus berkembang hingga sekarang,
            memiliki bentuk high. Bentuk high adalah bentuk sepatu yang tinggi
            di bagian mata kaki. Fungsi sepatu high, sudah barang tentu untuk
            melindungi mata kaki bahkan pergelangan kaki pemain basket.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Lands Sport Official</span>
            <span className={styles.date}> - XX.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/slipon.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.slipon}`}>Slipon</span>
          <h3 className={styles.postTitle}>
            Sepatu slip on adalah sepatu yang tidak menggunakan tali sehingga
            sangat mudah untuk dipakai. Semetara sepatu bertali merupakan sepatu
            yang menggunakan tali untuk mengencangkan sepatu ketika dipakai.
            Secara fungsi, sepatu slip on dan sepatu tali memang diperuntukan
            sebagai alas kaki.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Lands Sport Offcial</span>
            <span className={styles.date}> - XX.05.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
