import prisma from "../../prisma";
import { Photo, Edit } from "@prisma/client";

export default async function getImageData(id: string): Promise<Photo | Edit> {
  const photo: Photo | null = await prisma.photo.findUnique({
    where: {
      id: id,
    },
  });

  const edit: Edit | null = await prisma.edit.findUnique({
    where: {
      id: id,
    },
  });

  if (photo) {
    return photo;
  } else if (edit) {
    return edit;
  } else {
    throw new Error("Image not found");
  }
}
