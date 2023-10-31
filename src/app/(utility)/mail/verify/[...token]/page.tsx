import styles from "./page.module.scss";

interface Props {
  params: {
    token: string[];
  };
}

const env = process.env.NODE_ENV || "development";

export default function VerifyNewsletter({ params: { token } }: Props): React.ReactNode {
  if (!token) {
    throw new Error("No token provided");
  }
  if (token.length !== 2) {
    throw new Error("Invalid token provided");
  }

  return (
    <main className={styles.main}>
      <section
        style={{
          width: "95%",
          maxWidth: "600px",
          aspectRatio: "4/3",
          backgroundColor: "#343b45",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "var(--font)",
            textTransform: "uppercase",
            width: "90%",
            lineHeight: 1,
          }}
        >
          Vérification du mail
        </h1>
        <br />
        <h2
          style={{
            width: "90%",
            fontSize: "1.7rem",
            fontWeight: 500,
            color: "#ae9f86",
            fontFamily: "var(--display)",
            textTransform: "lowercase",
            fontStyle: "italic",
            lineHeight: 0.7,
          }}
        >
          pierregueroult .dev
        </h2>
        <br />
        <p
          style={{
            width: "90%",
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "#ffffff",
            fontFamily: "var(--font)",
            lineHeight: 1.5,
            marginTop: "1rem",
          }}
        >
          Bonjour{" "}
          <span
            style={{
              color: "#ae9f86",
            }}
          >
            {token[1].replace("%40", "@")}
          </span>
          , merci de vous être inscrit à la newsletter de{" "}
          <a
            href={env === "development" ? `http://localhost:3000/` : `https://pierregueroult.dev/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "#ae9f86",
              fontFamily: "var(--font)",
              lineHeight: 1.5,
              textAlign: "justify",
              marginTop: "1rem",
              textDecoration: "none",
              transition: "color 0.3s ease-in-out",
            }}
          >
            pierregueroult.dev
          </a>
          . Cliquez sur le lien ci-dessous pour confirmer votre inscription et recevoir les mails
          lors d&apos;apparition de nouveaux articles ou de nouvelles fonctionnalités.
        </p>
        <br />
        <a
          href={
            env === "development"
              ? `http://localhost:3000/api/register/verify?token=${token[0]}`
              : `https://pierregueroult.dev/api/register/verify/?token=${token[0]}`
          }
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            fontFamily: "var(--display)",
            textTransform: "lowercase",
            color: "#ae9f86",
            fontStyle: "italic",
            transition: "color 0.3s ease-in-out",
            width: "fit-content",
            position: "relative",
            padding: "0.5rem",
          }}
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          Vérifier mon mail
        </a>
      </section>
    </main>
  );
}
