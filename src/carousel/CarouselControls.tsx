import React, { MouseEvent, MouseEventHandler } from 'react';
import {
  Fade,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CarouselTranslationsType } from './Carousel.type';
import { fade } from '@material-ui/core/styles/colorManipulator';

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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: fade(theme.palette.grey[900], 0.6),
    '&:hover': {
      backgroundColor: fade(theme.palette.grey[900], 0.8),
    },
  },
}));

function stopEventPropagationFactory(fn: MouseEventHandler): MouseEventHandler {
  return function (event: MouseEvent) {
    event.stopPropagation();
    fn(event);
  };
}

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
        <IconButton
          className={classes.arrow}
          onClick={stopEventPropagationFactory(goToPreviousSlide)}
          title={translations.previousButton}
        >
          <ArrowBackIcon aria-hidden />
        </IconButton>
      </Fade>
      <Fade in={true}>
        <IconButton
          className={classes.arrow}
          onClick={stopEventPropagationFactory(goToNextSlide)}
          title={translations.nextButton}
        >
          <ArrowForwardIcon aria-hidden />
        </IconButton>
      </Fade>
    </div>
  );
}
