import getLegal from "@/contents/getLegal";
import styles from "./page.module.scss";

interface LegalPageProps {
  params: {
    title: string;
  };
}
// prettier-ignore-next-line
export default async function LegalPage({ params: { title } }: LegalPageProps) {
  const legal = await getLegal(title);

  if (!legal) {
    throw new Error(`Cannot find legal: ${title}`);
  }

  return (
    <main>
      <div className={`${styles.container} container`}>
        <section
          dangerouslySetInnerHTML={{ __html: legal.html }}
          className={styles.legal}
        ></section>
      </div>
    </main>
  );
}
