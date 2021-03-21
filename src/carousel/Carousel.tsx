import { makeStyles } from '@material-ui/core';
import { CarouselSlide } from './CarouselSlide';
import { CarouselControls } from './CarouselControls';
import { useCarouselContext } from './CarouselContext';
import { SwipeableViewsContainer } from './SwipeableViewsContainer';

const useStyles = /*#__PURE__*/ makeStyles({
  carouselContainer: {
    position: 'relative',
    lineHeight: 0,
  },
});

export function Carousel(): JSX.Element {
  const { carouselContainer } = useStyles();
  const {
    slidesCount,
    slides,
    goToPreviousSlide,
    goToNextSlide,
    handleChangeIndex,
    slideIndex,
  } = useCarouselContext();

  const hasMultipleSlides = slidesCount > 1;

  return (
    <div className={carouselContainer}>
      <SwipeableViewsContainer
        handleChangeIndex={handleChangeIndex}
        currentIndex={slideIndex}
        ViewComponent={CarouselSlide}
        viewProps={slides}
      />
      {hasMultipleSlides && (
        <CarouselControls
          goToPreviousSlide={goToPreviousSlide}
          goToNextSlide={goToNextSlide}
        />
      )}
    </div>
  );
}
