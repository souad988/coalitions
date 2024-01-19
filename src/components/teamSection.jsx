import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
} from '@mui/material';
import useCustomStyles from '../styles/useCustonStyles';
import Styles from '../styles/components/midSection';
import HeadlineComponent from './headlineComponent';
import Schedual from './schedual';

const TeamSection = () => {
  const { team } = useSelector((state) => state.history);
  console.log(team);
  const classes = useCustomStyles(Styles);
  return (
    <Box id="team">
      <HeadlineComponent
        title1={team?.headlines.title1}
        title2={team?.headlines.title2}
        text={team?.headlines.text}
      />

      <Box className={classes.climbContainer}>
        <Schedual schedual={team.mountains[0].schedual} />
      </Box>
    </Box>
  );
};

export default TeamSection;
