import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import Styles from '../styles/components/midSection';
import CustomCarousel from './customCarousel';
import HeadlineComponent from './headlineComponent';

const MidSection = () => {
  const { history } = useSelector((state) => state.history);
  console.log('history', history);
  const classes = useCustomStyles(Styles);

  return (
    <Box className={classes.container} id="history">
      <HeadlineComponent
        title1={history?.headlines.title1}
        title2={history?.headlines.title2}
        text={history?.headlines.text}
      />
      <CustomCarousel items={history?.slides} />
    </Box>
  );
};

export default MidSection;
