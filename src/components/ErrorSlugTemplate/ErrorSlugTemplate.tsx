"use client";
import styles from "./ErrorSlugTemplate.module.scss";
import Button from "../Button/Button";

interface ErrorSlugTemplateProps {
  error: Error & { digest?: string };
  reset: () => void;
  text: string;
  buttonLink: string;
}

// prettier-ignore
const refreshIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /> <path d="M16 16h5v5" /> </svg>);

export default function ErrorSlugTemplate({
  error,
  reset,
  text,
  buttonLink,
}: ErrorSlugTemplateProps): React.ReactNode {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h2>Erreur 404 : Introuvable</h2>
        {process.env.NODE_ENV === "development" && (
          <p>
            <code>{error.message}</code>
          </p>
        )}
        <p>
          {text} Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur, veuillez contacter{" "}
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
          <Button href={buttonLink} variant="success" size="medium" text="Retour" />
        </div>
      </section>
    </main>
  );
}
