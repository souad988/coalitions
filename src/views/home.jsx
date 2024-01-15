import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';

function Home() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box>
      <Grid containe>
        <Grid item>
          <Typography variant="h1" className={classes.headline1}>
            LOSSANGELES
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1" className={classes.headline2}>
            MOUNTAINS
          </Typography>
        </Grid>
      </Grid>
      <Box className={classes.homeContainer}>

        <Box className={classes.Overlap} />
      </Box>
    </Box>
  );
}

export default Home;
