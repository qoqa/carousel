import React, {
  Context,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  CarouselImageType,
  CarouselTranslationsFactory,
  CarouselTranslationsType,
} from './Carousel.type';
import { actualSlideIndex } from './actualSlideIndex';

export type CarouselContextType = {
  openAt: (index: number) => void;
  close: () => void;
  isOpen: boolean;
  slides: CarouselImageType[];
  slidesCount: number;
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  handleChangeIndex: (currentIndex: number) => void;
  slideIndex: number;
  translations: CarouselTranslationsType;
};

// Tree-shakable context
let CarouselContext: Context<CarouselContextType>;
function getContext() {
  if (CarouselContext) {
    return CarouselContext;
  }

  CarouselContext = createContext<CarouselContextType>({} as any);
  return CarouselContext;
}

type CarouselContextProviderProps = {
  children: any;
  slides: CarouselImageType[];
  translationsFactory: CarouselTranslationsFactory;
};

export const CarouselContextProvider = ({
  children,
  slides,
  translationsFactory,
}: CarouselContextProviderProps) => {
  const slidesCount = slides?.length || 0;
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // For human readable texts
  const currentSlideNumber = actualSlideIndex(currentIndex, slidesCount) + 1;
  const previousSlideNumber =
    actualSlideIndex(currentIndex - 1, slidesCount) + 1;
  const nextSlideNumber = actualSlideIndex(currentIndex + 1, slidesCount) + 1;

  const translations = translationsFactory(
    currentSlideNumber,
    nextSlideNumber,
    previousSlideNumber,
    slidesCount
  );

  const value: CarouselContextType = {
    openAt: (index: number) => {
      setCurrentIndex(index);
      setModalOpen(true);
    },
    close: () => setModalOpen(false),
    isOpen: modalOpen,
    goToPreviousSlide: () => setCurrentIndex(currentIndex - 1),
    goToNextSlide: () => setCurrentIndex(currentIndex + 1),
    handleChangeIndex: (current: number) => setCurrentIndex(current),
    slides,
    slidesCount,
    slideIndex: currentIndex,
    translations,
  };

  const Context = useMemo(getContext, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useCarouselContext(): CarouselContextType {
  return useContext<CarouselContextType>(getContext());
}
