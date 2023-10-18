import prisma from "../../prisma";

export default function getImageData(id: string) {
  var imageData = prisma.gallery.findUnique({
    where: {
      id: id,
    },
  });
  return imageData;
}
