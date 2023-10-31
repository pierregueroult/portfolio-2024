"use client";

import { motion } from "framer-motion";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import getLinks from "@/contents/getLinks";
import { useState } from "react";
import Search from "@/components/Search/Search";

function isActiveLink(href: string, pathname: string) {
  if (href === "/") {
    return href === pathname;
  } else {
    return pathname.startsWith(href);
  }
}

export default function Navigation(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const pathname: string = usePathname();
  const links = getLinks();

  return (
    <>
      <nav className={styles.navigation} aria-label="Navigation principale">
        {links.map(({ name, href }) => (
          <Link href={href} key={name} className={styles.link}>
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
      <button className={styles.burger} onClick={() => setIsOpen(prev => !prev)}>
        <div className={styles.burgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>menu</span>
      </button>
      <nav className={`${styles.mobileNavigation} ${isOpen ? styles.isOpen : ""}`}>
        <div className={styles.searchContainer}>
          <Search placeholder="Rechercher sur le site ..." shortcut={["/", ":"]} />
        </div>
        <ul className={styles.linkContainer}>
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className={styles.link} onClick={() => setIsOpen(false)}>
                <span
                  className={
                    isActiveLink(href, pathname) ? `${styles.active} ${styles.text}` : styles.text
                  }
                >
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
