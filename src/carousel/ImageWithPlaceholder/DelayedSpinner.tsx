import { CircularProgress, Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const DEFAULT_DELAY_MS = 1000;

const useStyles = () =>
  makeStyles((theme) => ({
    spinner: {
      color: theme.palette.grey[300],
    },
  }));

export default function DelayedSpinner() {
  const classes = useStyles()();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, DEFAULT_DELAY_MS);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Fade in={isVisible}>
      <CircularProgress
        data-testid={isVisible ? 'spinner' : ''}
        className={classes.spinner}
        size={24}
      />
    </Fade>
  );
}
