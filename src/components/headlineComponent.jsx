import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Container,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import mainStyles from '../styles';
import Styles from '../styles/components/midSection';

const HeadlineComponent = ({ text, title1, title2 }) => {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(Styles);
  return (
    <Container className={mainClasses.verticalPadding}>
      <Grid container flexDirection="column">
        <Grid item container flexDirection="row" justifyContent="flex-start">

          <Grid item className={classes.flexButtom}>
            <Typography variant="h1Counter">{title1}</Typography>
          </Grid>
          <Grid item>
            <Grid container className={mainClasses.relativePosition} flexDirection="column" justifyContent="flex-end">
              <Grid item>
                <Typography className={clsx(mainClasses.absolutePosition, classes.h4)} variant="h4">{title2}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h1Counter">.</Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid item container justifyContent="flex-end">
          <Grid item xs={11}>
            <Typography variant="body">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

HeadlineComponent.propTypes = {
  text: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,

};

export default HeadlineComponent;
