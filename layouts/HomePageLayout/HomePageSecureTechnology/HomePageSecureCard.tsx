import React, { ReactElement, ReactNode } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface HomePageSecureCardProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  card: { borderRadius: 0 },
  title: { color: '#2B48A5', fontWeight: 'bold' },
  cardHeader: { paddingLeft: theme.spacing(4), paddingRight: theme.spacing(4) },
  cardContent: {
    paddingTop: 0,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

function HomePageSecureCard(props: HomePageSecureCardProps): ReactElement {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={props.icon}
        classes={{ root: classes.cardHeader }}
        disableTypography
        title={
          <Typography className={classes.title} variant="h6" component="h6">
            {props.title}
          </Typography>
        }
      />
      <CardContent classes={{ root: classes.cardContent }}>
        <Box>{props.children}</Box>
      </CardContent>
    </Card>
  );
}

export default HomePageSecureCard;
