import React from 'react';
import { CarouselSlideProps } from './CarouselSlide';
import { CarouselModal } from './CarouselModal';
import { CarouselContent } from './CarouselContent';

export type CarouselTranslations = {
  nextButton: string;
  previousButton: string;
  status: string;
};

export type CarouselProps = {
  slides: CarouselSlideProps[];
  title?: string;
  getTranslations: (
    currentSlideNumber: number,
    nextSlideNumber: number,
    previousSlideNumber: number,
    slidesCount: number
  ) => CarouselTranslations;
};

export function Carousel(props: CarouselProps) {
  return (
    <CarouselModal>
      <CarouselContent {...props} />
    </CarouselModal>
  );
}
