import prisma from "../../prisma";
import { Article, Project, Photo, Edit } from "@prisma/client";

export enum tables {
  ARTICLE = "article",
  PROJECT = "project",
  PHOTO = "photo",
  EDIT = "edit",
}

type params = {
  table: tables;
  id?: string;
};

export default async function getViewsOf({ table, id }: params): Promise<number> {
  if (id) {
    return 0;
    // TODO: implement views for a single item
  } else {
    if (table === tables.ARTICLE) {
      const articles: Array<{ views: number }> = await prisma.article.findMany({
        select: {
          views: true,
        },
      });
      return articles.reduce((acc, article) => acc + article.views, 0);
    } else if (table === tables.PROJECT) {
      const projects: Array<{ views: number }> = await prisma.project.findMany({
        select: {
          views: true,
        },
      });
      return projects.reduce((acc, project) => acc + project.views, 0);
    } else if (table === tables.PHOTO) {
      const photos: Array<{ views: number }> = await prisma.photo.findMany({
        select: {
          views: true,
        },
      });
      return photos.reduce((acc, photo) => acc + photo.views, 0);
    } else if (table === tables.EDIT) {
      const edits: Array<{ views: number }> = await prisma.edit.findMany({
        select: {
          views: true,
        },
      });
      return edits.reduce((acc, edit) => acc + edit.views, 0);
    }
  }
  return 0;
}
