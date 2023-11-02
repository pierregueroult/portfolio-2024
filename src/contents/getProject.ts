import prisma from "../../prisma";
import { ProjectWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";

export default async function getProject(id: string): Promise<ProjectWithToolsAndWorkers | null> {
  try {
    const project: ProjectWithToolsAndWorkers | null = await prisma.project.findUnique({
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
  } catch (e) {
    return null;
  }
}
