import React, { createContext, useCallback, useContext, useState } from 'react';
import {
  CarouselImageType,
  CarouselTranslationsFactory,
  CarouselTranslationsType,
} from './Carousel.type';
import { actualSlideIndex } from './actualSlideIndex';

export type CarouselContextType = {
  openAt: (index: number) => void;
  close: () => void;
  isOpen: boolean;
  slides: CarouselImageType[];
  slidesCount: number;
  goToSlide: (direction: number) => void;
  slideIndex: number;
  translations: CarouselTranslationsType;
  direction: number;
  hasMultipleSlides: boolean;
};

const DEFAULT_VALUE: CarouselContextType = {} as any;

const CarouselContext = createContext<CarouselContextType>(DEFAULT_VALUE);

type CarouselContextProviderProps = {
  children: any;
  slides: CarouselImageType[];
  translationsFactory: CarouselTranslationsFactory;
};

export const CarouselContextProvider = ({
  children,
  slides,
  translationsFactory,
}: CarouselContextProviderProps) => {
  const slidesCount = slides?.length || 0;
  const [modalOpen, setModalOpen] = useState(false);
  const [[currentIndex, direction], setState] = useState<Array<number>>([0, 0]);

  // For human readable texts
  const currentSlideNumber = actualSlideIndex(currentIndex, slidesCount) + 1;
  const previousSlideNumber =
    actualSlideIndex(currentIndex - 1, slidesCount) + 1;
  const nextSlideNumber = actualSlideIndex(currentIndex + 1, slidesCount) + 1;

  const translations = translationsFactory(
    currentSlideNumber,
    nextSlideNumber,
    previousSlideNumber,
    slidesCount
  );

  const goToSlide = useCallback((newDirection: number) => {
    setState(([index]) => [index + newDirection, newDirection]);
  }, []);

  const value: CarouselContextType = {
    openAt: (index: number) => {
      setState([index, 0]);
      setModalOpen(true);
    },
    close: () => setModalOpen(false),
    isOpen: modalOpen,
    goToSlide,
    slides,
    slidesCount,
    slideIndex: currentIndex,
    translations,
    direction,
    hasMultipleSlides: slidesCount > 1,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export function useCarouselContext(): CarouselContextType {
  return useContext<CarouselContextType>(CarouselContext);
}
