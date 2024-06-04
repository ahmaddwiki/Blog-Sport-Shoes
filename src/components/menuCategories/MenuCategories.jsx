import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const categories = [
  { id: 1, name: 'Sneakers', slug: 'sneakers' },
  { id: 2, name: 'Badminton', slug: 'badminton' },
  { id: 3, name: 'Basket', slug: 'basket' },
  { id: 4, name: 'Slipon', slug: 'slipon' },
  { id: 5, name: 'Running', slug: 'running' },
  { id: 6, name: 'Casual', slug: 'casual' },
];

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map(item => (
        <Link
          href={`/blog?cat=${item.slug}`}
          className={`${styles.category} ${styles[item.slug] || ""}`}
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;