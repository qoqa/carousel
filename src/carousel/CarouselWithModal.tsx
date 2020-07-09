import React from 'react';
import { CarouselModal } from './CarouselModal';
import { CarouselModalContent } from './CarouselModalContent';
import { CarouselType } from './Carousel.type';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { useTheme as useThemeWithoutDefault } from '@material-ui/styles';

// Better UX if the modal is always in dark theme
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export function CarouselWithModal(props: CarouselType) {
  const theme = useThemeWithoutDefault();

  const defaultThemeOrExistingOne = theme
    ? () => ({
        ...theme,
        palette: darkTheme.palette,
      })
    : darkTheme;

  return (
    <MuiThemeProvider theme={defaultThemeOrExistingOne}>
      <CarouselModal isInitiallyOpen={props.isInitiallyOpen}>
        <CarouselModalContent {...props} />
      </CarouselModal>
    </MuiThemeProvider>
  );
}
