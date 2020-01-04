import React from 'react';
import {
  Carousel,
  CarouselContextProvider,
  CarouselImageType,
  ImageWithPlaceholder,
  useCarouselContext,
} from './carousel';
import {
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { getDefaultTranslations } from './fixtures';

const useStyle = makeStyles({
  img: {
    width: '100%',
    height: 'auto',
    cursor: 'zoom-in',
    // Fix a display issue with IE11
    overflow: 'hidden',
  },
});

function ClickableImage({ src, srcPreview, alt, index, width, height }: any) {
  const classes = useStyle();
  const { open } = useCarouselContext();

  const handleClick = (e: any) => {
    e.preventDefault();
    open(index);
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
  title?: string;
};

export function Gallery({ slides, title }: GalleryProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <CarouselContextProvider>
      <h2>{title}</h2>
      <GridList cols={isMobile ? 1 : 3}>
        {slides.map((slide, index) => (
          <GridListTile key={index}>
            <ClickableImage index={index} {...slide} />
          </GridListTile>
        ))}
      </GridList>
      <Carousel
        getTranslations={getDefaultTranslations}
        slides={slides}
        title={title}
      />
    </CarouselContextProvider>
  );
}
