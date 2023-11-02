import { Prisma } from "@prisma/client";

const articleWithComments = Prisma.validator<Prisma.ArticleDefaultArgs>()({
  include: {
    comments: true,
  },
});

export type ArticleWithComments = Prisma.ArticleGetPayload<typeof articleWithComments>;

export type ArticlesWithComments = ArticleWithComments[];
