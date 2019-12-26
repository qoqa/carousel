import { useState } from 'react';

type UseSlideIndexReturn = {
  previousSlide: () => void;
  nextSlide: () => void;
  handleChangeIndex: (currentIndex: number) => void;
  slideIndex: number;
};

function nextIndexInDirection(
  currentIndex: number,
  maxIndex: number,
  direction: 'next' | 'previous'
): number {
  const index = currentIndex + (direction === 'next' ? +1 : -1);
  if (index < 0) {
    return maxIndex;
  }

  if (index >= maxIndex) {
    return 0;
  }

  return index;
}

export function useSlideIndex(slidesLength: number): UseSlideIndexReturn {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleChangeIndex = (current: number) => setSlideIndex(current);

  const maxIndex = slidesLength - 1;
  const previousIndex = nextIndexInDirection(slideIndex, maxIndex, 'previous');
  const nextIndex = nextIndexInDirection(slideIndex, maxIndex, 'next');

  const nextSlide = () => setSlideIndex(nextIndex);
  const previousSlide = () => setSlideIndex(previousIndex);

  return {
    previousSlide,
    nextSlide,
    handleChangeIndex,
    slideIndex,
  };
}
