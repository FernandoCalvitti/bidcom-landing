"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./embla-carousel-dot-buttons";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ImageResource } from "@/types/images";
import ImageWithFallback from "./image-with-fallback";

type PropType = {
  slides: ImageResource[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section
      className="mx-auto max-w-3xl"
      style={
        {
          "--slide-height": "19rem",
          "--slide-spacing": "4rem",
          "--slide-size": "100%",
        } as React.CSSProperties
      }
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-[var(--slide-spacing)] flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              className="min-w-0 flex-[0_0_var(--slide-size)] translate-x-0 translate-y-0 translate-z-0 transform pl-[var(--slide-spacing)]"
              key={index}
            >
              <div className="relative h-full min-h-[320px] w-full min-w-[320px] overflow-hidden rounded-[60px] rounded-tr-[25px] rounded-bl-[25px] shadow-lg sm:h-[700px] sm:w-[600px] sm:rounded-[125px] sm:rounded-tr-[50px] sm:rounded-bl-[50px] md:h-[500px] md:w-[450px] xl:h-[600px] xl:w-[600px]">
                <ImageWithFallback
                  src={slide.image}
                  fallbackSrc={`/images/fallback-carousel/fallback-image-${index}.webp`}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[auto_1fr] justify-between gap-4">
        <div className="grid grid-cols-2 items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="-mr-2 flex flex-wrap items-center justify-end">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? "selected" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
