import React, { ReactElement, ReactNode, ElementType } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

interface PageGridProps {
  children: ReactNode;
  className?: string;
  component?: ElementType;
  disableMargin?: boolean;
}

function PageGrid(props: PageGridProps): ReactElement {
  const classes = useStyles();

  return (
    <Grid
      component={props.component}
      container
      direction="row"
      justify="center"
    >
      <Grid
        xs={11}
        md={9}
        item
        className={classNames(
          { [classes.margin]: !props.disableMargin },
          props.className
        )}
      >
        {props.children}
      </Grid>
    </Grid>
  );
}

PageGrid.defaultProps = {
  disableMargin: false,
};

export default PageGrid;
