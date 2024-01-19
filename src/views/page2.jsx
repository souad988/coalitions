import React from 'react';
import {
  Box, useScrollTrigger,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Header from '../components/header';
import Footer from '../components/footer';
import MidSection from '../components/midSection';
import TeamSection from '../components/teamSection';

/*  */

const Page2 = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  const classes = useCustomStyles(mainStyles);

  return (
    <Box className={classes.mainContainer}>
      <Header trigger={trigger} />
      <MidSection />
      <TeamSection />
      <Footer />
    </Box>
  );
};
export default Page2;
