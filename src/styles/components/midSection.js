const Styles = (theme) => ({
  container: {
    background: 'url(images/page2.jpg) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
    color: theme.palette.grey.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '20vh',
  },
  flexButtom: {
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default Styles;
