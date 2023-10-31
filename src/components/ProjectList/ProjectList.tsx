"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./ProjectList.module.scss";
import Link from "next/link";
import Image from "next/image";

import { useLayoutEffect, useRef, useState } from "react";
import ProjectIllustration from "../ProjectIllustrations/ProjectIlustrations";
import { Project, WorkerInProject, ToolInProject } from "@prisma/client";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectListProps {
  projects: Array<
    Project & {
      workers: WorkerInProject[];
      tools: ToolInProject[];
    }
  >;
}

gsap.registerPlugin(ScrollTrigger);

export default function ProjectList({ projects }: ProjectListProps): React.ReactNode {
  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(`.project-panel`);

    let ctx = gsap.context(() => {
      gsap.to(panels, {
        scrollTrigger: {
          trigger: `.${styles.container}`,
          start: "top top",
          end: "+=1600",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
        xPercent: -100 * (panels.length - 1),
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        width: `${projects.length * (550 + 80) + 100}px`,
      }}
      id="projects"
    >
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} videoEnabled />
      ))}
      <div className={styles.info}>
        <p>Tous mes projets</p>
        <p>( scroller )</p>
      </div>
    </div>
  );
}
