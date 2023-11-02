import prisma from "../../prisma";
import { Photo } from "@prisma/client";

export default async function getImageData(id: string): Promise<Photo | null> {
  try {
    const photo: Photo | null = await prisma.photo.findUnique({
      where: {
        id: id,
      },
    });

    return photo;
  } catch (e) {
    return null;
  }
}
