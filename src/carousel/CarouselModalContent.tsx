import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { CarouselType } from './Carousel.type';
import { useCarouselContext } from './CarouselContext';
import { Carousel } from './Carousel';

const useStyles = makeStyles({
  carouselRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
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
    <div className={carouselRoot}>
      <div className={carouselHeader}>
        <h2 className={carouselTitle}>{title}</h2>
        <IconButton className={carouselCloseButton} onClick={close}>
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
