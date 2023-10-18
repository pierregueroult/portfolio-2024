import prisma from "../../prisma";

export default function getImagesData() {
  var imagesData = prisma.gallery.findMany();

  return imagesData;
}
