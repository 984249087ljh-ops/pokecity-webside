"use client";

import { useState } from "react";
import Image from "next/image";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
};

export default function SmartImage({
  src,
  alt,
  className = "",
  fallbackSrc = "/images/placeholders/option-placeholder.jpg"
}: SmartImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      loading="lazy"
      width={1200}
      height={900}
      className={className}
      onError={() => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
      }}
    />
  );
}
