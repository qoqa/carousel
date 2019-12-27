import React from 'react';
import { makeStyles } from '@material-ui/core';

export type CarouselSlideProps = {
  src: string;
  alt: string;
};

const useStyles = makeStyles({
  slide: {
    display: 'flex',
  },
  img: {
    // Horizontal align
    margin: '0 auto',
    // Keep the aspect ratio and takes the maximum height or width possible
    maxWidth: '100vw',
    maxHeight: 'calc(100vh - 10rem)',
    objectFit: 'scale-down',
  },
});

export function CarouselSlide({ alt, src }: CarouselSlideProps) {
  const classes = useStyles();

  return (
    <div className={classes.slide}>
      <img className={classes.img} src={src} alt={alt || ''} />
    </div>
  );
}
