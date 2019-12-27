import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CarouselTranslationsType } from './Carousel';

const useStyles = makeStyles(theme => ({
  arrowsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Critical, otherwise the swipe doesn't work on the underline component
    pointerEvents: 'none',
  },
  arrow: {
    // The rule above cascades to the button
    pointerEvents: 'all',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
}));

type CarouselControlsProps = {
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  translations: CarouselTranslationsType;
};

export function CarouselControls({
  goToPreviousSlide,
  goToNextSlide,
  translations,
}: CarouselControlsProps) {
  const classes = useStyles();

  return (
    <div className={classes.arrowsContainer}>
      <Fab className={classes.arrow} onClick={goToPreviousSlide}>
        <span className={classes.srOnly}>{translations.previousButton}</span>
        <ArrowBackIcon aria-hidden />
      </Fab>
      <Fab className={classes.arrow} onClick={goToNextSlide}>
        <span className={classes.srOnly}>{translations.nextButton}</span>
        <ArrowForwardIcon aria-hidden />
      </Fab>
    </div>
  );
}
