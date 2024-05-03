import Link from "next/link"; // Import Link from Next.js
import styles from "./homepage.module.css";
import Featured from "@/component/featured/Featured";
import CategoryList from "@/component/categoryList/CategoryList";
import CardList from "@/component/CardList/CardList";
import Menu from "@/component/menu/Menu";

export default function Home() {
  return  (
  <div className={styles.container}>
    <Featured />
    <CategoryList />
    <div className={styles.container}>
      <CardList />
      <Menu />
    </div>
  </div>
  );
}
