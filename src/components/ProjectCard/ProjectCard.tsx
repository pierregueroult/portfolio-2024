import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import ProjectIllustration from "../ProjectIllustrations/ProjectIlustrations";
import { ProjectWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";

interface ProjectCardProps {
  videoEnabled: boolean;
  project: ProjectWithToolsAndWorkers;
}

export default function ProjectCard({ project, videoEnabled }: ProjectCardProps) {
  return (
    <article className={`${styles.panel} project-panel`}>
      <Link href={`/projects/${project.id}`} className={styles.link}>
        <div className={styles.thumbnail}>
          {project.thumbnailVideo && videoEnabled ? (
            <ProjectIllustration
              video={{
                src: project.thumbnailVideo,
              }}
              image={{
                src: project.thumbnailImage,
                alt: `Miniature du projet : ${project.title}`,
              }}
            />
          ) : (
            <Image
              src={project.thumbnailImage}
              width={1920 / 2}
              height={960 / 2}
              alt={`Miniature du projet : ${project.title}`}
            />
          )}
        </div>
        <div className={styles.information}>
          <div>
            <h2>{project.title}</h2>
            <p>
              ({project.type === "website" ? "Application Web" : "Autre projet"} - {project.context}
              )
            </p>
          </div>
          <div className={styles.icons}>
            <div>
              <span>{project.workers.length + 1}</span>
              <svg
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <span>{project.tools.length}</span>
              <svg
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
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
