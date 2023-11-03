// styles
import styles from "./page.module.scss";
// components
import Image from "next/image";
import Link from "next/link";
// custom components
import MainImage from "@/components/MainImage/MainImage";
import FixedHeader from "@/components/FixedHeader/FixedHeader";
import ContactForm from "@/components/ContactForm/ContactForm";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Arrow from "@/components/Arrow/Arrow";
import ScrollToButton from "@/components/ScrollToButton/ScrollToButton";
import ProjectCardHome from "@/components/ProjectCardHome/ProjectCardHome";
import Accordion from "@/components/Accordion/Accordion";
// contents
import getTopics from "@/contents/getTopics";
import getTechs from "@/contents/getTechs";
import getProjects from "@/contents/getProjects";
import getDiplomas from "@/contents/getDiploma";
import getExperiences from "@/contents/getExperiences";
// utils
import sortTechsByType from "@/utils/sortTechsByType";
// types
import { type Tech } from "@prisma/client";
import { type ProjectsWithToolsAndWorkers } from "@/types/ProjectWithToolsAndWorkers";
import { Fragment, type CSSProperties } from "react";
import type { Diplomas, Diploma } from "@/contents/getDiploma";
import type { Experiences, Experience } from "@/contents/getExperiences";

export default async function Home(): Promise<JSX.Element> {
  // récupération des données fixes
  const topics: string[] = getTopics();
  const diplomas: Diplomas = getDiplomas();
  const experiences: Experiences = getExperiences();
  // récupération des données dynamiques (base de données)
  const techs: Tech[] | null = await getTechs();
  var projects: ProjectsWithToolsAndWorkers | null = await getProjects(4);

  // vérification des données récupérées
  if (!techs || !projects) throw new Error("Error database connection");

  // formatage des données
  const sortedTechs: { [key: string]: Array<Tech> } = sortTechsByType(techs);

  // rendu de la page
  return (
    <main className={styles.main}>
      <MainImage
        src="/images/impresionism/default0.jpg"
        width={1920}
        height={1080}
        alt="Landing"
        className={styles.mainImage}
      />
      <FixedHeader />
      <section className={styles.landing}>
        <div className={styles.title}>
          <h1>
            Pierre Guéroult
            <br />
            <span>développeur full stack</span>
          </h1>
        </div>
        <div className={styles.landingContainer}>
          <div className={styles.landingText}>
            <p>
              Bienvenue sur mon <strong>Portfolio 2024</strong>, il vous permettra de découvrir mes
              projets, mes compétences et mon parcours.
            </p>
            <ScrollToButton target="#summary" offset={-80}>
              <span>Scrollez pour en savoir plus </span>
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
          <div className={styles.landingImage}>
            <Image
              src="/images/me/impressionism.png"
              width={290}
              height={435}
              alt="Photo de Pierre Guéroult en style impressionniste"
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className={styles.summary} id="summary">
        <article className={styles.panel}>
          <h2>
            Étudiant
            <br />
            <span>et autodidacte</span>
          </h2>
          <p>
            Actuellement en 2ème année de ma formation en{" "}
            <strong>Métiers du Multimédia et de l&apos;Internet</strong> au sein de l&apos;IUT de
            Rouen (antenne d&apos;Elbeuf), je renforce mes compétences dans divers domaines, y
            compris <strong>le graphisme et l&apos;audiovisuel</strong>, deux domaines qui
            m&apos;intéressent grandement.
          </p>
          <p>
            Depuis l&apos;âge de 14 ans, j&apos;ai consacré mon temps libre au{" "}
            <strong>développement de sites web</strong> au travers de ressources telles qu&apos;
            <strong>OpenClassrooms et W3Schools</strong>, je suis capable de créer des applications
            web complètes avec des <strong>technologies populaires et innovantes</strong>.
          </p>
          <div className={styles.buttonContainer}>
            <ScrollToButton target="#projects">
              <span>Découvrir mes derniers projets</span>
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
            <ScrollToButton target="#skills">
              <span>Découvrir mes compétences</span>
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
            </ScrollToButton>
          </div>
        </article>
      </section>
      <HorizontalScroll>
        <section className={styles.projects} id="projects">
          <div className={styles.projectsContainer}>
            {projects.map(projects => (
              <ProjectCardHome key={projects.id} project={projects} />
            ))}
          </div>
          <Arrow>
            <Link href="/projects" className={styles.arrowLink}>
              <span>Voir tous mes projets</span>
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
            </Link>
          </Arrow>
        </section>
        <section className={styles.journey} id="journey">
          <div className={styles.journeyContainer}>
            <div className={styles.journeyLeft}>
              <div className={styles.journeyTitle}>
                <h1>
                  Compétences <br />
                  <span>et expériences</span>
                </h1>
              </div>
              <ul className={styles.journeyTechs}>
                {Object.keys(sortedTechs).map((type: string) => (
                  <li key={type}>
                    <h2>{type}</h2>
                    <ul className="list-animation">
                      {sortedTechs[type].map(tech => (
                        <Fragment key={tech.id}>
                          <li
                            style={
                              {
                                "--tech-color": `hsla(${tech.colorHue}, ${tech.colorSat}%, ${tech.colorLight}%, 1)`,
                              } as CSSProperties
                            }
                          >
                            {tech.name}
                            <Image
                              src={tech.icon}
                              width={64}
                              height={64}
                              alt={`Icône de ${tech.name}`}
                            />
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.journeyRight}>
              <h2>Diplômes</h2>
              {diplomas.map((diploma: Diploma, i: number) => (
                <Accordion
                  key={i}
                  title={diploma.title}
                  date={diploma.date}
                  label={diploma.honors}
                  text={diploma.description}
                />
              ))}
              <h2>Expériences</h2>
              {experiences.map((experience: Experience, i: number) => (
                <Accordion
                  key={i}
                  title={experience.title}
                  date={experience.date}
                  text={experience.description}
                />
              ))}
              {experiences.length === 0 && (
                <p>
                  Je n&apos;ai pas encore eu d&apos;expérience professionnelle dans le domaine du
                  développement web, n&apos;hésitez pas à me contacter ci-dessous pour me proposer
                  un stage !
                </p>
              )}
            </div>
          </div>
        </section>
      </HorizontalScroll>
      <section className={`${styles.contact}`} id="contact">
        <div className={styles.contactContainer}>
          <div className={styles.topics}>
            <h3>Pour parler de ...</h3>
            <ul className={styles.topicsList}>
              {topics.map(topic => (
                <li key={topic} className={styles.topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
