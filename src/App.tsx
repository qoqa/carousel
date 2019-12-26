import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Carousel } from './carousel';

// Test images
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import { CarouselTranslations } from './carousel/Carousel';

const slides = [
  {
    src: image1,
    alt: 'Image 1',
  },
  {
    src: image2,
    alt: 'Image 2',
  },
  {
    src: image3,
    alt: 'Image 3',
  },
  {
    src: image4,
    alt: 'Image 4',
  },
  {
    src: image5,
    alt: 'Image 5',
  },
  {
    src: image6,
    alt: 'Image 6',
  },
  {
    src: image7,
    alt: 'Image 7',
  },
  {
    src: image8,
    alt: 'Image 8',
  },
  {
    src: image9,
    alt: 'Image 9',
  },
  {
    src: image10,
    alt: 'Image 10',
  },
];

function getTranslations(
  currentSlideNumber: number,
  nextSlideNumber: number,
  previousSlideNumber: number,
  slidesCount: number
): CarouselTranslations {
  return {
    nextButton: `Go to slide ${nextSlideNumber}`,
    previousButton: `Go to slide ${previousSlideNumber}`,
    status: `Slide ${currentSlideNumber} over ${slidesCount}`,
  };
}

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Carousel
          getTranslations={getTranslations}
          slides={slides}
          title="Test Carousel"
        />
      </div>
    </>
  );
};

export default App;
