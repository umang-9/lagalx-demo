import React, { ReactElement } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronRight } from '@material-ui/icons';

interface HomePageContactCardProps {
  content: string;
  ctaText: string;
  href?: string;
  logoSrc: string;
  onClick?(): void;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.common.white,
  },
  logoWrapper: {
    borderRadius: '50%',
    height: '80px',
    width: '80px',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[3],
  },
  logo: {
    height: '80px',
    width: '80px',
  },
  title: { fontWeight: 'bold' },
  ctaContainer: { backgroundColor: '#F8F9FA' },
  cta: { color: '#2B48A5', textTransform: 'none' },
}));

function HomePageContactCard(props: HomePageContactCardProps): ReactElement {
  const classes = useStyles();

  return (
    <Box
      boxShadow={3}
      className={classes.card}
      position="relative"
      mb={{ xs: 2, sm: 2 }}
      height="100%"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        left={0}
        margin="auto"
        position="absolute"
        right={0}
        top="-40px"
      >
        <div className={classes.logoWrapper}>
          <img
            alt=""
            className={classes.logo}
            role="presentation"
            src={props.logoSrc}
          />
        </div>
      </Box>
      <Box height="70%" pt={8} pr={2} pl={2} pb={2}>
        <Typography
          align="center"
          className={classes.title}
          component="h6"
          gutterBottom
          variant="h6"
        >
          {props.title}
        </Typography>
        <Typography align="center">{props.content}</Typography>
      </Box>
      <Box
        height="30%"
        className={classes.ctaContainer}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        pl={2}
        pr={2}
        pt={2}
        pb={2}
      >
        <Button
          className={classes.cta}
          component={props.href ? 'a' : undefined}
          endIcon={<ChevronRight />}
          href={props.href}
          onClick={props.onClick}
          variant="text"
        >
          {props.ctaText}
        </Button>
      </Box>
    </Box>
  );
}

export default HomePageContactCard;
