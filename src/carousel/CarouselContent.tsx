import React from 'react';
import { makeStyles } from '@material-ui/core';
// The types for react-swipeable-views are not up to date.
// @ts-ignore
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { useSlideIndex } from './useSlideIndex';
import { actualSlideIndex } from './actualSlideIndex';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';
import { CarouselProps } from './Carousel';

const useStyles = makeStyles({
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
  carouselContainer: {
    position: 'relative',
  },
});

const VirualizedSwipableViews = bindKeyboard(virtualize(SwipeableViews));

export function CarouselContent({
  slides,
  title,
  getTranslations,
}: CarouselProps) {
  const classes = useStyles();
  const slidesCount = slides.length;
  const hasMultipleSlides = slidesCount > 1;

  const {
    goToPreviousSlide,
    goToNextSlide,
    handleChangeIndex,
    currentSlideNumber,
    previousSlideNumber,
    nextSlideNumber,
    slideIndex,
  } = useSlideIndex(slidesCount);

  const translations = getTranslations(
    currentSlideNumber,
    nextSlideNumber,
    previousSlideNumber,
    slidesCount
  );

  const slideRenderer = ({ index, key }: any) => {
    // Translate the virtual index to an actual slide to display.
    const slideToDisplay = actualSlideIndex(index, slides.length);
    const slide = slides[slideToDisplay];
    return <CarouselSlide key={key} {...slide} />;
  };

  return (
    <div className={classes.carouselRoot}>
      {title && <h2>{title}</h2>}
      <div className={classes.carouselContainer}>
        <VirualizedSwipableViews
          onChangeIndex={handleChangeIndex}
          index={slideIndex}
          slideRenderer={slideRenderer}
        />
        {hasMultipleSlides && (
          <>
            <CarouselControls
              goToPreviousSlide={goToPreviousSlide}
              goToNextSlide={goToNextSlide}
              translations={translations}
            />
            <div aria-live="polite">{translations.status}</div>
          </>
        )}
      </div>
    </div>
  );
}
