"use client";
import { useEffect } from "react";
import styles from "./error.module.scss";
import Button from "@/components/Button/Button";

interface ProjectErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// prettier-ignore
const refreshIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /> <path d="M16 16h5v5" /> </svg>);

export default function ProjectError({ error, reset }: ProjectErrorProps): React.ReactNode {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h2>Erreur dans le projet 🤒</h2>
        <p>
          <code>{error.message}</code>
        </p>
        <p>
          Le projet que vous chercher n&apos;existe pas ou n&apos;est pas accessible. Si vous pensez
          qu&apos;il s&apos;agit d&apos;une erreur, veuillez contacter{" "}
          <a href="mailto:contact@pierregueroult.dev">l&apos;administrateur du site.</a>
        </p>
        <div>
          <Button
            action={reset}
            variant="danger"
            size="medium"
            text="Réessayer"
            icon={refreshIcon}
          />
          <Button href="/projects" variant="success" size="medium" text="Voir les projets" />
        </div>
      </section>
    </main>
  );
}
