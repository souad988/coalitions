import React from 'react';
import { Box } from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Header from '../components/header';
import HeadlineSection from '../components/headlineSection';

/*  */

function Home() {
  const classes = useCustomStyles(mainStyles);

  return (
    <Box className={classes.mainContainer}>
      <Header />
      <HeadlineSection />
    </Box>
  );
}

export default Home;
