// Import your CSS module
import styles from "./singlePage.module.css";

// Import necessary components
import Image from "next/image";
import Menu from "../../../components/menu/Menu";
import Comments from "../../../components/comments/Comments";
import { format } from "date-fns";

// Fetch data function
const getData = async (slug) => {
  const res = await fetch(`${process.env.APP_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// SinglePage component
const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const formattedDate = data?.createdAt
    ? format(new Date(data.createdAt), "dd.MM.yyyy")
    : "";

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          {data?.img && (
            <div className={styles.imageContainer}>
              <Image
                src={data.img}
                alt=""
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
          )}
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
