import { Prisma } from "@prisma/client";

const projectWithToolsAndWorkers = Prisma.validator<Prisma.ProjectDefaultArgs>()({
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

export type ProjectWithToolsAndWorkers = Prisma.ProjectGetPayload<
  typeof projectWithToolsAndWorkers
>;
export type ProjectsWithToolsAndWorkers = ProjectWithToolsAndWorkers[];
