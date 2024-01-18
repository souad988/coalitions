import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import {
  Box, Grid, useTheme, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import styles from '../styles/components/header';

const Header = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const classes = useCustomStyles(mainStyles);
  const localClasses = useCustomStyles(styles);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box className={localClasses.headerContainer} sx={{ backgroundColor: location.pathname === '/' ? 'transparent' : theme.palette.link.light }}>
        <Grid container className={classes.header} justifyContent="space-between" alignItems="center">
          <Grid item lg={3} xs={6}>
            <HashLink smooth to="/" className={localClasses.logo}>
              <img src="images/icon_header.png" alt="icon" />
            </HashLink>
          </Grid>
          <Grid container item lg={3} xs={6} justifyContent="space-between" style={{ display: mobile ? 'none' : 'flex' }}>
            <Grid item>
              <HashLink smooth to="/page2#history" className={location.pathname === '/' ? classes.lightLink : classes.darkLink}>
                01.HISTORY
              </HashLink>
            </Grid>
            <Grid item>
              <HashLink smooth to="/page2#mountains" className={location.pathname === '/' ? classes.lightLink : classes.darkLink}>
                02.TEAM
              </HashLink>
            </Grid>
          </Grid>
          {mobile
        && !open
          && (
          <MenuIcon
            size="large"
            className={location.pathname === '/' ? classes.lightLink : classes.darkLink}
            onClick={() => setOpen((state) => !state)}
          />
          )}
        </Grid>
      </Box>
      {mobile && open && (
      <Grid
        container
        flexDirection="column"
        justifyContent="space-around"
        alignItems="flex-end"
        className={localClasses.mobileHeaderContainer}
      >
        <Grid item>
          <CloseIcon
            size="large"
            className={classes.darkLink}
            onClick={() => setOpen((state) => !state)}
          />
        </Grid>
        <Grid container flexDirection="column" justifyContent="space-evenly" item className={localClasses.mobileHeaderMenu}>
          <Grid item>
            <HashLink smooth to="/page2#history" className={classes.darkLink} onClick={() => setOpen((state) => !state)}>
              01.HISTORY
            </HashLink>
          </Grid>
          <Grid item>
            <HashLink smooth to="/page2#mountains" className={classes.darkLink} onClick={() => setOpen((state) => !state)}>
              02.TEAM
            </HashLink>
          </Grid>
          <Grid item>
            <HashLink smooth to="/" className={classes.darkLink} onClick={() => setOpen((state) => !state)}>
              HOME
            </HashLink>
          </Grid>
        </Grid>
      </Grid>
      )}
    </>
  );
};

export default Header;
