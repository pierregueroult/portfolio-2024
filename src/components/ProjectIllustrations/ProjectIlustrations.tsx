"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ProjectIllustrationsProps {
  video: {
    src: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export default function ProjectIllustration({
  video,
  image,
}: ProjectIllustrationsProps): React.ReactNode {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const triggerMouseEnter = () => {
    videoRef.current?.play();
    setIsHovered(true);
  };

  const triggerMouseLeave = () => {
    videoRef.current?.pause();
    setIsHovered(false);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        height={1920 / 2}
        width={1080 / 2}
        onMouseEnter={triggerMouseEnter}
        onMouseLeave={triggerMouseLeave}
        className={isHovered ? "hovered" : ""}
      />
      <video className={isHovered ? "visible" : ""} ref={videoRef} muted controls={false}>
        <source src={video.src} type="video/mp4" />
      </video>
    </>
  );
}
