import React from 'react';
import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import { Gallery } from './Gallery';
import { getDefaultTranslations, slides } from './fixtures';
import useDarkMode from './useDarkMode';
import { Carousel, CarouselContextProvider } from './carousel';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => {
  const darkMode = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <h1>Galleries with Carousel in a modal</h1>
        <p>Click on one if the image below to open the carousel.</p>
        <Gallery slides={slides} title="My Gallery" />
        <Gallery slides={[slides[8]]} title="Gallery with one image" />
        <h2>Gallery with no title</h2>
        <Gallery slides={[slides[7]]} />
        <h1>Carousel in the page</h1>
        <CarouselContextProvider
          slides={slides}
          translationsFactory={getDefaultTranslations}
        >
          <Carousel />
        </CarouselContextProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
