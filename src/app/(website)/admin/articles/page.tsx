import Image from "next/image";
import styles from "./page.module.scss";
import getArticles from "@/contents/getArticles";
import ArticleAdminList from "@/components/ArticleList/ArticleList";

export default async function AdminArticles() {
  const articles = await getArticles();

  return (
    <div className={styles.container}>
      <section className={styles.page}>
        <h1 className={styles.title}>Tous les articles :</h1>
        <ArticleAdminList articles={articles} />
      </section>
      <aside className={styles.new}></aside>
    </div>
  );
}
