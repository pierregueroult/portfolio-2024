"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function UlChildAppearAtScroll({ className, children }: Props): JSX.Element {
  useLayoutEffect(() => {
    ScrollTrigger.batch(`.${className} > li`, {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ul className={className}>{children}</ul>;
}
