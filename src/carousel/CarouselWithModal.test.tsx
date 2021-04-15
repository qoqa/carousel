import { getDefaultTranslations, slides } from '../fixtures';
import { CarouselWithModal } from './CarouselWithModal';
import {
  render,
  act,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react';
import { CarouselContextProvider, useCarouselContext } from './CarouselContext';
import userEvent from '@testing-library/user-event';

const TestCarousel = () => {
  return (
    <CarouselContextProvider
      slides={slides}
      translationsFactory={getDefaultTranslations}
    >
      <CarouselWithModal title="Test Carousel" isInitiallyOpen />
    </CarouselContextProvider>
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
    render(<TestCarousel />);
    expect(screen.getByText('Test Carousel')).toBeInTheDocument();
  });

  it('should display the first image', async () => {
    render(<TestCarousel />);
    const imageAltText = slides[0].alt;

    act(() => {
      // Triggers the load event that mutates the state. JSDom doesn't
      // automatically load the image.
      fireEvent.load(screen.getByAltText(imageAltText));
    });

    await waitFor(() => {
      expect(screen.queryByAltText(imageAltText)).toBeVisible();
    });
  });

  it('should go to the next slide if the next button is pressed', () => {
    render(<TestCarousel />);
    expect(screen.getByText('1 over 10')).toBeInTheDocument();

    userEvent.click(screen.getByTitle('Go to slide 2'));

    const secondImage = screen.getByAltText(slides[1].alt);
    expect(secondImage).toBeInTheDocument();
    expect(screen.getByText('2 over 10')).toBeInTheDocument();
  });

  it('should loop back to the last slide if the back button is pressed', () => {
    render(<TestCarousel />);
    expect(screen.getByText('1 over 10')).toBeInTheDocument();

    userEvent.click(screen.getByTitle('Go to slide 10'));

    const secondImage = screen.getByAltText(slides[9].alt);
    expect(secondImage).toBeInTheDocument();
    expect(screen.getByText('10 over 10')).toBeInTheDocument();
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

    render(<CarouselWithOne />);
    expect(screen.queryByText('1 over 10')).not.toBeInTheDocument();
  });

  it('should open the carousel at the right slide', () => {
    render(<TestCarouselWithTrigger slideIndexToOpen={2} />);

    userEvent.click(screen.getByText('Open'));
    expect(screen.getByText('3 over 10')).toBeInTheDocument();
  });

  it('should close the carousel', async () => {
    render(<TestCarouselWithTrigger slideIndexToOpen={0} />);

    userEvent.click(screen.getByText('Open'));
    expect(screen.queryByText('1 over 10')).toBeInTheDocument();

    userEvent.click(screen.getByTitle('Close (ESC)'));
    // Async test to work around the animation delay of the modal
    await waitFor(() =>
      expect(screen.queryByText('1 over 10')).not.toBeInTheDocument()
    );
  });
});
