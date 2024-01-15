import React from 'react';
import { Box, Grid } from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';

const Header = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box>
      <Grid container className={classes.header}>
        <Grid item lg={3} xs={6} />
        <Grid item lg={3} xs={6}>text</Grid>
      </Grid>
    </Box>
  );
};

export default Header;
