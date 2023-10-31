"use client";

import { useState, ReactNode, useRef, CSSProperties } from "react";
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  text: string;
  date?: string;
  label?: string;
}

export default function Accordion({ text, title, label, date }: AccordionProps): ReactNode {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className={`${styles.container} journey-appear-fl`}>
      <button
        className={styles.top}
        onClick={() => setIsCollapsed(prev => !prev)}
        aria-expanded={!isCollapsed ? "true" : "false"}
        aria-controls={`${title}-content`}
      >
        <div className={styles.title}>
          <h3>{title}</h3>
          {date && <span>{date}</span>}
        </div>
        <div className={styles.chevron}>
          {label && <span>{label}</span>}
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
            className={isCollapsed ? styles.collapsed : ""}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>
      <div
        className={`${styles.content} ${isCollapsed ? styles.collapsed : ""}`}
        id={`${title}-content`}
        aria-hidden={isCollapsed}
        aria-labelledby={`${title}-content`}
        style={
          {
            "--content-height": paragraphRef.current?.clientHeight! + 16 + "px",
          } as CSSProperties
        }
      >
        <p ref={paragraphRef}>{text}</p>
      </div>
    </div>
  );
}
