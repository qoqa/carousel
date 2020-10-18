import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';
import { useCarouselContext } from './CarouselContext';
import { actualSlideIndex } from './actualSlideIndex';

function supportsProxy(): boolean {
  return 'Proxy' in window;
}

const SwipeableViewsContainerAsync = lazy(
  () => import('./SwipeableViewsContainer')
);

const useStyles = makeStyles({
  carouselContainer: {
    position: 'relative',
    lineHeight: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  slideContainer: {
    alignSelf: 'center',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

function CurrentSlide() {
  const { slides, slideIndex } = useCarouselContext();

  // Translate the virtual index to an actual view to display.
  const viewToDisplay = actualSlideIndex(slideIndex, slides.length);

  return <CarouselSlide {...slides[viewToDisplay]} />;
}

export function Carousel() {
  const { carouselContainer, slideContainer } = useStyles();
  const { hasMultipleSlides } = useCarouselContext();

  if (!hasMultipleSlides) {
    return <CurrentSlide />;
  }

  // Only for browsers that support the Proxy, needed by Framer.
  if (supportsProxy()) {
    return (
      <div className={carouselContainer}>
        <Suspense fallback={null}>
          <SwipeableViewsContainerAsync className={slideContainer}>
            <CurrentSlide />
          </SwipeableViewsContainerAsync>
        </Suspense>
        <CarouselControls />
      </div>
    );
  }

  return (
    <div className={carouselContainer}>
      <div className={slideContainer}>
        <CurrentSlide />
        <CarouselControls />
      </div>
    </div>
  );
}
