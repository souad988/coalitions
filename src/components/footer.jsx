import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';

const Footer = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Container>
      <Grid container className={classes.header} justifyContent="space-between" alignItems="center">
        <Grid container item lg={3} xs={6}>
          <Grid item>
            <img src="images/icons/icon.png" alt="icon" />
          </Grid>
          <Grid item>
            <Typography variant="h6">LOSANGELES</Typography>
            <Typography variant="h6">MOUNTAINS</Typography>
          </Grid>
        </Grid>
        <Grid item lg={3} xs={6}>
          <Typography variant="body" size="small">Copy Rights </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
