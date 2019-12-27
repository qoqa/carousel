import React from 'react';
import { getDefaultTranslations, slides } from '../fixtures';
import { Carousel } from './Carousel';
import { render } from '@testing-library/react';

const TestCarousel = () => (
  <Carousel
    getTranslations={getDefaultTranslations}
    slides={slides}
    title="Test Carousel"
  />
);

describe('Carousel', () => {
  it('should display the title', () => {
    const { getByText } = render(<TestCarousel />);
    expect(getByText('Test Carousel')).toBeInTheDocument();
  });

  it('should display the first image', () => {
    const { getByAltText } = render(<TestCarousel />);
    const firstImage = getByAltText(slides[0].alt);
    expect(firstImage).toBeInTheDocument();
  });

  it('should go to the next slide if the next button is pressed', () => {
    const { getByText, getByAltText } = render(<TestCarousel />);
    expect(getByText('Slide 1 over 10')).toBeInTheDocument();

    getByText('Go to slide 2').click();

    const secondImage = getByAltText(slides[1].alt);
    expect(secondImage).toBeInTheDocument();
    expect(getByText('Slide 2 over 10')).toBeInTheDocument();
  });

  it('should loop back to the last slide if the back button is pressed', () => {
    const { getByText, getByAltText } = render(<TestCarousel />);
    expect(getByText('Slide 1 over 10')).toBeInTheDocument();

    getByText('Go to slide 10').click();

    const secondImage = getByAltText(slides[9].alt);
    expect(secondImage).toBeInTheDocument();
    expect(getByText('Slide 10 over 10')).toBeInTheDocument();
  });

  it('should not display the controls if there is only one slide', () => {
    const CarouselWithOneSlide = () => (
      <Carousel getTranslations={getDefaultTranslations} slides={[slides[0]]} />
    );

    const { queryByText } = render(<CarouselWithOneSlide />);
    expect(queryByText('Slide 1 over 10')).not.toBeInTheDocument();
  });
});
