import React, { ReactElement } from 'react';
import { Box, Grid, GridSize, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface HomePageChatSecurityCardProps {
  content: string;
  imgSrc: string;
  lg?: GridSize;
  md?: GridSize;
  sm?: GridSize;
  subtitle: string;
  title: string;
  xl?: GridSize;
  xs?: GridSize;
}

const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(2) },
  subtitle: { color: '#2B48A5', fontWeight: 'bold' },
  title: { fontWeight: 'bold', marginBottom: theme.spacing(2) },
  card: {
    borderColor: '#DDE1EE',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  img: { height: '100%', maxWidth: '100%' },
  contentContainer: {
    backgroundColor: '#F8F9FA',
    padding: theme.spacing(3),
  },
}));

function HomePageChatSecurityCard(
  props: HomePageChatSecurityCardProps
): ReactElement {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      item
      lg={props.lg}
      md={props.md}
      sm={props.sm}
      xl={props.xl}
      xs={props.xs}
    >
      <Box
        className={classes.card}
        display="flex"
        height={{ md: '600px' }}
        flexDirection={{ xs: 'column', sm: 'row', md: 'column' }}
      >
        <Box
          display="flex"
          flex={{ xs: 1, sm: 1, md: 1 }}
          flexDirection="column"
          height={{ md: '50%' }}
          justifyContent="center"
          pb={{ xs: 2 }}
          pt={{ xs: 2 }}
        >
          <img
            alt=""
            className={classes.img}
            role="presentation"
            src={props.imgSrc}
          />
        </Box>
        <Box
          alignItems="center"
          className={classes.contentContainer}
          display="flex"
          flex={{ xs: 1, sm: 3, md: 1 }}
          flexDirection="column"
          height={{ md: '50%' }}
          justifyContent="center"
        >
          <Typography
            align="center"
            className={classes.subtitle}
            display="block"
            gutterBottom
            variant="caption"
          >
            {props.subtitle}
          </Typography>
          <Typography
            align="center"
            className={classes.title}
            component="h6"
            variant="h6"
          >
            {props.title}
          </Typography>
          <Typography align="center">{props.content}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default HomePageChatSecurityCard;
