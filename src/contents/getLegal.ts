import prisma from "../../prisma";
import md2html from "@/utils/md2html";
import { Legal } from "@prisma/client";

// prettier-ignore
export default async function getLegal(slug: string): Promise<(Legal & { html: string }) | null> {
  const legal = await prisma.legal.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!legal) {
    return null;
  }

  const html = await md2html(legal.content);

  return {
    ...legal,
    html,
  };
}
