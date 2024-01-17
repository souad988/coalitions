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
import HeadlineSection from '../components/headlineSection';

/*  */

function Home() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  const classes = useCustomStyles(mainStyles);

  return (
    <Box className={classes.mainContainer}>
      <Header trigger={trigger} />
      <HeadlineSection />
      <MidSection />
      <Footer />
    </Box>
  );
}

export default Home;
