// styles
import styles from "./page.module.scss";
// contents
import getArticle from "@/contents/getArticle";
// types
import { type ArticleWithComments } from "@/types/ArticleWithComments";
import type { Metadata, ResolvingMetadata } from "next";

interface BlogArticleProps {
  params: {
    id: string;
  };
}

// création des métadonnées de la page
export async function generateMetadata(
  { params: { id } }: BlogArticleProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const article: ArticleWithComments | null = await getArticle(id);

  if (!article) throw new Error("Database error");

  const previousImages = (await parent).openGraph?.images || [];
  const previousKeywords = (await parent).keywords || [];

  return {
    title: `${article.title}`,
    description: `Article du blog de Pierre Guéroult 🤓 : ${article.title}`,
    openGraph: {
      images: [article.image, ...previousImages],
    },
    keywords: [...article.tags.map((tag: string) => tag), ...previousKeywords],
  };
}

export default async function BlogArticle({ params: { id } }: BlogArticleProps) {
  const article: ArticleWithComments | null = await getArticle(id);

  if (!article) throw new Error("Database error");

  return <main></main>;
}
