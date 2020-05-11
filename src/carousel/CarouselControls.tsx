import React from 'react';
import {
  Fab,
  Fade,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CarouselTranslationsType } from './Carousel.type';

const useStyles = makeStyles((theme) => ({
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  if (isMobile) {
    return null;
  }

  return (
    <div className={classes.arrowsContainer}>
      <Fade in={true}>
        <Fab className={classes.arrow} onClick={goToPreviousSlide}>
          <Typography variant="srOnly">
            {translations.previousButton}
          </Typography>
          <ArrowBackIcon aria-hidden />
        </Fab>
      </Fade>
      <Fade in={true}>
        <Fab className={classes.arrow} onClick={goToNextSlide}>
          <Typography variant="srOnly">{translations.nextButton}</Typography>
          <ArrowForwardIcon aria-hidden />
        </Fab>
      </Fade>
    </div>
  );
}
