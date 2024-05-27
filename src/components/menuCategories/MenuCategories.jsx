import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.sneakers}`}
      >
        Sneakers
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.badminton}`}>
        Badminton
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.basket}`}>
        Basket
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.slipon}`}>
        Slipon
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.running}`}>
        Running
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.casual}`}>
        Casual
      </Link>
    </div>
  );
};

export default MenuCategories;