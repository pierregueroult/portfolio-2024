"use client";
import styles from "./Newsletter.module.scss";

export default function Newsletter(): React.ReactNode {
  return (
    <form action="" className={styles.newsletter}>
      <input type="text" placeholder="Votre adresse e-mail" className={styles.input} />
      <button type="submit" className={styles.button}>
        S&apos;inscrire
      </button>
    </form>
  );
}
