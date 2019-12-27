/**
 * The index of the slide is virtualized: the current value of the index can vary
 * from minus infinity to plus infinity, although there is a finite number of slides.
 *
 * For instance if the current index is -4, but there are only 3 slides, the actual
 * index will be 2.
 *
 * Highly inspired of https://github.com/TeamWertarbyte/material-auto-rotating-carousel
 *
 * @param index
 * @param totalLength
 */
export function actualSlideIndex(index: number, totalLength: number): number {
  return ((index % totalLength) + totalLength) % totalLength;
}
