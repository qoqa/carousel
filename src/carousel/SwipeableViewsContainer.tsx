import { useMemo } from 'react';
import { actualSlideIndex } from './actualSlideIndex';
// The types for react-swipeable-views-utils are not up to date.
// @ts-ignore
import { bindKeyboard, virtualize } from 'react-swipeable-views-utils';
// The types for react-swipeable-views are not up to date.
// @ts-ignore
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = /*#__PURE__*/ makeStyles(() => ({
  slide: {
    alignSelf: 'center',
  },
}));

export function SwipeableViewsContainer({
  viewProps,
  ViewComponent,
  handleChangeIndex,
  currentIndex,
}: SwipeableViewsContainerProps) {
  const hasMultipleViews = viewProps.length > 1;
  const classes = useStyles();

  const VirtualizedSwipableViews = useMemo(
    () => bindKeyboard(virtualize(SwipeableViews)),
    []
  );

  // No need to have a swipeable view if there is only one view
  if (!hasMultipleViews) {
    return <ViewComponent {...viewProps[0]} />;
  }

  return (
    <VirtualizedSwipableViews
      onChangeIndex={handleChangeIndex}
      index={currentIndex}
      slideRenderer={viewRendererFactory(viewProps, ViewComponent)}
      overscanSlideAfter={3}
      overscanSlideBefore={3}
      slideClassName={classes.slide}
    />
  );
}
