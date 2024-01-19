import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box, Grid, Typography,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import styles from '../styles/components/mountainHeader';

const MountainHeader = ({ setMountain }) => {
  const localClasses = useCustomStyles(styles);
  const { team } = useSelector((state) => state.history);
  const [activeLink, setActiveLink] = useState(team.mountains[0].id);

  const handleClick = (mountain) => {
    setMountain(mountain);
    setActiveLink(mountain.id);
  };

  return (
    <Box>
      <Grid container className={localClasses.container}>
        {team.mountains.map((mountain) => (
          <Grid
            item
            key={mountain.id}
            alignItems="center"
            justifyContent="center"
            className={
                clsx(
                  localClasses.link,
                  activeLink === mountain.id && localClasses.activeLink,
                )

            }
          >
            <Typography variant="h6" onClick={() => handleClick(mountain)}>
              {mountain.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

MountainHeader.propTypes = {
  setMountain: PropTypes.func.isRequired,
};
export default MountainHeader;
