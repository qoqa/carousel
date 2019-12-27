import React from 'react';
import { CarouselSlide, CarouselSlideProps } from './CarouselSlide';
import SwipeableViews from 'react-swipeable-views';
// @ts-ignore
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/core';
import { useSlideIndex } from './useSlideIndex';
import { actualSlideIndex } from './actualSlideIndex';
import { CarouselModal } from './CarouselModal';
import { CarouselControls } from './CarouselControls';

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

function CarouselContent({ slides, title, getTranslations }: CarouselProps) {
  const classes = useStyles();
  const slidesCount = slides.length;

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
          animateHeight={true}
          slideRenderer={slideRenderer}
        />
      </div>
      <CarouselControls
        goToPreviousSlide={goToPreviousSlide}
        goToNextSlide={goToNextSlide}
        translations={translations}
      />
      <div aria-live="polite">{translations.status}</div>
    </div>
  );
}

export type CarouselTranslations = {
  nextButton: string;
  previousButton: string;
  status: string;
};

export type CarouselProps = {
  slides: CarouselSlideProps[];
  title?: string;
  getTranslations: (
    currentSlideNumber: number,
    nextSlideNumber: number,
    previousSlideNumber: number,
    slidesCount: number
  ) => CarouselTranslations;
};

export function Carousel(props: CarouselProps) {
  return (
    <CarouselModal>
      <CarouselContent {...props} />
    </CarouselModal>
  );
}
