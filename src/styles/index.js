const mainStyles = (theme) => ({
  container: {
    width: '100%',
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
      color: theme.palette.grey.light,
    },
  },
  hiddenBg: {
    opacity: 0.3,
    background: 'url(images/page1_bg.png)',
    position: 'absolute',
    top: 0,
    minHeight: '100vh',
    width: '100%',
  },
  fullHeight: {
    minHeight: '100vh',
  },
  rootAbsolutePosition: {
    top: 0,
    left: 0,
  },
  homeContainer: {
    minHeight: '100vh',
    width: '100%',
    ObjectFit: 'cover',
  },
  lowOpacity: {
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
  relativePosition: {
    position: 'relative',
  },
  absolutePosition: {
    position: 'absolute',
  },
  verticalPadding: {
    padding: '5vh 10vw',
  },
  logoText: {
    fontWeight: '900',
    lineHeight: 1,
  },
  containerPaddingSmall: {
    padding: '2vh 10vw',
  },
  fullCover: {
    width: '100%',
    height: '100%',
  },
  blueDarkBg: {
    backgroundColor: theme.palette.blue.light,
    opacity: 0.7,
    top: 0,
    left: 0,
  },
  boxShadow: {
    boxShadow: `1px 1px 6px ${theme.palette.blue.dark}`,
  },
  marginTop: {
    marginTop: '25vh',
    [theme.breakpoints.up('900')]: {
      marginTop: '15vh',
    },
  },
});
export default mainStyles;
