"use client";

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, className, ...restProps } = props;

  const baseClasses =
    "w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full appearance-none bg-transparent cursor-pointer border-0 p-0 m-0";
  const isSelected = className?.includes("selected");

  return (
    <button type="button" className={baseClasses} {...restProps}>
      <span
        className={`relative block h-2 w-2 rounded-full after:absolute after:inset-0 after:rounded-full after:border-2 after:content-[''] sm:h-3 sm:w-3 ${
          isSelected
            ? "bg-gray-900 after:border-gray-900 dark:bg-gray-100 dark:after:border-gray-100"
            : "after:border-gray-400 dark:after:border-gray-500"
        }`}
      ></span>
      {children}
    </button>
  );
};
