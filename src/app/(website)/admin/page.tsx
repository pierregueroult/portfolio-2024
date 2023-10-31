// ! this route is secured by the /middleware.ts file
import styles from "./page.module.scss";
import getViewsOf, { tables } from "@/contents/getViewsOf";

export default async function Admin() {
  const articlesViews = await getViewsOf({ table: tables.ARTICLE });
  const projectsViews = await getViewsOf({ table: tables.PROJECT });
  const imagesViews = await getViewsOf({ table: tables.IMAGE });

  return (
    <>
      <header className={styles.titles}>
        <h2 className={styles.title}>Dashboard Administrateur</h2>
        <p className={styles.subtitle}>Bienvenue Pierre Guéroult</p>
      </header>
      <section className={styles.views}>
        <article className={styles.view}>
          <div className={styles.container}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <div className={styles.content}>
              <p className={styles.count}>{articlesViews} vues </p>
              <p className={styles.description}>sur les pages du blog</p>
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.bar}
              style={{
                width: `${articlesViews}%`,
              }}
            ></div>
          </div>
        </article>
        <article className={styles.view}>
          <div className={styles.container}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 8h7" />
                <path d="M8 12h6" />
                <path d="M11 16h5" />
              </svg>
            </div>
            <div className={styles.content}>
              <p className={styles.count}>{projectsViews} vues </p>
              <p className={styles.description}>sur les pages du portfolio</p>
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.bar}
              style={{
                width: `${projectsViews}%`,
              }}
            ></div>
          </div>
        </article>
        <article className={styles.view}>
          <div className={styles.container}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <div className={styles.content}>
              <p className={styles.count}>{imagesViews} vues </p>
              <p className={styles.description}>sur les pages des images</p>
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.bar}
              style={{
                width: `${imagesViews}%`,
              }}
            ></div>
          </div>
        </article>
      </section>
    </>
  );
}
