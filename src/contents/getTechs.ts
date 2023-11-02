import prisma from "../../prisma";
import { Tech } from "@prisma/client";

export default async function getTechs(): Promise<Tech[] | null> {
  try {
    const techs: Tech[] = await prisma.tech.findMany({
      where: {
        visible: true,
      },
      orderBy: {
        colorHue: "asc",
      },
    });

    return techs;
  } catch (e) {
    return null;
  }
}
