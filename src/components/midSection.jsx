import React from 'react';
import clsx from 'clsx';
import {

  Box, Typography, Grid, Container,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Styles from '../styles/components/midSection';

const MidSection = () => {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(Styles);

  return (
    <Box className={classes.container} key="history">
      <Container>
        <Grid container flexDirection="column">
          <Grid item container flexDirection="row" justifyContent="flex-start">

            <Grid item className={classes.flexButtom}>
              <Typography variant="h1">01</Typography>
            </Grid>
            <Grid item>
              <Grid container className={mainClasses.relativePosition} flexDirection="column" justifyContent="flex-end">
                <Grid item>
                  <Typography className={mainClasses.absolutePosition} variant="h4" style={{ top: '50%' }}>HISTORY</Typography>
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
    </Box>
  );
};

export default MidSection;
