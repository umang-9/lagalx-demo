import React, { ReactElement, ReactNode } from 'react';
import { PropTypes, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  title: { fontWeight: 'bold', marginBottom: theme.spacing(4) },
}));

interface HomePageSectionTitleProps {
  align?: PropTypes.Alignment;
  children: ReactNode;
  className?: string;
  color?:
    | 'error'
    | 'inherit'
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary';
}

function HomePageSectionTitle(props: HomePageSectionTitleProps): ReactElement {
  const classes = useStyles();

  return (
    <Typography
      align={props.align}
      className={classNames(classes.title, props.className)}
      color={props.color}
      component="h3"
      variant="h4"
    >
      {props.children}
    </Typography>
  );
}

HomePageSectionTitle.defaultProps = {
  align: 'center',
};

export default HomePageSectionTitle;
