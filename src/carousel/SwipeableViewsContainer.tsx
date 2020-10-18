import React, { ReactElement } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCarouselContext } from './CarouselContext';

const slideSpeed = 500;
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? slideSpeed : -slideSpeed,
    };
  },
  center: {
    x: 0,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? slideSpeed : -slideSpeed,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function SwipeableViewsContainer({
  children,
  className,
}: {
  className?: string;
  children: ReactElement;
}) {
  const { slideIndex, direction, goToSlide } = useCarouselContext();

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        custom={direction}
        className={className}
        key={slideIndex}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { stiffness: 300, damping: 200 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            goToSlide(1);
          } else if (swipe > swipeConfidenceThreshold) {
            goToSlide(-1);
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
