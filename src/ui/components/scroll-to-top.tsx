"use client";

import React from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./button";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 50,
  className = "",
}) => {
  const { isVisible, scrollToTop } = useScrollToTop(threshold);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 ${className}`}
    >
      <Button
        onClick={scrollToTop}
        className="group w-9 cursor-pointer rounded-full border-2 border-black bg-white p-2 shadow-md transition hover:bg-black hover:text-white"
      >
        <ChevronUp className="stroke-black transition-all duration-300 group-hover:stroke-white" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
