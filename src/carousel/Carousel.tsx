import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';
import { CarouselType } from './Carousel.type';
import { useCarouselContext } from './CarouselContext';
import { SwipeableViewsContainer } from './SwipeableViewsContainer';

const useStyles = makeStyles({
  carouselContainer: {
    position: 'relative',
    lineHeight: 0,
  },
});

export function Carousel({ getTranslations }: CarouselType) {
  const { carouselContainer } = useStyles();
  const {
    slidesCount,
    slides,
    goToPreviousSlide,
    goToNextSlide,
    handleChangeIndex,
    currentSlideNumber,
    previousSlideNumber,
    nextSlideNumber,
    slideIndex,
  } = useCarouselContext();

  const translations = getTranslations(
    currentSlideNumber,
    nextSlideNumber,
    previousSlideNumber,
    slidesCount
  );

  const hasMultipleSlides = slidesCount > 1;

  return (
    <div className={carouselContainer}>
      <SwipeableViewsContainer
        handleChangeIndex={handleChangeIndex}
        currentIndex={slideIndex}
        ViewComponent={CarouselSlide}
        viewProps={slides}
      />
      {hasMultipleSlides && (
        <CarouselControls
          goToPreviousSlide={goToPreviousSlide}
          goToNextSlide={goToNextSlide}
          translations={translations}
        />
      )}
    </div>
  );
}
