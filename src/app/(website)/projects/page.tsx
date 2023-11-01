// styles
import styles from "./page.module.scss";
// contents
import getProjects from "@/contents/getProjects";
// components
import ProjectList from "@/components/ProjectList/ProjectList";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
// types
import { ProjectsWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets - Pierre Guéroult 🪶",
  description:
    "Explorer les projets de Pierre Guéroult ⋅ Développeur full stack ⋅ Rouen et périphéries ⋅ Étudiant BUT Métiers du Multimédia et de l'Internet ⋅ Recherche de stage et d'alternance",
  keywords: [
    "Projets",
    "Projects",
    "Pierre",
    "Guéroult",
    "Développeur",
    "full stack",
    "Étudiant",
    "BUT",
    "Métiers",
    "Multimédia",
    "Internet",
    "Recherche",
    "stage",
    "alternance",
    "web",
    "autodidacte",
    "Rouen",
  ],
  alternates: {
    canonical: "https://old.pierregueroult.dev/projects",
  },
};

export default async function Projects() {
  var projects: ProjectsWithToolsAndWorkers = await getProjects();

  if (!projects || projects.length === 0) {
    throw new Error("No projects found");
  }

  projects = [...projects, ...projects, ...projects];

  return (
    <main>
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Explorer <br />
          <span>mes projects</span>
        </h1>
        <ScrollButton target="#projects" />
      </div>
      <ProjectList projects={projects} />
      <div className={styles.outro}></div>
    </main>
  );
}
