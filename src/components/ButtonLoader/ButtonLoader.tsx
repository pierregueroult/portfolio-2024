import styles from "./ButtonLoader.module.scss";

export default function ButtonLoader(): React.ReactNode {
  return (
    <div className={styles.container}>
      <div className={styles.element}></div>
      <div className={styles.element}></div>
      <div className={styles.element}></div>
    </div>
  );
}
