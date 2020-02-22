import React from 'react';
import { getDefaultTranslations, slides } from '../fixtures';
import { Carousel } from './Carousel';
import { render, wait, act, fireEvent } from '@testing-library/react';
import { CarouselContextProvider, useCarouselContext } from './CarouselContext';

const TestCarousel = () => {
  return (
    <Carousel
      getTranslations={getDefaultTranslations}
      slides={slides}
      title="Test Carousel"
      isInitiallyOpen
    />
  );
};

const TestCarouselTrigger = ({ slideIndexToOpen }: any) => {
  const { open, close } = useCarouselContext();

  return (
    <>
      <button onClick={() => open(slideIndexToOpen)}>Open</button>
      <button onClick={() => close()}>Close</button>
    </>
  );
};

const TestCarouselWithTrigger = ({ slideIndexToOpen }: any) => {
  return (
    <CarouselContextProvider>
      <TestCarouselTrigger slideIndexToOpen={slideIndexToOpen} />
      <Carousel getTranslations={getDefaultTranslations} slides={slides} />
    </CarouselContextProvider>
  );
};

describe('Carousel', () => {
  it('should display the title', () => {
    const { getByText } = render(<TestCarousel />);
    expect(getByText('Test Carousel')).toBeInTheDocument();
  });

  it('should display the first image', async () => {
    const { queryByAltText, getByAltText } = render(<TestCarousel />);
    const imageAltText = slides[0].alt;

    act(() => {
      // Triggers the load event that mutates the state. JSDom doesn't
      // automatically load the image.
      fireEvent.load(getByAltText(imageAltText));
    });

    await wait(() => {
      expect(queryByAltText(imageAltText)).toBeVisible();
    });
  });

  it('should go to the next slide if the next button is pressed', () => {
    const { getByText, getByAltText } = render(<TestCarousel />);
    expect(getByText('1 over 10')).toBeInTheDocument();

    getByText('Go to slide 2').click();

    const secondImage = getByAltText(slides[1].alt);
    expect(secondImage).toBeInTheDocument();
    expect(getByText('2 over 10')).toBeInTheDocument();
  });

  it('should loop back to the last slide if the back button is pressed', () => {
    const { getByText, getByAltText } = render(<TestCarousel />);
    expect(getByText('1 over 10')).toBeInTheDocument();

    getByText('Go to slide 10').click();

    const secondImage = getByAltText(slides[9].alt);
    expect(secondImage).toBeInTheDocument();
    expect(getByText('10 over 10')).toBeInTheDocument();
  });

  it('should not display the controls if there is only one slide', () => {
    const CarouselWithOne = () => (
      <Carousel
        isInitiallyOpen
        getTranslations={getDefaultTranslations}
        slides={[slides[0]]}
      />
    );

    const { queryByText } = render(<CarouselWithOne />);
    expect(queryByText('1 over 10')).not.toBeInTheDocument();
  });

  it('should open the carousel at the right slide', () => {
    const { getByText } = render(
      <TestCarouselWithTrigger slideIndexToOpen={2} />
    );

    getByText('Open').click();
    expect(getByText('3 over 10')).toBeInTheDocument();
  });

  it('should close the carousel', async () => {
    const { queryByText, getByText } = render(
      <TestCarouselWithTrigger slideIndexToOpen={0} />
    );

    getByText('Open').click();
    expect(queryByText('1 over 10')).toBeInTheDocument();

    getByText('Close').click();
    // Async test to work around the animation delay of the modal
    await wait(() => expect(queryByText('1 over 10')).not.toBeInTheDocument());
  });
});
