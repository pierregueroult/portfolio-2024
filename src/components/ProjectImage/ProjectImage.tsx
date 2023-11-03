"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className }: ProjectImageProps): React.ReactNode {
  const [height, setHeight] = useState<number | null>(null);

  return (
    <Image
      src={src}
      alt={alt}
      onLoad={img => setHeight(img.currentTarget.height)}
      width={1400}
      height={height ? height : 1400}
      className={className ? className : ""}
    />
  );
}
