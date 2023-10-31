"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";
import styles from "./HorizontalScroll.module.scss";
import { Children } from "react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps): React.ReactNode {
  useLayoutEffect(() => {
    const sections: NodeListOf<Element> = document.querySelectorAll(
      `.${styles.horizontalContainer} > *`,
    );
    const appearOnScroll: NodeListOf<Element> = document.querySelectorAll(
      `.${styles.horizontalContainer} .project-appear-on-scroll`,
    );
    const listAnimation: NodeListOf<Element> = document.querySelectorAll(
      `.${styles.horizontalContainer} .list-animation > li`,
    );
    const accordions: NodeListOf<Element> = document.querySelectorAll(
      `.${styles.horizontalContainer} .journey-appear-fl`,
    );

    let ctx = gsap.context(() => {
      let mm: gsap.MatchMedia = gsap.matchMedia();

      mm.add("(min-width: 950px)", () => {
        const horizontalTween: gsap.core.Tween = gsap.to(sections, {
          scrollTrigger: {
            trigger: `.${styles.horizontalContainer}`,
            start: "top top",
            end: "+=1600",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
          xPercent: -100 * (sections.length - 1),
          ease: "none",
        });

        // const colors: string[] = ["blue", "yellow", "red", "green"];

        listAnimation.forEach((element: Element, index: number) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              x: -20,
            },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: element,
                start: `top ${80 - index * 1.2}%`,
                end: "bottom 80%",
                containerAnimation: horizontalTween,
                scrub: 1.2,
                // markers: {
                //   startColor: colors[index % colors.length],
                //   endColor: colors[index % colors.length],
                // },
              },
            },
          );
        });

        const variants: number[] = [0, 1];

        appearOnScroll.forEach((element: Element, index: number) => {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: element,
                start: !variants.includes(index) ? "top 60%" : index === 1 ? "top 20%" : "top 30%",
                end: !variants.includes(index) ? "bottom 60%" : index === 1 ? "top top" : "top 10%",
                scrub: 1.2,
                // markers: {
                //   startColor: colors[index % colors.length],
                //   endColor: colors[index % colors.length],
                // },
                containerAnimation: !variants.includes(index) ? horizontalTween : undefined,
              },
            },
          );
        });

        return () => {
          horizontalTween.kill();
          appearOnScroll.forEach((element: Element) => {
            gsap.killTweensOf(element);
          });
        };
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={styles.horizontalContainer}
      style={{ width: `${Children.count(children) * 120}vw` }}
    >
      {children}
    </div>
  );
}
