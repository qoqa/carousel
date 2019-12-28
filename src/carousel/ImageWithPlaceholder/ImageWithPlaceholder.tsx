import React, { useState, useMemo } from 'react';
import { Fade, makeStyles } from '@material-ui/core';
import Placeholder from './Placeholder';

const useStyle = makeStyles({
  root: {
    height: '100%',
    // Remove the blank line at the bottom of the container.
    lineHeight: 0,
    // This is done because we want to the image component to behave like an `img` tag.
    display: 'inline-block',
  },
  picture: {
    display: 'inline-block',
  },
  pictureHidden: {
    visibility: 'hidden',
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  loaderAnimation: {
    position: 'absolute',
  },
});

type ImageWithLoaderProps = {
  src: string;
  srcWebp?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  imgClassName?: string;
};

export function ImageWithPlaceholder({
  src,
  srcWebp,
  alt,
  width,
  height,
  imgClassName,
}: ImageWithLoaderProps) {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const classes = useStyle();

  // By default the image is not loaded. If the same component receives a different 'src'
  // props, the previous image is removed.
  useMemo(() => {
    setLoaded(false);
  }, [src, setLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  // Callback when the image is actually loaded. This assumes that the browser
  // loads the image even if it's not on the screen.
  const imageLoaded = () => {
    setLoaded(true);
  };

  const pictureClassName = isLoaded ? '' : classes.pictureHidden;
  const shouldDisplayLoading = !isLoaded || !src;

  return (
    <div className={classes.root}>
      {shouldDisplayLoading && (
        <div className={classes.loaderContainer} data-testid="image-loader">
          <Placeholder
            className={imgClassName}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
      )}
      <Fade in={isLoaded}>
        <picture
          className={`${pictureClassName} ${classes.picture}`}
          onLoad={imageLoaded}
        >
          <source type="image/webp" srcSet={srcWebp} />
          <img
            data-testid="image-loaded"
            className={imgClassName}
            title={alt}
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        </picture>
      </Fade>
    </div>
  );
}
