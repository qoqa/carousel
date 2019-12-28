import React from 'react';
import { Backdrop, makeStyles, Modal, Paper } from '@material-ui/core';
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
    // On mobile, the modal takes the full width, and as much height as it can.
    [theme.breakpoints.down('sm')]: {
      // Dimensions
      width: '100%',
      // Horizontal align
      margin: '-16px auto 0',
    },
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
    <Modal
      open={open}
      onClose={close}
      BackdropComponent={Backdrop}
      className={classes.modalRoot}
    >
      <Paper elevation={2} className={classes.modalContent}>
        {children}
      </Paper>
    </Modal>
  );
}
