import React from 'react';
import clsx from 'clsx';
import { Box, Typography, Grid } from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Header from '../components/header';
import Footer from '../components/footer';

/*  */

function Home() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box className={classes.container}>
      <Header />
      <Box className={clsx(classes.hiddenBg)} />
      <img src="images/bg/page1_bg1.png" className={clsx(classes.homeContainer, classes.subContainer)} alt="image1" />
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
      <Footer />
    </Box>
  );
}

export default Home;
