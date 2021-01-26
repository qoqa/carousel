import React from 'react';
import {
  CarouselWithModal,
  CarouselContextProvider,
  ImageWithPlaceholder,
  useCarouselContext,
} from './carousel';
import {
  ImageList,
  ImageListItem,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { DemoSlideType, getDefaultTranslations } from './fixtures';

const useStyle = makeStyles({
  img: {
    width: '100%',
    height: 'auto',
    cursor: 'zoom-in',
  },
});

interface ClickableImageProps extends DemoSlideType {
  index: number;
}
function ClickableImage({
  src,
  srcPreview,
  alt,
  index,
  width,
  height,
}: ClickableImageProps) {
  const classes = useStyle();
  const { openAt } = useCarouselContext();

  const handleClick = (e: any) => {
    e.preventDefault();
    openAt(index);
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
  slides: DemoSlideType[];
  title?: string;
};

export function Gallery({ slides, title }: GalleryProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <CarouselContextProvider
      slides={slides}
      translationsFactory={getDefaultTranslations}
    >
      <h2>{title}</h2>
      <ImageList cols={isMobile ? 1 : 3}>
        {slides.map((slide, index) => (
          <ImageListItem key={index}>
            <ClickableImage index={index} {...slide} />
          </ImageListItem>
        ))}
      </ImageList>
      <CarouselWithModal title={title} />
    </CarouselContextProvider>
  );
}
