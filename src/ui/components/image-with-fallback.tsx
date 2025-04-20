"use client";

import { Loader2 } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc: string;
};

export default function ImageWithFallback({
  fallbackSrc,
  src,
  alt,
  className,
  fill,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const containerClassName = fill ? "relative w-full h-full" : "relative";

  return (
    <div className={containerClassName}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      )}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        onError={() => setError(true)}
        fill={fill}
        className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300 ${className || ""}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
