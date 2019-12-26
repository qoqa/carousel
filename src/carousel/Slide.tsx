import React from 'react';
import { makeStyles } from '@material-ui/core';

export type CarouselSlideProps = {
  id: string;
  src: string;
  alt: string;
};

const useStyles = makeStyles({
  slide: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
  },
  img: {
    width: '100%',
    height: 'auto',
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
