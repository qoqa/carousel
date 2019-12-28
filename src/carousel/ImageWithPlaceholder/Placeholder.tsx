import React from 'react';

type PlaceholderProps = {
  height?: number | string;
  width?: number | string;
  alt?: string;
  className?: string;
};

const Placeholder = ({ height, width, alt, className }: PlaceholderProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      aria-label={alt}
      height={height}
      width={width}
    >
      <path d="" />
    </svg>
  );
};

export default Placeholder;
