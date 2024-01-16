import React from 'react';
import clsx from 'clsx';
import {
  Box, Typography, Grid, useScrollTrigger,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import styles from '../styles/views/home';
import Header from '../components/header';
import Footer from '../components/footer';
import MidSection from '../components/midSection';

/*  */

function Home() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  const classes = useCustomStyles(mainStyles);
  const homeClasses = useCustomStyles(styles);
  return (
    <Box className={classes.mainContainer}>
      <Header trigger={trigger} />
      <Box className={classes.container}>
        <Box className={clsx(classes.hiddenBg)} />
        <img
          src="images/bg/page1_bg_169.png"
          className={clsx(classes.homeContainer, classes.subContainer)}
          alt="image1"
        />
        <Grid container className={classes.subContainer} justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h1" className={clsx(classes.headline1, classes.headline)}>
              LOSANGELES
            </Typography>
            <Typography variant="h1" className={clsx(classes.headline2, classes.headline)}>
              MOUNTAINS
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <MidSection />
      <Footer />
    </Box>
  );
}

export default Home;
