import prisma from "../../prisma";
import { Tech } from "@prisma/client";

type getTechsParams = {
  byType: boolean;
};

export default async function getTechs({
  byType,
}: getTechsParams): Promise<Tech[] | { [key: string]: Tech[] }> {
  const techs: Tech[] = await prisma.tech.findMany({
    where: {
      visible: true,
    },
    orderBy: {
      colorHue: "asc",
    },
  });

  if (!byType) {
    return techs;
  }

  var techsByType: { [key: string]: Tech[] } = {};

  techs.forEach(tech => {
    if (!techsByType[tech.type]) {
      techsByType[tech.type] = [];
    }
    techsByType[tech.type].push(tech);
  });

  // now they are sorted by type, we need the type with the most techs first
  const sortedTechsByType: { [key: string]: Tech[] } = {};
  Object.keys(techsByType)
    .sort((a, b) => techsByType[b].length - techsByType[a].length)
    .forEach(key => {
      sortedTechsByType[key] = techsByType[key];
    });

  return sortedTechsByType;
}
