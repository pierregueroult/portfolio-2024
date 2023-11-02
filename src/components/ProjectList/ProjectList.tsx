"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./ProjectList.module.scss";

import { useLayoutEffect, useRef, useState } from "react";
import { Project, WorkerInProject, ToolInProject } from "@prisma/client";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectsWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";

interface ProjectListProps {
  projects: ProjectsWithToolsAndWorkers;
}

gsap.registerPlugin(ScrollTrigger);

export default function ProjectList({ projects }: ProjectListProps): React.ReactNode {
  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(`.project-panel`);

    let ctx: gsap.Context = gsap.context(() => {
      let mm: gsap.MatchMedia = gsap.matchMedia();

      mm.add("(min-width: 950px)", () => {
        const panelTween = gsap.to(panels, {
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

        return () => panelTween.kill();
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
