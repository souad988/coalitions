import React from 'react';
import clsx from 'clsx';
import {
  Grid, Typography,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';

function Logo() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Grid container flexDirection="column" style={{ height: '100%' }} justifyContent="center" alignItems="center">
      <Grid item>
        <Typography className={clsx(classes.headline2, classes.logoText)} variant="h6">LOSANGELES</Typography>
      </Grid>
      <Grid item>
        <Typography className={clsx(classes.headline1, classes.logoText)} variant="h6">MOUNTAINS</Typography>
      </Grid>
    </Grid>
  );
}

export default Logo;
