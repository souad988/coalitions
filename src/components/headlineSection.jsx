import React from 'react';
import clsx from 'clsx';
import {
  Box, Typography, Grid,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';

const HeadlineSection = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box className={classes.container}>
      <Box className={clsx(classes.hiddenBg)} />
      <Box
        className={clsx(
          classes.homeContainer,
          classes.lowOpacity,
          classes.absolutePosition,
          classes.rootAbsolutePosition,
          classes.fullHeight,
          classes.container1,
        )}
      />
      <Grid container className={clsx(classes.absolutePosition, classes.marginTop)} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography
            variant="h1Secondary"
          >
            LOSANGELES
          </Typography>
          <Typography
            variant="h1"
          >
            MOUNTAINS
          </Typography>
        </Grid>
      </Grid>
      <img
        src="images/page1_no_bg.png"
        className={clsx(
          classes.homeContainer,
          classes.absolutePosition,
          classes.rootAbsolutePosition,
          classes.fullHeight,
          classes.cover,
        )}
        alt="image1"
      />
    </Box>
  );
};

export default HeadlineSection;
