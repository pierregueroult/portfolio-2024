"use client";

import styles from "./ConsentForm.module.scss";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { ConsentObject } from "@/types/ConsentObject";
import { motion } from "framer-motion";

interface ConsentFormProps {
  handleChange: ({ vercel, google }: ConsentObject) => void;
  handleForm: ({ vercel, google }: ConsentObject) => void;
}

const consentDefault: ConsentObject = { vercel: true, google: true };

export default function ConsentForm({ handleChange, handleForm }: ConsentFormProps): JSX.Element {
  const [form, setForm] = useState<boolean>(false);
  const [values, setValues] = useState<ConsentObject>(consentDefault);

  const preventForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleForm(values);
  };

  return (
    <motion.aside
      className={styles.consent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={"1"}
    >
      <h1 className={styles.title}>Accepter les cookies</h1>
      {form ? (
        <form onSubmit={preventForm} className={styles.form}>
          <div className={styles.toggleContainer}>
            <button
              id="google_analytics"
              onClick={() =>
                setValues((prev: ConsentObject) => ({ ...prev, google: !prev.google }))
              }
              className={`${styles.toggle} ${values.google ? styles.on : ""}`}
              value={`${values.google}`}
            >
              <span className={styles.toggleCircle}></span>
            </button>
            <label htmlFor="google_analytics" className={styles.toggleLabel}>
              Google Analytics
            </label>
          </div>
          <div className={styles.toggleContainer}>
            <button
              id="vercel_analytics"
              onClick={() =>
                setValues((prev: ConsentObject) => ({ ...prev, vercel: !prev.vercel }))
              }
              className={`${styles.toggle} ${values.vercel ? styles.on : ""}`}
              value={`${values.vercel}`}
            >
              <span className={styles.toggleCircle}></span>
            </button>
            <label htmlFor="vercel_analytics" className={styles.toggleLabel}>
              Vercel Analytics
            </label>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => setForm(false)} className={styles.button}>
              Annuler
            </button>
            <button type="submit" className={`${styles.button} ${styles.accept}`}>
              Continuer
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className={styles.description}>
            Ce site utilise des cookies pour la mesure d&apos;audience et l&apos;analyse de trafic.
            En cliquant sur &quot;Accepter&quot;, vous acceptez l&apos;utilisation de ces cookies
            suivant les conditions décrites dans notre{" "}
            <Link href="/privacypolicy" className={styles.link}>
              politique de confidentialité
            </Link>
            .
          </p>
          <div className={styles.buttons}>
            <button onClick={() => setForm(true)} className={`${styles.button}`}>
              Personnaliser
            </button>
            <button
              onClick={() => handleChange({ vercel: true, google: true })}
              className={`${styles.button} ${styles.accept}`}
            >
              Accepter
            </button>
          </div>
        </>
      )}
    </motion.aside>
  );
}
