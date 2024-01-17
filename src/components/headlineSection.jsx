import React from 'react';
import clsx from 'clsx';
import {
  Box, Typography, Grid, useScrollTrigger,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import styles from '../styles/views/home';

const HeadlineSection = () => {
  const localClasses = useCustomStyles(styles);
  const classes = useCustomStyles(mainStyles);

  return (
    <Box className={classes.container}>
      <Box className={clsx(classes.hiddenBg)} />
      <img
        src="images/bg/page1_bg_169.png"
        className={clsx(classes.homeContainer, classes.subContainer)}
        alt="image1"
      />
      <Grid container className={classes.subContainer} justifyContent="center" alignItems="center">
        <Grid item>
          <Typography
            variant="h1"
          >
            LOSANGELES
          </Typography>
          <Typography
            variant="h1Secondary"
          >
            MOUNTAINS
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadlineSection;
