import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type PlaceholderProps = {
  height: number;
  width: number;
  alt?: string;
  className?: string;
};

const useStyles = makeStyles(() => ({
  img: {
    background: 'black',
    opacity: 0.125,
  },
}));

function getInlineSVG(width: number, height: number): string {
  return `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${width} ${height}"
      height="${height}"
      width="${width}"
    >
      <path d="" />
    </svg>`;
}

function inlineBase64(value: string): string {
  // Inline SVG to improve cross browser compatibility
  return `data:image/svg+xml;base64,${btoa(value)}`;
}

function Placeholder({ height, width, className }: PlaceholderProps) {
  const classes = useStyles();
  return (
    <img
      className={`${className} ${classes.img}`}
      width={width}
      height={height}
      alt=""
      src={inlineBase64(getInlineSVG(width, height))}
    />
  );
}

export default Placeholder;
