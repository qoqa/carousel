import React from 'react';
import { actualSlideIndex } from './actualSlideIndex';
// The types for react-swipeable-views are not up to date.
// @ts-ignore
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { supportsObjectFit } from './browserUtils';

const VirualizedSwipableViews = bindKeyboard(virtualize(SwipeableViews));

// Depending on the browser, we don't want to animate the height.
// Typically IE11 doesn't support this.
const supportAnimatedHeight = supportsObjectFit();

function viewRendererFactory(viewProps: object[], ViewComponent: any) {
  return function viewRenderer({ index, key }: any) {
    // Translate the virtual index to an actual view to display.
    const viewToDisplay = actualSlideIndex(index, viewProps.length);
    const view = viewProps[viewToDisplay];
    return <ViewComponent key={key} {...view} />;
  };
}

type SwipeableViewsContainerProps = {
  viewProps: object[];
  ViewComponent: any;
  handleChangeIndex: (currentIndex: number) => void;
  currentIndex: number;
};

export function SwipeableViewsContainer({
  viewProps,
  ViewComponent,
  handleChangeIndex,
  currentIndex,
}: SwipeableViewsContainerProps) {
  const hasMultipleViews = viewProps.length > 1;

  // No need to have a swipeable view if there is only one view
  if (!hasMultipleViews) {
    return <ViewComponent {...viewProps[0]} />;
  }

  return (
    <VirualizedSwipableViews
      onChangeIndex={handleChangeIndex}
      index={currentIndex}
      slideRenderer={viewRendererFactory(viewProps, ViewComponent)}
      animateHeight={supportAnimatedHeight}
      overscanSlideAfter={1}
      overscanSlideBefore={1}
      action={({ updateHeight }: any) => {
        requestAnimationFrame(() => {
          updateHeight();
        });
      }}
    />
  );
}
