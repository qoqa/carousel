import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useCarouselContext } from './CarouselContext';

export type CarouselSlideType = {
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
};

const useStyles = makeStyles(theme => ({
  slide: {
    display: 'flex',
    cursor: 'zoom-out',
  },
  img: {
    width: '100%',
    height: 'auto',
    // Horizontal align
    margin: '0 auto',
    // Keep the aspect ratio and takes the maximum height or width possible
    maxWidth: '100vw',
    maxHeight: 'calc(100vh - 10rem)',
    objectFit: 'scale-down',
    // Fix potential cross browser weirdness
    lineHeight: 0,
    [theme.breakpoints.up('md')]: {
      // On desktop, we have to account for the margins of the modal
      maxWidth: `calc(100vw - ${theme.spacing(4)}px)`,
    },
  },
}));

export function CarouselSlide({ alt, src, width, height }: CarouselSlideType) {
  const classes = useStyles();
  const { close } = useCarouselContext();

  return (
    <div className={classes.slide} onClick={close}>
      <img
        className={classes.img}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
