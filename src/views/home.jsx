import React from 'react';
import {
  Box, useScrollTrigger,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Header from '../components/header';
import Footer from '../components/footer';
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
      <Footer />
    </Box>
  );
}

export default Home;
