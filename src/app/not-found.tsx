import styles from "./not-found.module.scss";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Erreur 404",
  description: "Cette page n'existe pas",
};

export default function NotFound(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Cette page n&apos;existe pas</h2>
        <Link href="/">Retourner en lieu sûr</Link>
      </div>
    </main>
  );
}
