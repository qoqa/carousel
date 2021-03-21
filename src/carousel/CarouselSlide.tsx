import { makeStyles } from '@material-ui/core';
import { useCarouselContext } from './CarouselContext';
import { ImageWithPlaceholder } from './ImageWithPlaceholder/ImageWithPlaceholder';

type CarouselSlideType = {
  src: string;
  srcWebp?: string;
  alt: string;
  width: number;
  height: number;
};

const useStyles = /*#__PURE__*/ makeStyles((theme) => ({
  slide: {
    display: 'flex',
    cursor: 'zoom-out',
  },
  imgContainer: {
    // Horizontal align
    margin: '0 auto',
    // Fix a display issue with IE11
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 'auto',
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

export function CarouselSlide({
  alt,
  src,
  srcWebp,
  width,
  height,
}: CarouselSlideType) {
  const classes = useStyles();
  const { close } = useCarouselContext();

  return (
    <div className={classes.slide} onClick={close}>
      <ImageWithPlaceholder
        src={src}
        srcWebp={srcWebp}
        width={width}
        height={height}
        alt={alt}
        className={classes.imgContainer}
        imgClassName={classes.img}
      />
    </div>
  );
}
