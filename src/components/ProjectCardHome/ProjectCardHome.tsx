"use client";
// dependencies
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// styles
import styles from "./ProjectCardHome.module.scss";
// components
import Image from "next/image";
import Link from "next/link";
// types
import { ProjectWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardHomeProps {
  project: ProjectWithToolsAndWorkers;
}

export default function ProjectCardHome({ project }: ProjectCardHomeProps) {
  return (
    <article className={`${styles.project} project-appear-on-scroll`}>
      <Link href={`/projects/${project.id}`}>
        <div className={styles.imageContainer}>
          <Image
            src={project.thumbnailImage}
            width={1920 / 2}
            height={960 / 2}
            alt={project.title}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>{project.title}</h2>
            <p>
              {project.type === "website"
                ? "Site Web"
                : project.type === "video"
                ? "Vidéo"
                : project.type === "dev"
                ? "Programmation"
                : "Projet Autre"}
              {` - ${project.context}`}
            </p>
          </div>
          <div className={styles.arrow}>
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
