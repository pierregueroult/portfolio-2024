import styles from "./page.module.scss";
import ScrollToButton from "@/components/ScrollToButton/ScrollToButton";

export default function CurriculumVitae() {
  return (
    <main>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>
          Curriculum Vitae
          <br />
          <span>pierre gueroult</span>
        </h1>
        <div className={styles.buttons}>
          <ScrollToButton target="#cv">
            <span>Scroller pour voir le CV</span>
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </ScrollToButton>
          <a href="/documents/CV.pdf" target="_blank" rel="noreferrer">
            <span>Télécharger en pleine page</span>
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
              <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
              <path d="m12 12 4 10 1.7-4.3L22 16Z" />
            </svg>
          </a>
          <a href="/documents/CV_Marges.pdf" target="_blank" rel="noreferrer">
            <span>Télécharger avec marges</span>
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
              <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
              <path d="m12 12 4 10 1.7-4.3L22 16Z" />
            </svg>
          </a>
        </div>
        <iframe src="/documents/CV.pdf" className={styles.cv} id="cv" />
      </div>
    </main>
  );
}
