const styles = (theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.blue.dark,
    opacity: 0.7,
    padding: '2vh 0',
  },
  paginate: {
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    backgroundColor: theme.palette.link.light,
    opacity: 0.7,
    margin: '0 2%',
  },
  opacity: {
    opacity: 1,
  },
  card: {
    margin: '2%',
    boxShadow: `3px 3px 4px ${theme.palette.grey.dark}`,
  },
});

export default styles;
