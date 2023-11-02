import { MetadataRoute } from "next";
import getLinks from "@/contents/getLinks";
import getProjects from "@/contents/getProjects";
import getArticles from "@/contents/getArticles";
import {
  ProjectsWithToolsAndWorkers,
  ProjectWithToolsAndWorkers,
} from "@/types/ProjectWithToolsAndWorkers";
import { ArticlesWithComments, ArticleWithComments } from "@/types/ArticleWithComments";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = getLinks();
  const projects: ProjectsWithToolsAndWorkers | null = await getProjects();
  const articles: ArticlesWithComments | null = await getArticles();

  if (!projects || !articles) return [] as MetadataRoute.Sitemap;

  return [
    ...(links.map(link => ({
      url: `https://pierregueroult.dev${link.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    })) as MetadataRoute.Sitemap),
    ...(projects.map(project => ({
      url: `https://pierregueroult.dev/projects/${project.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    })) as MetadataRoute.Sitemap),
    ...(articles.map(article => ({
      url: `https://pierregueroult.dev/articles/${article.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    })) as MetadataRoute.Sitemap),
  ];
}
