import React from 'react';
import {
  Container,
  CssBaseline,
  GridList,
  GridListTile,
  makeStyles,
} from '@material-ui/core';
import { Carousel } from './carousel';
import { getDefaultTranslations, slides } from './fixtures';
import {
  CarouselContextProvider,
  useCarouselContext,
} from './carousel/CarouselContext';
import { ImageWithPlaceholder } from './carousel/ImageWithPlaceholder/ImageWithPlaceholder';

const useStyle = makeStyles({
  img: {
    width: '100%',
    height: 'auto',
    cursor: 'zoom-in',
  },
});

function ImageWithCarousel({ src, alt, srcWebp, index, width, height }: any) {
  const classes = useStyle();
  const { open } = useCarouselContext();

  const handleClick = (e: any) => {
    e.preventDefault();
    if (open) {
      open(index);
    }
  };

  return (
    <a href={src} onClick={handleClick}>
      <ImageWithPlaceholder
        src={src}
        srcWebp={srcWebp}
        alt={alt}
        width={width}
        height={height}
        imgClassName={classes.img}
      />
    </a>
  );
}

const App: React.FC = () => {
  return (
    <CarouselContextProvider>
      <CssBaseline />
      <Container className="App">
        <h1>Test App</h1>
        <GridList cellHeight={160} cols={3}>
          {slides.map((slide, index) => (
            <GridListTile key={index}>
              <ImageWithCarousel index={index} {...slide} />
            </GridListTile>
          ))}
        </GridList>
        <Carousel
          getTranslations={getDefaultTranslations}
          slides={slides}
          title="Test Carousel"
        />
      </Container>
    </CarouselContextProvider>
  );
};

export default App;
