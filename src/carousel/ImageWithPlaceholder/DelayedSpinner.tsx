import { CircularProgress, Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const DEFAULT_DELAY_MS = 1000;

const useStyles = makeStyles({
  spinner: {
    color: 'white',
  },
});

export default function DelayedSpinner() {
  const classes = useStyles();
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
      <CircularProgress className={classes.spinner} />
    </Fade>
  );
}
