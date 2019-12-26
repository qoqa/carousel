import React from 'react';
import { CarouselSlide, CarouselSlideProps } from './Slide';
import SwipeableViews from 'react-swipeable-views';
// @ts-ignore
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import {
  Backdrop,
  Fab,
  Fade,
  makeStyles,
  Modal,
  Paper,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { actualIndex, useSlideIndex } from './useSlideIndex';

const useStyles = makeStyles({
  modalContent: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    margin: '0 auto',
  },
  carouselContainer: {
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
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
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
  } = useSlideIndex(slidesCount);

  const translations = getTranslations(
    currentSlideNumber,
    nextSlideNumber,
    previousSlideNumber,
    slidesCount
  );

  const slideRenderer = ({ index, key }: any) => {
    // Translate the virtual index to an actual slide to display.
    const slideToDisplay = actualIndex(index, slides.length);
    const slide = slides[slideToDisplay];
    return <CarouselSlide key={key} {...slide} />;
  };

  return (
    <>
      {title && <h3>{title}</h3>}
      <div className={classes.carouselContainer}>
        <VirualizedSwipableViews
          onChangeIndex={handleChangeIndex}
          index={currentSlideNumber - 1}
          containerStyle={{
            alignItems: 'center',
          }}
          slideRenderer={slideRenderer}
        />
        <div className={classes.arrowsContainer}>
          <Fab onClick={goToPreviousSlide}>
            <span className={classes.srOnly}>
              {translations.previousButton}
            </span>
            <ArrowBackIcon aria-hidden />
          </Fab>
          <Fab onClick={goToNextSlide}>
            <span className={classes.srOnly}>{translations.nextButton}</span>
            <ArrowForwardIcon aria-hidden />
          </Fab>
        </div>
        <div aria-live="polite">{translations.status}</div>
      </div>
    </>
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
  const classes = useStyles();

  return (
    <Modal open={true} BackdropComponent={Backdrop}>
      <Fade appear in={true}>
        <Paper className={classes.modalContent}>
          <CarouselContent {...props} />
        </Paper>
      </Fade>
    </Modal>
  );
}
