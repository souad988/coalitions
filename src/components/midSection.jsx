import React from 'react';
import clsx from 'clsx';
import {
  Box, Typography, Grid, Container,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Styles from '../styles/components/midSection';
import CustomCarousel from './customCarousel';

const MidSection = () => {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(Styles);
  const imageArray = [
    {
      imageUrl: 'images/history1.jpg',
      id: '1',
      descr: 'First image',
    },
    {
      imageUrl: 'images/history1.jpg',
      id: '2',
      descr: 'Second image',
    },
    {
      imageUrl: 'images/history1.jpg',
      id: '3',
      descr: 'First image',
    },
    {
      imageUrl: 'images/history1.jpg',
      id: '4',
      descr: 'Second image',
    },
    {
      imageUrl: 'images/history1.jpg',
      id: '5',
      descr: 'First image',
    },
    {
      imageUrl: 'images/history2.jpg',
      id: '6',
      descr: 'Second image',
    },
    {
      imageUrl: 'images/history1.jpg',
      id: '7',
      descr: 'First image',
    },
    {
      imageUrl: 'images/history2.jpg',
      id: '8',
      descr: 'Second image',
    },
  ];
  return (
    <Box className={classes.container} id="history">
      <Container>
        <Grid container flexDirection="column">
          <Grid item container flexDirection="row" justifyContent="flex-start">

            <Grid item className={classes.flexButtom}>
              <Typography variant="h1">01</Typography>
            </Grid>
            <Grid item>
              <Grid container className={mainClasses.relativePosition} flexDirection="column" justifyContent="flex-end">
                <Grid item>
                  <Typography className={clsx(mainClasses.absolutePosition, classes.h4)} variant="h4">HISTORY</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h1">.</Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          <Grid item container justifyContent="flex-end">
            <Grid item xs={11}>
              <Typography variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra,
                rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex,
                iaculis sed erat sed,blandit tincidunt quam.
                Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
                gravida quis hendrerit ac,
                tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <CustomCarousel items={imageArray} />
    </Box>
  );
};

export default MidSection;
