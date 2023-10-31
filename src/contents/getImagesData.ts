import prisma from "../../prisma";
import { Photo, Edit } from "@prisma/client";

export default async function getImagesData(): Promise<Array<Photo | Edit>> {
  const photos: Photo[] = await prisma.photo.findMany();
  const edits: Edit[] = await prisma.edit.findMany();

  const images: Array<Photo | Edit> = [...photos, ...edits].sort(() => Math.random() - 0.5);

  return images;
}
