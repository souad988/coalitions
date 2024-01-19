import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Container, Typography,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import styles from '../styles/components/schedual';

const Schedual = ({ schedual }) => {
  const localClasses = useCustomStyles(styles);
  return (
    <Container className={localClasses.container}>
      <Typography variant="h4">Schedual</Typography>
      <Grid container flexDirection="column">
        {
            schedual.map((elm) => (
              <Grid container item key={elm.id} justifyContent="space-between" className={localClasses.row}>
                <Grid item><Typography variant="body">{elm.date}</Typography></Grid>
                <Grid item><Typography variant="body">{elm.desc}</Typography></Grid>
              </Grid>
            ))
         }
      </Grid>

    </Container>
  );
};
Schedual.propTypes = {
  schedual: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Schedual;
