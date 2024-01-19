const Styles = (theme) => ({
  container: {
    background: 'url(images/page2.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '82vh',
    color: theme.palette.grey.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '10vh',
  },
  climbContainer: {
    background: 'url(images/mountains.png) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '82vh',
    paddingTop: '20vh',
  },
  flexButtom: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  h4: {
    top: '35%',
    [theme.breakpoints.down('900')]: {
      top: '25%',
    },
  },
});

export default Styles;
