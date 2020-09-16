import React, { ReactNode, ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type graphicPosition = 'left' | 'right';

interface ProductFeatureShowCaseProps {
  graphicPosition: graphicPosition;
  left: ReactNode;
  right: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  containerReverse: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

function ProductFeatureShowCase(
  props: ProductFeatureShowCaseProps
): ReactElement {
  const classes = useStyles();

  return (
    <Grid
      container
      className={
        props.graphicPosition === 'left'
          ? classes.container
          : classes.containerReverse
      }
    >
      <Grid className={classes.wrapper} item xs={12} md={6}>
        {props.left}
      </Grid>
      <Grid className={classes.wrapper} item xs={12} md={6}>
        {props.right}
      </Grid>
    </Grid>
  );
}

export default ProductFeatureShowCase;
