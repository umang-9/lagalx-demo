import React, { ReactElement } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckListItem from 'components/CheckListItem';

const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(2) },
  cardContainer: { backgroundColor: '#F8F9FA', minHeight: '400px' },
  titleContainer: {
    backgroundColor: '#EDEEF1',
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  contentContainer: {
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  subtitle: { fontWeight: 'bold' },
}));

interface HomePagePainPointCardProps {
  points: string[];
  subtitle: string;
  title: string;
}

function HomePagePainPointCard(
  props: HomePagePainPointCardProps
): ReactElement {
  const classes = useStyles();

  return (
    <Grid className={classes.container} item xs={12} md={6}>
      <Box className={classes.cardContainer}>
        <Box className={classes.titleContainer}>
          <Typography color="textPrimary">{props.title}</Typography>
        </Box>
        <Box className={classes.contentContainer}>
          <Typography className={classes.subtitle} color="textPrimary">
            {props.subtitle}
          </Typography>
          <ul>
            {props.points.map((text) => (
              <CheckListItem key={text}>{text}</CheckListItem>
            ))}
          </ul>
        </Box>
      </Box>
    </Grid>
  );
}

export default HomePagePainPointCard;
