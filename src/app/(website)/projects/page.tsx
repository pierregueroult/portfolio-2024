// styles
import styles from "./page.module.scss";
// contents
import getProjects from "@/contents/getProjects";
import getSocialMedia from "@/contents/getSocialMedia";
import getTechs from "@/contents/getTechs";
// components
import ProjectList from "@/components/ProjectList/ProjectList";
import ScrollToButton from "@/components/ScrollToButton/ScrollToButton";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// types
import { ProjectsWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";
import { Metadata } from "next";
import { Tech } from "@prisma/client";

// création des métadonnées de la page
export const metadata: Metadata = {
  title: "Projets",
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
  // récupération des données fixes
  const githubLink: string = getSocialMedia().find(media => media.alt === "Github")?.link || "";
  // récupération des données dynamiques (base de données)
  var projects: ProjectsWithToolsAndWorkers | null = await getProjects();
  const techs: Tech[] | null = await getTechs();

  // vérification des données récupérées
  if (!projects || !techs) throw new Error("Database error");
  if (projects.length === 0) throw new Error("No projects found");

  // rendu de la page
  return (
    <main>
      <div className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introTextContainer}>
            <h1 className={styles.title}>
              Explorer <br />
              <span>mes projects</span>
            </h1>
            <ScrollToButton target="#projects" offset={0}>
              Scroller vers les projets
              <svg
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </ScrollToButton>
          </div>
          <div className={styles.introImageContainer}>
            <a
              href="https://fr.m.wikipedia.org/wiki/Fichier:Pierre-Auguste_Renoir_-_La_Seine_%C3%A0_Chatou.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/impresionism/default0.jpg"}
                alt={"Oeuvre Impressionniste"}
                width={500}
                height={250}
                className={styles.introImage}
              />
            </a>
          </div>
        </div>
        <Marquee
          gradient={true}
          gradientColor="#1f252d"
          speed={50}
          autoFill
          pauseOnClick
          play
          direction="left"
          className={`${styles.marquee} ${styles.marqueeIntro}`}
          loop={0}
        >
          {projects.map(project => (
            <Link className={styles.marqueeText} href={`/projects/${project.id}`} key={project.id}>
              {project.title}
            </Link>
          ))}
        </Marquee>
      </div>
      <ProjectList projects={projects} />
      <div className={styles.outro}>
        <p className={styles.githubLink}>
          ... et bien d&apos;autres sur mon{" "}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Github
          </a>{" "}
          !
        </p>
        <h3>
          Un project
          <br />
          <span>en tête ?</span>
        </h3>
        <p>
          <Link href="/">Contacter</Link> moi pour discuter, débattre, ou même collaborer !
        </p>
        <Marquee
          gradient={true}
          gradientWidth={300}
          gradientColor="#1f252d"
          speed={50}
          autoFill
          pauseOnClick
          play
          direction="left"
          className={styles.marquee}
          loop={0}
        >
          {techs
            .sort(() => Math.random() - 0.5)
            .map((tech: Tech) => (
              <Link className={styles.marqueeText} key={tech.id} href={"/"}>
                {tech.name}
              </Link>
            ))}
        </Marquee>
      </div>
    </main>
  );
}
