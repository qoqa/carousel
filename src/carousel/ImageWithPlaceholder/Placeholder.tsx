import React from 'react';

type PlaceholderProps = {
  height?: number | string;
  width?: number | string;
  alt?: string;
  className?: string;
};

function getInlineSVG(
  width: number | string = 0,
  height: number | string = 0
): string {
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
  return (
    <img
      className={className}
      width={width}
      height={height}
      alt=""
      src={inlineBase64(getInlineSVG(width, height))}
    />
  );
}

export default Placeholder;
