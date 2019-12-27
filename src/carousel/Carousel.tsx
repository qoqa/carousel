import React from 'react';
import { CarouselSlideType } from './CarouselSlide';
import { CarouselModal } from './CarouselModal';
import { CarouselContent } from './CarouselContent';

export type CarouselTranslationsType = {
  nextButton: string;
  previousButton: string;
  status: string;
};

export type CarouselType = {
  slides: CarouselSlideType[];
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
