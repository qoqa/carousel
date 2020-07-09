import React from 'react';
import { CarouselModal } from './CarouselModal';
import { CarouselModalContent } from './CarouselModalContent';
import { CarouselType } from './Carousel.type';
import { MuiThemeProvider } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

// Better UX if the modal is always in dark theme
const darkPalette = createPalette({
  type: 'dark',
});

export function CarouselWithModal(props: CarouselType) {
  return (
    <MuiThemeProvider
      theme={(defaultTheme) => ({
        ...defaultTheme,
        palette: darkPalette,
      })}
    >
      <CarouselModal isInitiallyOpen={props.isInitiallyOpen}>
        <CarouselModalContent {...props} />
      </CarouselModal>
    </MuiThemeProvider>
  );
}
