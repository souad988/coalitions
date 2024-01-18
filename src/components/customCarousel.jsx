import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box, Grid, Container, useMediaQuery, useTheme,
} from '@mui/material';
import CustomAccordions from './customAccordion';
import useCustomStyles from '../styles/useCustonStyles';
import styles from '../styles/components/carousel';

const CustomCarousel = (props) => {
  const { items } = props;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useCustomStyles(styles);
  const [start, setStart] = useState(0);
  const [sequence, setSequence] = useState(items.slice(start, start + 4));
  const btns = Math.ceil(items.length / 4);
  const slide = (index) => {
    const newStart = index * 4;
    setStart(newStart);
    setSequence(items.slice(newStart, newStart + 4));
  };
  const divArray = Array.from({ length: btns }, (_, index) => index);
  return (
    <Box className={classes.container}>
      <Container>

        <Grid container direction="column">
          <Grid item container alignItems="center" justifyContent="center">
            {sequence.map((item) => (mobile ? (
              <CustomAccordions key={item.id} item={item} expandedId={item.id} />
            ) : (
              <Grid item key={`image${item.id}`} className={classes.card}>
                <img src={item.imageUrl} alt={item.descr} />
              </Grid>
            )))}
          </Grid>
          <Grid item container alignItems="center" justifyContent="center">
            {divArray.map((number) => (
              <Grid
                className={clsx(classes.paginate, start / 4 === number && classes.opacity)}
                item
                key={number + 1}
                onClick={() => slide(number)}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
CustomCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default CustomCarousel;
