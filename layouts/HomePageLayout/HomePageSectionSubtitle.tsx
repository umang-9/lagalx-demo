import React, { ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

interface HomePageSectionTitleProps {
  children: ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  subtitle: { marginBottom: theme.spacing(8), whiteSpace: 'pre-wrap' },
}));

const HomePageSectionTitle = (props: HomePageSectionTitleProps) => {
  const classes = useStyles();

  return (
    <Typography
      className={classNames(classes.subtitle, props.className)}
      align="center"
      component="h3"
      variant="h6"
    >
      {props.children}
    </Typography>
  );
};

export default HomePageSectionTitle;
