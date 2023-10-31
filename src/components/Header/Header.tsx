import styles from "./Header.module.scss";
import Search from "../Search/Search";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Navigation from "../Navigation/Navigation";

export default function Header(): JSX.Element {
  return (
    <header className={`${styles.header} header`}>
      <div className={styles.container}>
        <h1 className={styles.title}>PIERREGUEROULT.DEV</h1>
        <nav className={styles.breadcrumbs}>
          <Breadcrumbs />
        </nav>
      </div>
      <div className={styles.container}>
        <Navigation />
        <Search placeholder="Rechercher sur le site ..." shortcut={["/", ":"]} />
      </div>
    </header>
  );
}
