import React from 'react';
import { Backdrop, Fade, makeStyles, Modal, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modalRoot: {
    '& > *:focus': {
      // The modal sets the focus on the Paper within, but it's quite ugly
      outline: 'none',
    },
  },
  modalContent: {
    // On mobile, the modal takes the full width, and as much height as it can.
    [theme.breakpoints.down('sm')]: {
      // Dimensions
      width: '100%',
      maxHeight: 'calc(100% - 96px)',
      // Horizontal align
      margin: '-16px auto 0',
      // Vertical align
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    // On desktop the modal takes the full height, and as much with as it can.
    [theme.breakpoints.up('md')]: {
      // Dimensions
      width: 'auto',
      height: '90%',
      // Horizontal align
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
  },
}));

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
