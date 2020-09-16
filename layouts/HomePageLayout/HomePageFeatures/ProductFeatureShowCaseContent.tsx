import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FreeTrialButton from 'components/FreeTrialButton';

interface ProductFeatureShowCaseContentProps {
  title: string;
  subtitle: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
  },
  freeTrialCta: {
    alignSelf: 'flex-start',
    [theme.breakpoints.down('sm')]: { alignSelf: 'center' },
  },
}));

const ProductFeatureShowCaseContent = (
  props: ProductFeatureShowCaseContentProps
) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h6">
        {props.title}
      </Typography>
      <Typography className={classes.subtitle} variant="body1">
        {props.subtitle}
      </Typography>
      <FreeTrialButton className={classes.freeTrialCta} variant="contained" />
    </>
  );
};

export default ProductFeatureShowCaseContent;
