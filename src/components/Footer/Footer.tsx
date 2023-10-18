import getLinks from "@/contents/getLinks";
import styles from "./Footer.module.scss";
import getSocialMedia from "@/contents/getSocialMedia";
import Link from "next/link";
import Newsletter from "../Newsletter/Newsletter";
import CarbonBadgeElement from "../CarbonBadge/CarbonBadge";
import { linksType } from "@/types/link";

export default function Footer(): React.ReactNode {
  const socialMedia = getSocialMedia();
  const links: linksType = getLinks();

  links.push({ name: "Admin", href: "/admin" }, { name: "CV", href: "/curriculum-vitae" });

  return (
    <footer className={styles.footer}>
      <div className={styles.containerRow}>
        <div className={styles.subcontainer}>
          <div className={styles.logo}></div>
          <div>
            <h3 className={styles.title}>Portfolio 2024</h3>
            <p className={styles.subtitle}>Pierre Guéroult</p>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.subcontainer}>
          <ul className={styles.links}>
            {links.map(({ name, href }, i) => (
              <li key={i}>
                <Link href={href} className={styles.link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.subcontainer}>
          <ul className={`${styles.links} ${styles.variant}`}>
            <li>
              <Link href="/legals/termsofuse" className={styles.link}>
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/legals/privacypolicy" className={styles.link}>
                Politique de confidentialité
              </Link>
            </li>
            <li className={styles.link}>
              <CarbonBadgeElement className={styles.link} />
            </li>
          </ul>
        </div>
        <div className={styles.separator}></div>
        <div className={`${styles.subcontainer} ${styles.variant}`}>
          <Newsletter />
          <p className={styles.subtitle}>
            Me contacter à{" "}
            <a href="mailto:contact@pierregueroult.dev" className={styles.link}>
              perso@pierregueroult.dev
            </a>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <ul className={styles.socialMedia}>
          {socialMedia.map(({ icon, alt, link }, i) => (
            <li key={i} className={styles.item}>
              <a
                href={link}
                dangerouslySetInnerHTML={{ __html: icon }}
                title={alt}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <span>{alt}</span>
            </li>
          ))}
        </ul>
        <p className={styles.credits}>
          <span>Codé avec</span>
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
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span>par Pierre Guéroult</span>
        </p>
      </div>
    </footer>
  );
}
