export type CarouselTranslationsType = {
  nextButton: string;
  previousButton: string;
  status: string;
  close: string;
};

export type CarouselTranslationsFactory = (
  currentSlideNumber: number,
  nextSlideNumber: number,
  previousSlideNumber: number,
  slidesCount: number
) => CarouselTranslationsType;

export type CarouselImageType = {
  src: string;
  srcWebp?: string;
  alt: string;
  width: number;
  height: number;
};

export type CarouselType = {
  title?: string;
  isInitiallyOpen?: boolean;
};
