// prisma instance
import prisma from "../../prisma";
// types
import { ProjectsWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";

export default async function getProjects(
  count?: number,
): Promise<ProjectsWithToolsAndWorkers | null> {
  try {
    const projects: ProjectsWithToolsAndWorkers = await prisma.project.findMany({
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
        comments: true,
      },
      take: count || undefined,
    });

    return projects;
  } catch (e) {
    return null;
  }
}
