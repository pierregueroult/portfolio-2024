import { ArticleWithComments } from "@/types/ArticleWithComments";
import prisma from "../../prisma";

export default async function getArticle(id: string): Promise<ArticleWithComments | null> {
  try {
    const article: ArticleWithComments | null = await prisma.article.findUnique({
      where: {
        id: id,
      },
      include: {
        comments: true,
      },
    });
    return article;
  } catch (e) {
    return null;
  }
}
