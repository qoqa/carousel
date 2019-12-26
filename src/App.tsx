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

const slides = [
  {
    src: image1,
    alt: 'Image 1',
    id: 'slide1',
  },
  {
    src: image2,
    alt: 'Image 2',
    id: 'slide2',
  },
  {
    src: image3,
    alt: 'Image 3',
    id: 'slide3',
  },
  {
    src: image4,
    alt: 'Image 4',
    id: 'slide4',
  },
  {
    src: image5,
    alt: 'Image 5',
    id: 'slide5',
  },
  {
    src: image6,
    alt: 'Image 6',
    id: 'slide6',
  },
  {
    src: image7,
    alt: 'Image 7',
    id: 'slide7',
  },
  {
    src: image8,
    alt: 'Image 8',
    id: 'slide8',
  },
  {
    src: image9,
    alt: 'Image 9',
    id: 'slide9',
  },
  {
    src: image10,
    alt: 'Image 10',
    id: 'slide10',
  },
];

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Carousel slides={slides} title="Test Carousel" />
      </div>
    </>
  );
};

export default App;
