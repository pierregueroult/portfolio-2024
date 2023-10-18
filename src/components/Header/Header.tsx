import styles from "./Header.module.scss";
import Search from "../Search/Search";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Navigation from "../Navigation/Navigation";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Pierre Guéroult - Portfolio 2024</h1>
        <nav className={styles.breadcrumbs}>
          <Breadcrumbs />
        </nav>
      </div>
      <div className={styles.container}>
        <Navigation />
        <Search
          targetSelector="#main"
          placeholder="Rechercher où aller à ..."
          shortcut={["/", ":"]}
        />
      </div>
    </header>
  );
}
