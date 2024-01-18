import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionSummary, AccordionDetails, Grid,
  Typography,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import styles from '../styles/components/carousel';

const CustomAccordions = ({ item, expendedId }) => {
  const classes = useCustomStyles(styles);
  const [expanded, setExpanded] = useState(expendedId);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{item.descr}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid item key={`image${item.id}`} className={classes.card}>
          <img src={item.imageUrl} alt={item.descr} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

CustomAccordions.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
  }).isRequired,
  expendedId: PropTypes.string.isRequired,
};

export default CustomAccordions;
