"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className }: ProjectImageProps): React.ReactNode {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const images = document.querySelectorAll(".main-project-images");
    let ctx = gsap.context(() => {
      images.forEach((image: Element) => {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: image,
              start: "top 75%",
              end: "+=200 75%",
              scrub: 1.2,
              // markers: true,
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Image
      src={src}
      alt={alt}
      onLoad={img => setHeight(img.currentTarget.height)}
      width={1400}
      height={height ? height : 1400}
      className={className ? `${className} main-project-images` : "main-project-images"}
    />
  );
}
