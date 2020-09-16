import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface HomePageAboutLogoProps {
  imgSrc: string;
}

const useStyles = makeStyles((theme) => ({
  container: { backgroundColor: theme.palette.common.white, height: '150px' },
  img: { width: '80%' },
}));

const HomePageAboutLogo = (props: HomePageAboutLogoProps) => {
  const classes = useStyles();

  return (
    <Box
      alignItems="center"
      className={classes.container}
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <img className={classes.img} alt="" src={props.imgSrc} />
    </Box>
  );
};

export default HomePageAboutLogo;
