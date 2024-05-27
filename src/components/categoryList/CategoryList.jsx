"use client";
import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format");
        }
        console.log("categories data", data);
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("categories", categories);
  }, [categories]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug] || ""}`}
            key={item.id}
          >
            <Image src={item.img} alt={item.title} width={50} height={50} />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
