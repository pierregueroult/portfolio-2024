"use client";

import { motion } from "framer-motion";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import getLinks from "@/contents/getLinks";
import { type linksType, type linkType } from "@/types/link";

function isActiveLink(href: string, pathname: string) {
  return href === pathname;
}

export default function Navigation(): React.ReactNode {
  const pathname: string = usePathname();
  const links: linksType = getLinks();

  return (
    <nav className={styles.navigation} aria-label="Navigation principale">
      {links.map(({ name, href }: linkType) => (
        <Link href={href} key={name} className={styles.link} scroll={false}>
          <span
            className={
              isActiveLink(href, pathname) ? `${styles.active} ${styles.text}` : styles.text
            }
          >
            {name}
          </span>
          {isActiveLink(href, pathname) && (
            <motion.div layoutId="navigation-underline" className={styles.line} />
          )}
        </Link>
      ))}
    </nav>
  );
}
