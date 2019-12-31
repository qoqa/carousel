import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
import { supportsObjectFit } from './browserUtils';

const useStyles = makeStyles({
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
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

const VirualizedSwipableViews = bindKeyboard(virtualize(SwipeableViews));

// Depending on the browser, we don't want to animate the height.
// Typically IE11 doesn't support this.
const supportAnimatedHeight = supportsObjectFit();

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

  const slideRenderer = ({ index, key }: any) => {
    // Translate the virtual index to an actual slide to display.
    const slideToDisplay = actualSlideIndex(index, slides.length);
    const slide = slides[slideToDisplay];
    return <CarouselSlide key={key} {...slide} />;
  };

  return (
    <div className={classes.carouselRoot}>
      <div className={classes.carouselHeader}>
        <h2 className={classes.carouselTitle}>{title}</h2>
        <IconButton className={classes.carouselCloseButton} onClick={close}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes.carouselContainer}>
        <VirualizedSwipableViews
          onChangeIndex={handleChangeIndex}
          index={slideIndex}
          slideRenderer={slideRenderer}
          animateHeight={supportAnimatedHeight}
          overscanSlideAfter={1}
          overscanSlideBefore={1}
          action={({ updateHeight }: any) => {
            requestAnimationFrame(() => {
              updateHeight();
            });
          }}
        />
        {hasMultipleSlides && (
          <CarouselControls
            goToPreviousSlide={goToPreviousSlide}
            goToNextSlide={goToNextSlide}
            translations={translations}
          />
        )}
        <div
          aria-live="polite"
          role="status"
          aria-atomic="true"
          className={classes.carouselStatus}
        >
          {hasMultipleSlides && translations.status}
        </div>
      </div>
    </div>
  );
}
