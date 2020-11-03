import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DelayedSpinner from './DelayedSpinner';

type PlaceholderProps = {
  height: number;
  width: number;
  alt?: string;
  className?: string;
};

const useStyles = /*#__PURE__*/ makeStyles(() => ({
  root: {
    position: 'relative',
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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

function Placeholder({ height, width, className = '' }: PlaceholderProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.spinner}>
        <DelayedSpinner />
      </div>
      <img
        className={className}
        width={width}
        height={height}
        alt=""
        src={inlineBase64(getInlineSVG(width, height))}
      />
    </div>
  );
}

export default Placeholder;
