import { useState } from 'react';
import { actualSlideIndex } from './actualSlideIndex';

type UseSlideIndexReturn = {
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  handleChangeIndex: (currentIndex: number) => void;
  currentSlideNumber: number;
  previousSlideNumber: number;
  nextSlideNumber: number;
  slideIndex: number;
};

export function useSlideIndex(length: number): UseSlideIndexReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndex = (current: number) => setCurrentIndex(current);

  // For human readable texts
  const currentSlideNumber = actualSlideIndex(currentIndex, length) + 1;
  const previousSlideNumber = actualSlideIndex(currentIndex - 1, length) + 1;
  const nextSlideNumber = actualSlideIndex(currentIndex + 1, length) + 1;

  const goToNextSlide = () => setCurrentIndex(currentIndex + 1);
  const goToPreviousSlide = () => setCurrentIndex(currentIndex - 1);

  return {
    goToPreviousSlide,
    goToNextSlide,
    handleChangeIndex,
    currentSlideNumber,
    previousSlideNumber,
    nextSlideNumber,
    slideIndex: currentIndex,
  };
}
