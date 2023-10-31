"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ArticleList.module.scss";
import Link from "next/link";

interface ArticleAdminListProps {
  articles: {
    id: string;
    title: string;
    image: string;
    updateAt: Date;
  }[];
}

export default function ArticleAdminList({ articles }: ArticleAdminListProps): React.ReactNode {
  const [tabulation, setTabulation] = useState(1);

  return (
    <>
      <ul className={styles.list}>
        {articles.slice((tabulation - 1) * 9, tabulation * 9).map(article => (
          <li key={article.id} className={styles.item}>
            <Link href={`/admin/articles/${article.id}`}>
              <Image src={article.image} alt={article.title} width={100} height={100} />
              <div>
                <p>{article.title}</p>
                <p>{article.updateAt.toLocaleDateString("fr")}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.tabulation}>
        {Array.from({ length: Math.ceil(articles.length / 9) }, (_, i) => (
          <li
            key={i}
            className={`${styles.tabulationElement} ${
              tabulation === i + 1 ? styles.tabulationElementActive : ""
            }`}
          >
            <button onClick={() => setTabulation(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
