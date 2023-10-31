"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MainImageProps {
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function MainImage(props: MainImageProps): React.ReactNode {
  useEffect(() => {
    const image = gsap.utils.toArray(`.${props.className}`);

    let ctx = gsap.context(() => {
      gsap.to(image, {
        width: "20vw",
        height: "60vh",
        left: "65vw",
        top: "96vh",
        objectPosition: "50% 50%",
        scrollTrigger: {
          trigger: `.${props.className}`,
          start: "top top",
          end: `100% 15%`,
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      className={props.className}
    />
  );
}
