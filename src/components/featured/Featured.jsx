"use client";

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Lands Sport!</b>
        <br />
        Start Your Journey With Lands Sport Products.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/display.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Nike Air Zoom Pegasus 36 Cody Hudson Yellow Limited Edition.
          </h1>
          <p className={styles.postDesc}>
            Sepatu lari baru dari NIKE. Bahan bagian atas adalah bahan yang
            berkualitas tinggi. Bahan sol peredam guncangan adalah bahan
            berkualitas tinggi. Teknologi Cushlon, Flywire, Nike Zoom, Zoom Air
            adalah keunggulan besar model ini. Alas kaki profesional yang
            dirancang untuk berlari... Dijamin Original. Produk Kami 100%
            original/Asli NIKE. Di import/didistribusikan oleh PT Nike
            Indonesia.
          </p>
          <a
            className={styles.button}
            href="https://www.instagram.com/lands.sport._?igsh=eHkxd3l5YXExb3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Read More</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
