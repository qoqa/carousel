import React from 'react';
import { getDefaultTranslations, slides } from '../fixtures';
import { CarouselWithModal } from './CarouselWithModal';
import { render, act, fireEvent, waitFor } from '@testing-library/react';
import { CarouselContextProvider, useCarouselContext } from './CarouselContext';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme();

const TestCarousel = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CarouselContextProvider
        slides={slides}
        translationsFactory={getDefaultTranslations}
      >
        <CarouselWithModal title="Test Carousel" isInitiallyOpen />
      </CarouselContextProvider>
    </MuiThemeProvider>
  );
};

const TestCarouselTrigger = ({ slideIndexToOpen }: any) => {
  const { openAt } = useCarouselContext();

  return <button onClick={() => openAt(slideIndexToOpen)}>Open</button>;
};

const TestCarouselWithTrigger = ({ slideIndexToOpen }: any) => {
  return (
    <CarouselContextProvider
      slides={slides}
      translationsFactory={getDefaultTranslations}
    >
      <TestCarouselTrigger slideIndexToOpen={slideIndexToOpen} />
      <CarouselWithModal />
    </CarouselContextProvider>
  );
};

describe('CarouselWithModal', () => {
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

    await waitFor(() => {
      expect(queryByAltText(imageAltText)).toBeVisible();
    });
  });

  it('should go to the next slide if the next button is pressed', () => {
    const { getByText, getByAltText, getByTitle } = render(<TestCarousel />);
    expect(getByText('1 over 10')).toBeInTheDocument();

    getByTitle('Go to slide 2').click();

    const secondImage = getByAltText(slides[1].alt);
    expect(secondImage).toBeInTheDocument();
    expect(getByText('2 over 10')).toBeInTheDocument();
  });

  it('should loop back to the last slide if the back button is pressed', () => {
    const { getByText, getByAltText, getByTitle } = render(<TestCarousel />);
    expect(getByText('1 over 10')).toBeInTheDocument();

    getByTitle('Go to slide 10').click();

    const secondImage = getByAltText(slides[9].alt);
    expect(secondImage).toBeInTheDocument();
    expect(getByText('10 over 10')).toBeInTheDocument();
  });

  it('should not display the controls if there is only one slide', () => {
    const CarouselWithOne = () => (
      <CarouselContextProvider
        slides={[slides[0]]}
        translationsFactory={getDefaultTranslations}
      >
        <CarouselWithModal isInitiallyOpen />
      </CarouselContextProvider>
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
    const { queryByText, getByText, getByTitle } = render(
      <TestCarouselWithTrigger slideIndexToOpen={0} />
    );

    getByText('Open').click();
    expect(queryByText('1 over 10')).toBeInTheDocument();

    getByTitle('Close (ESC)').click();
    // Async test to work around the animation delay of the modal
    await waitFor(() =>
      expect(queryByText('1 over 10')).not.toBeInTheDocument()
    );
  });
});
