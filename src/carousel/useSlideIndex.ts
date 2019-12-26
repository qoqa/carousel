import { useState } from 'react';

type UseSlideIndexReturn = {
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  handleChangeIndex: (currentIndex: number) => void;
  currentSlideNumber: number;
  previousSlideNumber: number;
  nextSlideNumber: number;
};

export function actualIndex(index: number, totalLength: number) {
  return ((index % totalLength) + totalLength) % totalLength;
}

export function useSlideIndex(length: number): UseSlideIndexReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndex = (current: number) => setCurrentIndex(current);

  // For human readable texts
  const currentSlideNumber = actualIndex(currentIndex, length) + 1;
  const previousSlideNumber = actualIndex(currentIndex - 1, length) + 1;
  const nextSlideNumber = actualIndex(currentIndex + 1, length) + 1;

  const goToNextSlide = () => setCurrentIndex(currentIndex + 1);
  const goToPreviousSlide = () => setCurrentIndex(currentIndex - 1);

  return {
    goToPreviousSlide,
    goToNextSlide,
    handleChangeIndex,
    currentSlideNumber,
    previousSlideNumber,
    nextSlideNumber,
  };
}
