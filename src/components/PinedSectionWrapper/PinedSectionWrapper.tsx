"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PinedSectionWrapperProps {
  children: React.ReactNode;
}

export default function PinedSectionWrapper({
  children,
}: PinedSectionWrapperProps): React.ReactNode {
  useEffect(() => {
    const sections = gsap.utils.toArray(".pinned");

    let ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          // @ts-ignore
          trigger: section,
          start: "top top",
          endTrigger: ".end-pin",
          end: "top top",
          pin: true,
          pinSpacing: false,
          id: `${i + 1}`,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
