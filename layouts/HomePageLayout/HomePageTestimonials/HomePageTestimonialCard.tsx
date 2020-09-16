import React, { ReactElement } from 'react';
import { Box, Grid, Typography, GridSize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Testimonial {
  author: string;
  position: string;
  quote: string;
}

interface HomePageTestimonialCardProps {
  alt?: string;
  imgSrc: string;
  industry: string;
  lg?: GridSize;
  md?: GridSize;
  sm?: GridSize;
  testimonial?: Testimonial;
  xl?: GridSize;
  xs?: GridSize;
}

const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(3) },
  imgContainer: {
    backgroundColor: theme.palette.common.white,
    height: '200px',
  },
  img: { width: '35%' },
  industryRectangle: {
    backgroundColor: '#2B48A5',
    display: 'flex',
    flexDirection: 'column',
    height: '30px',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  industryTriangle: {
    width: 0,
    height: 0,
    borderTop: '30px solid #2B48A5',
    borderRight: '30px solid transparent',
  },
  industry: { color: theme.palette.common.white },
  testimonialContainer: { backgroundColor: '#F8F9FA' },
  quote: { marginBottom: theme.spacing(3) },
  author: {
    color: '#2B48A5',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
}));

function HomePageTestimonialCard(
  props: HomePageTestimonialCardProps
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
      <Box boxShadow={3} position="relative" height="100%">
        <Box
          display="flex"
          flexDirection="row"
          left={0}
          position="absolute"
          top={0}
        >
          <div className={classes.industryRectangle}>
            <Typography className={classes.industry}>
              {props.industry}
            </Typography>
          </div>
          <div className={classes.industryTriangle} />
        </Box>
        <Box
          alignItems="center"
          className={classes.imgContainer}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <img alt={props.alt} className={classes.img} src={props.imgSrc} />
        </Box>
        {props.testimonial && (
          <Box
            alignItems="center"
            className={classes.testimonialContainer}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={4}
          >
            <Typography align="center" className={classes.quote}>
              {props.testimonial.quote}
            </Typography>
            <Typography align="center" className={classes.author}>
              {props.testimonial.author}
            </Typography>
            <Typography align="center" color="textSecondary">
              {props.testimonial.position}
            </Typography>
          </Box>
        )}
      </Box>
    </Grid>
  );
}

export default HomePageTestimonialCard;
