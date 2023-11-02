import getArticle from "@/contents/getArticle";
import styles from "./page.module.scss";
import { ArticleWithComments } from "@/types/ArticleWithComments";

interface BlogArticleProps {
  params: {
    id: string;
  };
}

export default async function BlogArticle({ params: { id } }: BlogArticleProps) {
  const article: ArticleWithComments | null = await getArticle(id);

  if (!article) throw new Error("Database error");

  return <main></main>;
}
