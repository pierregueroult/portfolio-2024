import prisma from "../../prisma";
import { Photo, Edit } from "@prisma/client";

export default async function getImagesData(): Promise<Photo[] | null> {
  try {
    const photos: Photo[] = await prisma.photo.findMany();

    return photos;
  } catch (e) {
    return null;
  }
}
