import React from 'react';
import clsx from 'clsx';
import {
  Grid, Typography, Box,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Logo from './logo';

const Footer = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box className={clsx(classes.containerPaddingSmall, classes.relativePosition)}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid container item lg={3} xs={6}>
          <Grid item>
            <img src="images/icon_header.png" alt="icon" />
          </Grid>
          <Grid item alignItems="center">
            <Logo />
          </Grid>
        </Grid>
        <Grid item lg={3} xs={4}>
          <Typography variant="body" size="small">Copy Rights </Typography>
        </Grid>
      </Grid>
      <Box className={clsx(classes.absolutePosition, classes.fullCover, classes.blueDarkBg)} />
    </Box>
  );
};

export default Footer;
