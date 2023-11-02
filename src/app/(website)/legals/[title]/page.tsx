import getLegal from "@/contents/getLegal";
import styles from "./page.module.scss";
import type { Metadata } from "next";

interface LegalPageProps {
  params: {
    title: string;
  };
}

export async function generateMetadata({ params: { title } }: LegalPageProps): Promise<Metadata> {
  const legal = await getLegal(title);

  if (!legal) {
    throw new Error(`Ce fichier n'existe pas: ${title}`);
  }

  return {
    title: `Fichier : ${legal.title}`,
    description: `Fichier à lire avant d'utiliser le site web de Pierre Guéroult 🤓 : ${legal.title} `,
  };
}

// prettier-ignore-next-line
export default async function LegalPage({ params: { title } }: LegalPageProps) {
  const legal = await getLegal(title);

  if (!legal) {
    throw new Error(`Ce fichier n'existe pas: ${title}`);
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
