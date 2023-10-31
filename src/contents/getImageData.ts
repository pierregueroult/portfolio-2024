import prisma from "../../prisma";
import { Photo, Edit } from "@prisma/client";

export default async function getImageData(id: string): Promise<Photo> {
  const photo: Photo | null = await prisma.photo.findUnique({
    where: {
      id: id,
    },
  });

  if (photo) {
    return photo;
  } else {
    throw new Error("Image not found");
  }
}
