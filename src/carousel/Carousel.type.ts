export type CarouselTranslationsType = {
  nextButton: string;
  previousButton: string;
  status: string;
};

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
  getTranslations: (
    currentSlideNumber: number,
    nextSlideNumber: number,
    previousSlideNumber: number,
    slidesCount: number
  ) => CarouselTranslationsType;
};
