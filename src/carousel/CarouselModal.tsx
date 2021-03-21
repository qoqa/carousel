import { Dialog, Fade, makeStyles } from '@material-ui/core';
import { useCarouselContext } from './CarouselContext';
import { PropsWithChildren } from 'react';

const useStyles = /*#__PURE__*/ makeStyles(() => ({
  modalRoot: {
    '& > *:focus': {
      // The modal sets the focus on the Paper within, but it's quite ugly
      outline: 'none',
    },
  },
  modalContent: {
    position: 'relative',
    height: '100%',
  },
}));

type CarouselModalProps = {
  isInitiallyOpen?: boolean;
};

export function CarouselModal({
  children,
  isInitiallyOpen,
}: PropsWithChildren<CarouselModalProps>) {
  const classes = useStyles();
  const { isOpen, close } = useCarouselContext();

  const open = isInitiallyOpen || isOpen;

  return (
    <Dialog
      aria-labelledby="carousel-modal-title"
      open={open}
      onClose={close}
      TransitionComponent={Fade}
      fullWidth={true}
      maxWidth="md"
      fullScreen={true}
      scroll="body"
      className={classes.modalRoot}
    >
      <div className={classes.modalContent}>{children}</div>
    </Dialog>
  );
}
