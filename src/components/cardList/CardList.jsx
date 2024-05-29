"use client";
import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
  try {
    const res = await fetch(`/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed");
    }
    console.log(res);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const CardList = async ({ page, cat }) => {
  const data = await getData(page, cat);
  const { posts, count } = data || { posts: [], count: 0 };

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card
            key={item.id}
            item={item}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
