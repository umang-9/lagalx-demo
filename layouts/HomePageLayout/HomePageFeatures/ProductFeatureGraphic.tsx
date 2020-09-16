import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type variant =
  | 'communication'
  | 'crossFunctional'
  | 'devices'
  | 'document'
  | 'project'
  | 'search';

interface ProductFeatureGraphicProps {
  variant: variant;
}

const useStyles = makeStyles((theme) => ({
  image: {
    height: '350px',
    [theme.breakpoints.down('sm')]: {
      height: '400px',
    },
  },
}));

const ProductFeatureGraphic = (props: ProductFeatureGraphicProps) => {
  const classes = useStyles();

  function getFilename(): string {
    switch (props.variant) {
      case 'communication':
        return 'home-product-feature-graphic-communication.svg';
      case 'crossFunctional':
        return 'home-product-feature-graphic-cross-functional.svg';
      case 'devices':
        return 'home-product-feature-graphic-devices.svg';
      case 'document':
        return 'home-product-feature-graphic-communication.svg';
      case 'project':
        return 'home-product-feature-graphic-project.svg';
      case 'search':
        return 'home-product-feature-graphic-search.svg';
      default:
        return 'home-product-feature-graphic-communication.svg';
    }
  }

  return (
    <img
      alt=""
      className={classes.image}
      role="presentation"
      src={`/images/${getFilename()}`}
    />
  );
};

export default ProductFeatureGraphic;
