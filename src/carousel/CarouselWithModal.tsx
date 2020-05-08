import React from 'react';
import { CarouselModal } from './CarouselModal';
import { CarouselModalContent } from './CarouselModalContent';
import { CarouselType } from './Carousel.type';

export function CarouselWithModal(props: CarouselType) {
  return (
    <CarouselModal isInitiallyOpen={props.isInitiallyOpen}>
      <CarouselModalContent {...props} />
    </CarouselModal>
  );
}
