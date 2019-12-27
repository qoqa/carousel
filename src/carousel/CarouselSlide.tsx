import React from 'react';
import { makeStyles } from '@material-ui/core';

export type CarouselSlideProps = {
  src: string;
  alt: string;
};

const useStyles = makeStyles(theme => ({
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
    // Fix potential cross browser weirdness
    lineHeight: 0,
    [theme.breakpoints.up('md')]: {
      // On desktop, we have to account for the margins of the modal
      maxWidth: `calc(100vw - ${theme.spacing(4)}px)`,
    },
  },
}));

export function CarouselSlide({ alt, src }: CarouselSlideProps) {
  const classes = useStyles();

  return (
    <div className={classes.slide}>
      <img className={classes.img} src={src} alt={alt || ''} />
    </div>
  );
}
