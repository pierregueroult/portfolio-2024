import prisma from "../../prisma";
import { ArticlesWithComments } from "@/types/ArticleWithComments";

export default async function getArticles(): Promise<ArticlesWithComments | null> {
  try {
    const articles: ArticlesWithComments = await prisma.article.findMany({
      orderBy: {
        updateAt: "desc",
      },
      include: {
        comments: true,
      },
    });

    return articles;
  } catch (e) {
    return null;
  }
}
