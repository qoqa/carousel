import { CarouselTranslationsType, CarouselImageType } from './carousel';

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

import image1Webp from './images/1.webp';
import image2Webp from './images/2.webp';
import image3Webp from './images/3.webp';
import image4Webp from './images/4.webp';
import image5Webp from './images/5.webp';
import image6Webp from './images/6.webp';
import image7Webp from './images/7.webp';
import image8Webp from './images/8.webp';
import image9Webp from './images/9.webp';
import image10Webp from './images/10.webp';

import image1Small from './images/1_small.jpg';
import image2Small from './images/2_small.jpg';
import image3Small from './images/3_small.jpg';
import image4Small from './images/4_small.jpg';
import image5Small from './images/5_small.jpg';
import image6Small from './images/6_small.jpg';
import image7Small from './images/7_small.jpg';
import image8Small from './images/8_small.jpg';
import image9Small from './images/9_small.jpg';
import image10Small from './images/10_small.jpg';

export const slides: CarouselImageType[] = [
  {
    src: image1,
    srcWebp: image1Webp,
    srcPreview: image1Small,
    alt: 'Image 1',
    width: 3840,
    height: 2243,
  },
  {
    src: image2,
    srcWebp: image2Webp,
    srcPreview: image2Small,
    alt: 'Image 2',
    width: 3886,
    height: 2426,
  },
  {
    src: image3,
    srcWebp: image3Webp,
    srcPreview: image3Small,
    alt: 'Image 3',
    width: 3953,
    height: 2965,
  },
  {
    src: image4,
    srcWebp: image4Webp,
    srcPreview: image4Small,
    alt: 'Image 4',
    width: 4098,
    height: 2732,
  },
  {
    src: image5,
    srcWebp: image5Webp,
    srcPreview: image5Small,
    alt: 'Image 5',
    width: 4124,
    height: 2600,
  },
  {
    src: image6,
    srcWebp: image6Webp,
    srcPreview: image6Small,
    alt: 'Image 6',
    width: 4242,
    height: 2154,
  },
  {
    src: image7,
    srcWebp: image7Webp,
    srcPreview: image7Small,
    alt: 'Image 7',
    width: 4949,
    height: 3280,
  },
  {
    src: image8,
    srcWebp: image8Webp,
    srcPreview: image8Small,
    alt: 'Image 8',
    width: 5042,
    height: 3445,
  },
  {
    src: image9,
    srcWebp: image9Webp,
    srcPreview: image9Small,
    alt: 'Image 9',
    width: 5163,
    height: 3442,
  },
  {
    src: image10,
    srcWebp: image10Webp,
    srcPreview: image10Small,
    alt: 'Image 10',
    width: 5464,
    height: 3070,
  },
];

export function getDefaultTranslations(
  currentSlideNumber: number,
  nextSlideNumber: number,
  previousSlideNumber: number,
  slidesCount: number
): CarouselTranslationsType {
  return {
    nextButton: `Go to slide ${nextSlideNumber}`,
    previousButton: `Go to slide ${previousSlideNumber}`,
    status: `Slide ${currentSlideNumber} over ${slidesCount}`,
  };
}
