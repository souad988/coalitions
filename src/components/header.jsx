import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import {
  Box, Grid, useTheme,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import styles from '../styles/components/header';

const Header = (props) => {
  const classes = useCustomStyles(mainStyles);
  const headerClasses = useCustomStyles(styles);
  const { trigger } = props;
  const theme = useTheme();
  return (
    <Box className={classes.headerContainer} sx={{ backgroundColor: trigger ? theme.palette.link.light : 'transparent' }}>
      <Grid container className={classes.header} justifyContent="space-between" alignItems="center">
        <Grid item lg={3} xs={6}>
          <HashLink smooth to="/home#home" className={headerClasses.logo}>
            <img src="images/icons/icon.png" alt="icon" />
          </HashLink>
        </Grid>
        <Grid container item lg={3} xs={6} justifyContent="space-between">
          <Grid item>
            <HashLink smooth to="/path#hash" className={trigger ? classes.darkLink : classes.lightLink}>
              01.HISTORY
            </HashLink>
          </Grid>
          <Grid item>
            <HashLink smooth to="/path#hash" className={trigger ? classes.darkLink : classes.lightLink}>
              02.TEAM
            </HashLink>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Header.propTypes = {
  trigger: PropTypes.bool.isRequired,
};

export default Header;
