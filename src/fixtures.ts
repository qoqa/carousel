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

function getImageUrl(staticImage: StaticImageData): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const imageUrl = staticImage.src;

  if (basePath?.length) {
    return `${basePath}/${imageUrl}`;
  }

  return imageUrl;
}

export interface DemoSlideType extends CarouselImageType {
  srcPreview: string;
}

export const slides: DemoSlideType[] = [
  {
    src: getImageUrl(image1),
    srcWebp: getImageUrl(image1Webp),
    srcPreview: getImageUrl(image1Small),
    alt: 'Image 1',
    width: 3840,
    height: 2243,
  },
  {
    src: getImageUrl(image2),
    srcWebp: getImageUrl(image2Webp),
    srcPreview: getImageUrl(image2Small),
    alt: 'Image 2',
    width: 3866,
    height: 2426,
  },
  {
    src: getImageUrl(image3),
    srcWebp: getImageUrl(image3Webp),
    srcPreview: getImageUrl(image3Small),
    alt: 'Image 3',
    width: 3953,
    height: 2965,
  },
  {
    src: getImageUrl(image4),
    srcWebp: getImageUrl(image4Webp),
    srcPreview: getImageUrl(image4Small),
    alt: 'Image 4',
    width: 4098,
    height: 2732,
  },
  {
    src: getImageUrl(image5),
    srcWebp: getImageUrl(image5Webp),
    srcPreview: getImageUrl(image5Small),
    alt: 'Image 5',
    width: 4124,
    height: 2600,
  },
  {
    src: getImageUrl(image6),
    srcWebp: getImageUrl(image6Webp),
    srcPreview: getImageUrl(image6Small),
    alt: 'Image 6',
    width: 4242,
    height: 2154,
  },
  {
    src: getImageUrl(image7),
    srcWebp: getImageUrl(image7Webp),
    srcPreview: getImageUrl(image7Small),
    alt: 'Image 7',
    width: 4940,
    height: 3280,
  },
  {
    src: getImageUrl(image8),
    srcWebp: getImageUrl(image8Webp),
    srcPreview: getImageUrl(image8Small),
    alt: 'Image 8',
    width: 5042,
    height: 3445,
  },
  {
    src: getImageUrl(image9),
    srcWebp: getImageUrl(image9Webp),
    srcPreview: getImageUrl(image9Small),
    alt: 'Image 9',
    width: 5163,
    height: 3442,
  },
  {
    src: getImageUrl(image10),
    srcWebp: getImageUrl(image10Webp),
    srcPreview: getImageUrl(image10Small),
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
    status: `${currentSlideNumber} over ${slidesCount}`,
    close: 'Close (ESC)',
  };
}
