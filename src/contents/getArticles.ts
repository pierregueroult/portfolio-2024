import prisma from "../../prisma";
import { Article } from "@prisma/client";

export default async function getArticles(): Promise<Array<Article>> {
  const articles: Array<Article> = await prisma.article.findMany({
    orderBy: {
      updateAt: "desc",
    },
    include: {
      comments: true,
      _count: true,
    },
  });

  return articles;
}
