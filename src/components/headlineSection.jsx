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
      <img
        src="images/page1.jpg"
        className={clsx(classes.homeContainer, classes.subContainer)}
        alt="image1"
      />
      <Grid container className={classes.subContainer} justifyContent="center" alignItems="center">
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
    </Box>
  );
};

export default HeadlineSection;
