"use client";

import styles from "./Arrow.module.scss";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ArrowProps {
  children?: React.ReactNode;
}

export default function Arrow({ children }: ArrowProps): React.ReactNode {
  useLayoutEffect(() => {
    const arrow = document.querySelector(`.${styles.container}`);
    const body = document.querySelector(`.${styles.body}`);

    gsap.fromTo(
      body,
      {
        width: 0,
      },
      {
        width: children ? "85%" : "95%",
        scrollTrigger: {
          trigger: arrow,
          scrub: 1.2,
          start: "-150% 80%",
          end: "1800% 80%",
          // markers: true,
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`${styles.container} ${!children && styles.containerFull}`}>
      <div className={styles.body}></div>
      <div className={styles.head}>
        <div className={styles.part}></div>
        <div className={styles.part}></div>
      </div>
      {children && <div className={styles.children}>{children}</div>}
    </div>
  );
}
