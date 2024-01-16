const mainStyles = (theme) => ({
  mainContainer: {
    width: '100%',
  },
  container: {
    minHeight: '100vh',
    width: '100%',
  },
  headerContainer: {
    position: 'sticky',
    padding: '2vh 10%',
    left: '0',
    zIndex: 1,
  },
  lightLink: {
    color: theme.palette.link.light,
    '&:hover': {
      color: theme.palette.link.dark,
    },
  },
  darkLink: {
    color: theme.palette.link.dark,
    '&:hover': {
      color: theme.palette.link.dark,
    },
  },
  hiddenBg: {
    opacity: 0.3,
    background: 'url(images/bg/page1_bg2_169.png)',
    position: 'absolute',
    top: 0,
    minHeight: '100vh',
    width: '100%',
  },
  subContainer: {
    position: 'absolute',
    minHeight: '100vh',
    top: 0,
    left: 0,
  },
  homeContainer: {
    minHeight: '100vh',
    width: '100%',
    ObjectFit: 'cover',
    opacity: 0.8,
  },
  headline: {
    fontWeight: 900,
    fontSize: '2rem',
    [theme.breakpoints.up('900')]: {
      fontSize: '6rem',
    },
  },
  headline1: {
    color: theme.palette.blue.dark,
  },
  headline2: {
    color: theme.palette.grey.dark,
  },
  fullHeight: {
    minHeight: '100vh',
  },
});
export default mainStyles;
