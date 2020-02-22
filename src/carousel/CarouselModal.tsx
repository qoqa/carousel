import React from 'react';
import { Dialog, Fade, makeStyles } from '@material-ui/core';
import { useCarouselContext } from './CarouselContext';

const useStyles = makeStyles(theme => ({
  modalRoot: {
    '& > *:focus': {
      // The modal sets the focus on the Paper within, but it's quite ugly
      outline: 'none',
    },
  },
  modalContent: {
    // Vertical align
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    // On desktop the modal takes the full height, and as much with as it can.
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
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
      aria-labelledby="modal-title"
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
