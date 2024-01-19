import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import Styles from '../styles/components/midSection';
import HeadlineComponent from './headlineComponent';
import Schedual from './schedual';
import MountainHeader from './mountainHeader';

const TeamSection = () => {
  const { team } = useSelector((state) => state.history);
  const [mountain, setMountain] = useState(team?.mountains[0]);
  console.log(team);
  const classes = useCustomStyles(Styles);
  return (
    <Box id="team">
      <HeadlineComponent
        title1={team?.headlines.title1}
        title2={team?.headlines.title2}
        text={team?.headlines.text}
      />
      <MountainHeader setMountain={setMountain} />
      <Box className={classes.climbContainer}>
        <Schedual schedual={mountain.schedual} />
      </Box>
    </Box>
  );
};

export default TeamSection;
