# Image Carousel

Similar to [material-auto-rotating-carousel](https://github.com/TeamWertarbyte/material-auto-rotating-carousel),
but to display a carousel with only images.

Based on Material-UI

## Demo

[https://pierre-do.github.io/carousel/](https://pierre-do.github.io/carousel/)

## Getting Started

Add the following to your `.npmrc`

```text
@pierre-do:registry=https://npm.pkg.github.com
```

Then run `yarn add @pierre-do/carousel`.

## Example

You can implement a very simple gallery with clickable images as suggeted below.

```typescript jsx
import React from 'react';
import {
  Carousel,
  CarouselContextProvider,
  CarouselImageType,
  ImageWithPlaceholder,
  useCarouselContext,
  CarouselTranslationsType,
} from '@pierre-do/carousel';
import {
  GridList,
  GridListTile,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const useStyle = makeStyles({
  img: {
    width: '100%',
    height: 'auto',
    cursor: 'zoom-in',
  },
});

function getDefaultTranslations(
  currentSlideNumber: number,
  nextSlideNumber: number,
  previousSlideNumber: number,
  slidesCount: number
): CarouselTranslationsType {
  return {
    nextButton: `Go to slide ${nextSlideNumber}`,
    previousButton: `Go to slide ${previousSlideNumber}`,
    status: `Slide ${currentSlideNumber} over ${slidesCount}`,
  };
}

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
  title: string;
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
```
