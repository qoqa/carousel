import React, { createContext, useContext, useState } from 'react';
import { CarouselImageType } from './Carousel.type';
import { actualSlideIndex } from './actualSlideIndex';

export type CarouselContextType = {
  openAt: (index: number) => void;
  close: () => void;
  isOpen: boolean;
  slides: CarouselImageType[];
  slidesCount: number;
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  handleChangeIndex: (currentIndex: number) => void;
  currentSlideNumber: number;
  previousSlideNumber: number;
  nextSlideNumber: number;
  slideIndex: number;
};

const DEFAULT_VALUE: CarouselContextType = {
  close: () => void 0,
  open: () => void 0,
  indexToDisplay: 0,
  isOpen: false,
  slides: [],
  slidesCount: 0,
} as any;

const CarouselContext = createContext<CarouselContextType>(DEFAULT_VALUE);

export const CarouselContextProvider = ({
  children,
  slides,
}: {
  children: any;
  slides: CarouselImageType[];
}) => {
  const slidesCount = slides?.length || 0;
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // For human readable texts
  const currentSlideNumber = actualSlideIndex(currentIndex, slidesCount) + 1;
  const previousSlideNumber =
    actualSlideIndex(currentIndex - 1, slidesCount) + 1;
  const nextSlideNumber = actualSlideIndex(currentIndex + 1, slidesCount) + 1;

  const value: CarouselContextType = {
    openAt: (index: number) => {
      setCurrentIndex(index);
      setModalOpen(true);
    },
    close: () => setModalOpen(false),
    isOpen: modalOpen,
    goToPreviousSlide: () => setCurrentIndex(currentIndex - 1),
    goToNextSlide: () => setCurrentIndex(currentIndex + 1),
    handleChangeIndex: (current: number) => setCurrentIndex(current),
    slides,
    slidesCount,
    currentSlideNumber,
    previousSlideNumber,
    nextSlideNumber,
    slideIndex: currentIndex,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () =>
  useContext<CarouselContextType>(CarouselContext);
