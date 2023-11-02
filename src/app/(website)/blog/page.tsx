import getArticles from "@/contents/getArticles";
import styles from "./page.module.scss";
import BlogCard from "@/components/BlogCard/BlogCard";
import Link from "next/link";
import StarWarsLogo from "@/components/StarWarsLogo/StarWarsLogo";
import { ArticlesWithComments } from "@/types/ArticleWithComments";

export default async function Blog() {
  const articles: ArticlesWithComments | null = await getArticles();

  if (!articles) throw new Error("Database error");

  // order articles by updatedAt
  articles.sort((a, b) => {
    if (a.updateAt < b.updateAt) return 1;
    if (a.updateAt > b.updateAt) return -1;
    return 0;
  });

  return (
    <main>
      <div className="container">
        <h1 className={styles.title}>
          Bienvenue
          <br />
          <span>sur le blog</span>
        </h1>
        <section className={styles.latest}>
          <BlogCard article={articles[0]} size="large" />
          <aside className={styles.description}>
            <ul className={styles.icon}>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                  <path
                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                    fill="currentColor"
                  />
                </svg>
              </li>
              <li>
                <StarWarsLogo />
              </li>
            </ul>
            <h2 className={styles.subtitle}>
              Une référence nul part, mais un <span>blog sympa</span> quand même
            </h2>
            <p className={styles.descriptionText}>
              Bienvenue sur mon blog, ici je parle de tout et de rien, mais surtout de rien. Je suis
              développeur web, et j&apos;aime bien écrire des articles sur ce que je fais. Je suis
              aussi un grand fan de fiction en tout genre, et surtout mais surtout de Star Wars.
            </p>
            <Link href="/#contact" className={styles.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 5v14" />
                <path d="M21 12H7" />
                <path d="m15 18 6-6-6-6" />
              </svg>
              Me contacter plutôt que lire
            </Link>
          </aside>
        </section>
        {/* <section className={styles.articleContainer}>
          <ul className={styles.smallArticles}>
            {articles.slice(1, 5).map(article => (
              <li key={article.id}>
                <BlogCard article={article} size="small" />
              </li>
            ))}
          </ul>
        </section> */}
        <section className={styles.articleContainer}>
          <ul className={styles.mediumArticles}>
            {articles.slice(1, 3).map(article => (
              <li key={article.id}>
                <BlogCard article={article} size="medium" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
