import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { CarouselType } from './Carousel.type';
import { useCarouselContext } from './CarouselContext';
import { Carousel } from './Carousel';

const useStyles = makeStyles((theme) => ({
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    cursor: 'zoom-out',
  },
  carouselHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  carouselTitle: {
    margin: theme.spacing(2),
  },
  carouselCloseButton: {
    margin: theme.spacing(2),
  },
  carouselStatus: {
    textAlign: 'end',
    margin: theme.spacing(2),
  },
}));

export function CarouselModalContent({ title, getTranslations }: CarouselType) {
  const {
    carouselCloseButton,
    carouselHeader,
    carouselTitle,
    carouselRoot,
    carouselStatus,
  } = useStyles();
  const {
    close,
    slidesCount,
    currentSlideNumber,
    previousSlideNumber,
    nextSlideNumber,
  } = useCarouselContext();

  const translations = getTranslations(
    currentSlideNumber,
    nextSlideNumber,
    previousSlideNumber,
    slidesCount
  );

  const hasMultipleSlides = slidesCount > 1;

  return (
    <div className={carouselRoot} onClick={close}>
      <div className={carouselHeader}>
        <h2 className={carouselTitle}>{title}</h2>
        <IconButton
          className={carouselCloseButton}
          onClick={close}
          disableRipple={true}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Carousel getTranslations={getTranslations} />
      <div
        aria-live="polite"
        role="status"
        aria-atomic="true"
        className={carouselStatus}
      >
        {hasMultipleSlides && translations.status}
      </div>
    </div>
  );
}
