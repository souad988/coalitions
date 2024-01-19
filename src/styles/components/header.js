const styles = (theme) => ({
  headerContainer: {
    position: 'sticky',
    padding: '0 10%',
    left: '0',
    top: 0,
    zIndex: 1,
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
  },
  mobileHeaderContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100vw',
    height: '30vh',
    boxShadow: `3px 3px 4px ${theme.palette.grey.dark}`,
    backgroundColor: theme.palette.link.light,
    padding: '0 8vw',
  },
  mobileHeaderMenu: {
    height: '20vh',
  },
});

export default styles;
