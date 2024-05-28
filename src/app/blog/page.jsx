// BlogPage.jsx
import CardList from "../../components/CardList/CardList";


import styles from "./blogPage.module.css";
import Menu from "../../components/menu/Menu"; // Ensure this path is correct and matches the actual file casing

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
