import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Placeholder from './Placeholder';

const useStyle = makeStyles({
  root: {
    // Remove the blank line at the bottom of the container.
    lineHeight: 0,
    // This is done because we want to the image component to behave like an `img` tag.
    display: 'inline-block',
  },
  picture: {
    display: 'inline-block',
    transition: 'opacity 250ms',
  },
  pictureVisible: {
    opacity: 1,
  },
  pictureHidden: {
    opacity: 0,
    position: 'absolute',
    clip: 'rect(0, 0, 0, 0)',
  },
  loaderAnimation: {
    position: 'absolute',
  },
});

type ImageWithLoaderProps = {
  src: string;
  srcWebp?: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
};

export function ImageWithPlaceholder({
  src,
  srcWebp,
  alt,
  width,
  height,
  className,
  imgClassName,
}: ImageWithLoaderProps) {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const classes = useStyle();

  // Callback when the image is actually loaded. This assumes that the browser
  // loads the image even if it's not on the screen.
  const imageLoaded = () => {
    setLoaded(true);
  };

  const pictureClassName = isLoaded
    ? classes.pictureVisible
    : classes.pictureHidden;
  const shouldDisplayPlaceholder = !isLoaded;

  return (
    <div className={`${classes.root} ${className}`}>
      {shouldDisplayPlaceholder && (
        <Placeholder
          className={imgClassName}
          width={width}
          height={height}
          alt={alt}
        />
      )}
      <picture
        className={`${pictureClassName} ${classes.picture}`}
        onLoad={imageLoaded}
      >
        <source type="image/webp" srcSet={srcWebp} />
        <img
          className={imgClassName}
          title={alt}
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </picture>
    </div>
  );
}
