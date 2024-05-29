"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug, post }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `${process.env.APP_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("${process.env.APP_URL}/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc, postSlug }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      mutate();
      setDesc(""); // Clear the textarea after successful submission

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your comment has been submitted.',
      });
    } catch (error) {
      console.error("Error submitting comment:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was a problem submitting your comment.',
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{new Date(item.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
