import prisma from "../../prisma";
import { Project } from "@prisma/client";

export default async function getProject(id: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
    include: {
      tools: {
        include: {
          tool: true,
        },
      },
      workers: {
        include: {
          worker: true,
        },
      },
    },
  });

  return project;
}
