import styles from "./layout.module.scss";
import Link from "next/link";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps): React.ReactNode {
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <h3 className={styles.title}>Portfolio 2024</h3>
        <hr className={styles.separator} />
        <nav className={styles.nav} role="navigation" aria-label="admin navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/admin" className={styles.navLink}>
                Dashboard
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin/articles" className={styles.navLink}>
                Articles
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin/projects" className={styles.navLink}>
                Projets
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin/images" className={styles.navLink}>
                Images
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin/backup" className={styles.navLink}>
                Backup
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className={styles.container}>{children}</div>
    </main>
  );
}
