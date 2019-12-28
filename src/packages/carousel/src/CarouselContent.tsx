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
import { CarouselType } from './Carousel';
import { useCarouselContext } from './CarouselContext';

const useStyles = makeStyles({
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
  carouselContainer: {
    position: 'relative',
    lineHeight: 0,
  },
  carouselTitle: {
    margin: '1rem',
  },
  carouselStatus: {
    textAlign: 'end',
    margin: '1rem',
  },
});

const VirualizedSwipableViews = bindKeyboard(virtualize(SwipeableViews));

export function CarouselContent({
  slides,
  title,
  getTranslations,
}: CarouselType) {
  const classes = useStyles();
  const { indexToDisplay } = useCarouselContext();

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
  } = useSlideIndex(slidesCount, indexToDisplay ?? 0);

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
      {title && <h2 className={classes.carouselTitle}>{title}</h2>}
      <div className={classes.carouselContainer}>
        <VirualizedSwipableViews
          onChangeIndex={handleChangeIndex}
          index={slideIndex}
          slideRenderer={slideRenderer}
          animateHeight={true}
          overscanSlideAfter={1}
          overscanSlideBefore={1}
          action={({ updateHeight }: any) => {
            // Fix for IE11
            updateHeight();
          }}
        />
        {hasMultipleSlides && (
          <>
            <CarouselControls
              goToPreviousSlide={goToPreviousSlide}
              goToNextSlide={goToNextSlide}
              translations={translations}
            />
            <div
              aria-live="polite"
              role="status"
              aria-atomic="true"
              className={classes.carouselStatus}
            >
              {translations.status}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
