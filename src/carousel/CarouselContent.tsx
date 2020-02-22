import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSlideIndex } from './useSlideIndex';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';
import { CarouselType } from './Carousel';
import { useCarouselContext } from './CarouselContext';
import { SwipeableViewsContainer } from './SwipeableViewsContainer';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: grey[800],
  },
  carouselContainer: {
    position: 'relative',
    lineHeight: 0,
  },
  carouselHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  carouselTitle: {
    margin: '1rem',
  },
  carouselCloseButton: {
    margin: '0.5rem',
  },
  carouselStatus: {
    textAlign: 'end',
    margin: '1rem',
  },
});

export function CarouselContent({
  slides,
  title,
  getTranslations,
}: CarouselType) {
  const classes = useStyles();
  const { indexToDisplay, close } = useCarouselContext();

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

  return (
    <div className={classes.carouselRoot}>
      <div className={classes.carouselHeader}>
        <h2 className={classes.carouselTitle}>{title}</h2>
        <IconButton className={classes.carouselCloseButton} onClick={close}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes.carouselContainer}>
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
      <div
        aria-live="polite"
        role="status"
        aria-atomic="true"
        className={classes.carouselStatus}
      >
        {hasMultipleSlides && translations.status}
      </div>
    </div>
  );
}
