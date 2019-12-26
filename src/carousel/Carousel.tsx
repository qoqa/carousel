import React from 'react';
import { CarouselSlide, CarouselSlideProps } from './Slide';
import SwipeableViews from 'react-swipeable-views';
import { Fab, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSlideIndex } from './useSlideIndex';

type CarouselProps = {
  slides: CarouselSlideProps[];
  title?: string;
};

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  arrowsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export function Carousel({ slides, title }: CarouselProps) {
  const classes = useStyles();

  const {
    previousSlide,
    nextSlide,
    handleChangeIndex,
    slideIndex,
  } = useSlideIndex(slides.length);

  return (
    <>
      {title && <h3>{title}</h3>}
      <div className={classes.container}>
        <SwipeableViews
          onChangeIndex={handleChangeIndex}
          index={slideIndex}
          containerStyle={{
            alignItems: 'center',
          }}
        >
          {slides.map(slide => (
            <CarouselSlide key={slide.id} {...slide} />
          ))}
        </SwipeableViews>
        <div className={classes.arrowsContainer}>
          <Fab onClick={previousSlide}>
            <ArrowBackIcon titleAccess="Previous" />
          </Fab>
          <Fab onClick={nextSlide}>
            <ArrowForwardIcon titleAccess="Next" />
          </Fab>
        </div>
        <div aria-live="polite">
          Slide {slideIndex + 1} over {slides.length}
        </div>
      </div>
    </>
  );
}
