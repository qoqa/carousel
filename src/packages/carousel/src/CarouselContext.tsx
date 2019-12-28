import React, { createContext, useContext, useState } from 'react';

export type CarouselContextType = {
  open?: (index: number) => void;
  close?: () => void;
  indexToDisplay: number | null;
  isOpen: boolean;
};

const CarouselContext = createContext<CarouselContextType>({
  indexToDisplay: null,
  isOpen: false,
});

export const CarouselContextProvider = ({ children }: any) => {
  const [indexToDisplay, setIndexToDisplay] = useState<number | null>(null);

  const value = {
    open: setIndexToDisplay,
    close: () => setIndexToDisplay(null),
    indexToDisplay,
    isOpen: indexToDisplay !== null,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () =>
  useContext<CarouselContextType>(CarouselContext);
