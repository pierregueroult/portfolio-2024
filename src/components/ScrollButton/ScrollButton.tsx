"use client";
import styles from "./ScrollButton.module.scss";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ScrollButtonProps {
  target: string;
}

export default function ScrollButton({ target }: ScrollButtonProps): React.ReactNode {
  return (
    <div
      className={styles.scrollDown}
      onClick={() => {
        gsap.to(window, {
          duration: 0.2,
          scrollTo: {
            y: target,
            offsetY: 20,
          },
        });
      }}
    >
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
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
      <span>Scroller vers le bas</span>
    </div>
  );
}
