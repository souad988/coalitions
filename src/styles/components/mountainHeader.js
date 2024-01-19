const styles = (theme) => ({
  container: {
    backgroundColor: theme.palette.blue.dark,
    padding: '0 20%',
  },
  link: {
    padding: '10px',
    fontWeight: '600',
    color: theme.palette.grey.light,
  },
  activeLink: {
    backgroundColor: theme.palette.grey.light,
    color: theme.palette.blue.dark,
    textDecoration: 'underline',

  },
});

export default styles;
