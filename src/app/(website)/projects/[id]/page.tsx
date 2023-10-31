import styles from "./page.module.scss";
import getProject from "@/contents/getProject";
import Image from "next/image";
import ProjectImage from "@/components/ProjectImage/ProjectImage";
import { Fragment } from "react";

interface ProjectProps {
  params: {
    id: string;
  };
}

export default async function Project({ params: { id } }: ProjectProps) {
  const project = await getProject(id);

  if (project === null) {
    throw new Error(`Project ${id} not found`);
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.container}>
          <Image
            src={project.thumbnailImage}
            width={1920}
            height={960}
            alt={`${project.title} thumbnail`}
          />
          <div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.tools}>
              Projet réalisé avec :{" "}
              {project.tools.map(content => (
                <Fragment key={content.id}>
                  <span>{content.tool.name}</span>
                </Fragment>
              ))}
            </p>
          </div>
        </div>
        <section className={styles.content}>
          <article className={styles.imagesContainer}>
            {project.bannersUrls.map((image, index) => (
              <ProjectImage key={index} src={image} alt={`${project.title} banner ${index}`} />
            ))}
          </article>
          <aside className={styles.aside}>
            <p className={styles.context}>{project.context}</p>
            <div>
              <p className={styles.legend}>Réalisé avec : </p>
              <ul className={styles.asideTools}>
                {project.tools.map(content => (
                  <li key={content.id}>
                    <div dangerouslySetInnerHTML={{ __html: content.tool.icon }}></div>
                    <span>{content.tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.workers.length > 0 && (
              <div>
                <p className={styles.legend}>L&apos;équipe du projet :</p>
                <ul className={styles.worker}>
                  {project.workers.map(content => (
                    <li key={content.id}>
                      <span>
                        {content.worker.firstName},{" "}
                        <span className={styles.role}>{content.role}</span>
                      </span>
                      <div>
                        <a
                          href={content.worker.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                        {content.worker.websiteUrl && (
                          <a
                            href={content.worker.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className={styles.legend}>
              Projet réalisé en{" "}
              {project.date.getMonth() === 0
                ? "Janvier"
                : project.date.getMonth() === 1
                ? "Février"
                : project.date.getMonth() === 2
                ? "Mars"
                : project.date.getMonth() === 3
                ? "Avril"
                : project.date.getMonth() === 4
                ? "Mai"
                : project.date.getMonth() === 5
                ? "Juin"
                : project.date.getMonth() === 6
                ? "Juillet"
                : project.date.getMonth() === 7
                ? "Août"
                : project.date.getMonth() === 8
                ? "Septembre"
                : project.date.getMonth() === 9
                ? "Octobre"
                : project.date.getMonth() === 10
                ? "Novembre"
                : "Décembre"}{" "}
              {project.date.getFullYear()}
            </p>
            <ul className={styles.worker}>
              {project.assets.map((content, id) => (
                <li key={id} className={styles.asset}>
                  {content.startsWith("https://github.com") ? (
                    <a href={content} target="_blank" rel="noopener noreferrer">
                      <span>Voir le code</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </a>
                  ) : content.startsWith("http") ? (
                    <a href={content} target="_blank" rel="noopener noreferrer">
                      <span>Voir le site</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </a>
                  ) : content.startsWith("<") ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: content }}
                      className={styles.iframe}
                    ></div>
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
