import { Dialog, Fade, makeStyles } from '@material-ui/core';
import { useCarouselContext } from './CarouselContext';

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
  children: any;
};

export function CarouselModal({
  children,
  isInitiallyOpen,
}: CarouselModalProps) {
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
