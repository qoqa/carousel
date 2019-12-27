import React from 'react';
import { Backdrop, Fade, makeStyles, Modal, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  modalRoot: {
    '& > *:focus': {
      // The modal sets the focus on the Paper within, but it's quite ugly
      outline: 'none',
    },
  },
  modalContent: {
    // Dimensions
    width: '90%',
    maxHeight: 'calc(100% - 96px)',
    // Horizontal align
    margin: '-16px auto 0',
    // Vertical align
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export function CarouselModal({ children }: any) {
  const classes = useStyles();

  return (
    <Modal
      open={true}
      BackdropComponent={Backdrop}
      className={classes.modalRoot}
    >
      <Fade appear in={true}>
        <Paper elevation={2} className={classes.modalContent}>
          {children}
        </Paper>
      </Fade>
    </Modal>
  );
}
