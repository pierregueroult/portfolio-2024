import getArticle from "@/contents/getArticle";
import styles from "./page.module.scss";

interface BlogArticleProps {
  params: {
    id: string;
  };
}

export default async function BlogArticle({ params: { id } }: BlogArticleProps) {
  const article = await getArticle(id);

  if (!article || article === null) {
    throw new Error("Article not found");
  }

  return <main></main>;
}
