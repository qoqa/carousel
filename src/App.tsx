import React from 'react';
import {
  Container,
  CssBaseline,
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Carousel, CarouselImageType } from './carousel';
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

function ImageWithCarousel({
  src,
  srcPreview,
  alt,
  index,
  width,
  height,
}: any) {
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
        src={srcPreview}
        alt={alt}
        width={width}
        height={height}
        imgClassName={classes.img}
      />
    </a>
  );
}

type GalleryProps = {
  slides: CarouselImageType[];
};

function Gallery({ slides }: GalleryProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <GridList cellHeight={160} cols={isMobile ? 1 : 3}>
      {slides.map((slide, index) => (
        <GridListTile key={index}>
          <ImageWithCarousel index={index} {...slide} />
        </GridListTile>
      ))}
    </GridList>
  );
}

const App: React.FC = () => {
  return (
    <CarouselContextProvider>
      <CssBaseline />
      <Container className="App">
        <h1>Test App</h1>
        <Gallery slides={slides} />
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
