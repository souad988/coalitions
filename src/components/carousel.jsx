import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import clsx from 'clsx';
import {
  Box, Typography, Grid, Container,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import styles from '../styles/components/carousel';

const CustomCarousel = () => {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(styles);
  return (
    <Box className={classes.container}>
      <Carousel>
        <div>
          <img src="images/history1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/history2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="images/history1.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="images/history2.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
