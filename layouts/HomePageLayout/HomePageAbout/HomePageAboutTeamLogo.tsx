import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface HomePageAboutTeamLogoProps {
  alt: string;
  src: string;
}

const useStyles = makeStyles({
  img: { maxWidth: '90%', maxHeight: '90%' },
});

function HomePageAboutTeamLogo(
  props: HomePageAboutTeamLogoProps
): ReactElement {
  const classes = useStyles();

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="row"
      height="80px"
      justifyContent="center"
      mb={2}
      p={1}
    >
      <img className={classes.img} alt={props.alt} src={props.src} />
    </Box>
  );
}

export default HomePageAboutTeamLogo;
