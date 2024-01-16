import React from 'react';
import clsx from 'clsx';
import {
  Box, Typography, Grid, Hidden,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Styles from '../styles/components/midSection';

const MidSection = () => {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(Styles);

  return (
    <Box className={classes.container}>
      <img src="images/bg/page2_bg.png" style={{ visibility: 'hidden' }} />
      <Grid container>
        <Grid container item>
          <Grid item>
            <Typography variant="h1" className={clsx(mainClasses.headline2)}>01.</Typography>
          </Grid>
          <Grid item>
            <Typography variant="4" className={clsx(mainClasses.headline1)}>HISTORY</Typography>
          </Grid>
        </Grid>
        <Grid item>
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
    </Box>
  );
};

export default MidSection;
