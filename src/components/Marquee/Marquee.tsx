"use client";
import styles from "./Marquee.module.scss";
import { Children } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  children: React.ReactNode;
  width: number;
}

export default function Marquee({ children, width }: MarqueeProps): React.ReactNode {
  useLayoutEffect(() => {
    const marquee = document.querySelector(`.${styles.marquee}`);

    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -width * Children.count(children) + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: marquee,
          scrub: true,
          start: "-200% top",
          end: "200% top",
          // markers: true,
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.marquee} style={{ width: width * Children.count(children) }}>
      {children}
    </div>
  );
}
