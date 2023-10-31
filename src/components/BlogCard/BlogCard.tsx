"use client";

import { Article } from "@prisma/client";
import Image from "next/image";
import styles from "./BlogCard.module.scss";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlogCardProps {
  article: Article;
  size: "small" | "medium" | "large";
}

export default function BlogCard({ article, size }: BlogCardProps): React.ReactNode {
  const tagContainer = useRef<HTMLUListElement>(null);
  const arrow = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (tagContainer.current) {
        gsap.fromTo(
          tagContainer.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: tagContainer.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
      if (arrow.current) {
        gsap.fromTo(
          arrow.current,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: arrow.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <article
      className={`${styles.card} ${
        size === "large" ? styles.large : size === "medium" ? styles.medium : styles.small
      }`}
    >
      <Link href={`/blog/${article.id}`}>
        <Image
          src={article.image}
          alt={article.title}
          width={size === "large" ? 500 : size === "medium" ? 300 : 300}
          height={size === "large" ? 650 : size === "medium" ? 500 : 150}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{article.title}</h2>
          <ul className={styles.tags} ref={tagContainer}>
            {article.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {size !== "small" && (
            <>
              <p>
                {size === "large"
                  ? article.content.split("#")[0]
                  : article.content.split(".")[0] + " "}
                (...)
              </p>
              <button className={styles.button}>
                Voir l&apos;article
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
                  ref={arrow}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>{" "}
              </button>
            </>
          )}
        </div>
      </Link>
    </article>
  );
}
