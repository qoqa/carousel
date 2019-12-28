import React from 'react';
import { CarouselModal } from './CarouselModal';
import { CarouselContent } from './CarouselContent';

export type CarouselTranslationsType = {
  nextButton: string;
  previousButton: string;
  status: string;
};

export type CarouselImageType = {
  src: string;
  srcPreview: string;
  srcWebp?: string;
  alt: string;
  width: string | number;
  height: string | number;
};

export type CarouselType = {
  slides: CarouselImageType[];
  title?: string;
  isInitiallyOpen?: boolean;
  getTranslations: (
    currentSlideNumber: number,
    nextSlideNumber: number,
    previousSlideNumber: number,
    slidesCount: number
  ) => CarouselTranslationsType;
};

export function Carousel(props: CarouselType) {
  return (
    <CarouselModal isInitiallyOpen={props.isInitiallyOpen}>
      <CarouselContent {...props} />
    </CarouselModal>
  );
}
