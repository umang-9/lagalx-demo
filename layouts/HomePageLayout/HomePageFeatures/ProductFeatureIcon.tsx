import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductFeatureCalendarIcon from './ProductFeatureCalendarIcon';
import ProductFeatureChatIcon from './ProductFeatureChatIcon';
import ProductFeatureCloudLockIcon from './ProductFeatureCloudLockIcon';
import ProductFeatureDocumentIcon from './ProductFeatureDocumentIcon';
import ProductFeatureSearchIcon from './ProductFeatureSearchIcon';
import ProductFeatureVideoIcon from './ProductFeatureVideoIcon';

type variant =
  | 'calendar'
  | 'chat'
  | 'cloudLock'
  | 'document'
  | 'search'
  | 'video';

interface ProductFeatureIconProps {
  children: ReactNode;
  variant: variant;
}

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: '#EAF3FC',
    borderRadius: '50%',
    height: '80px',
    padding: theme.spacing(2),
    width: '80px',
  },
  text: {
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
  },
}));

const ProductFeatureIcon = (props: ProductFeatureIconProps) => {
  const classes = useStyles();

  function getIcon(): ReactNode {
    switch (props.variant) {
      case 'calendar':
        return <ProductFeatureCalendarIcon />;
      case 'chat':
        return <ProductFeatureChatIcon />;
      case 'cloudLock':
        return <ProductFeatureCloudLockIcon />;
      case 'document':
        return <ProductFeatureDocumentIcon />;
      case 'search':
        return <ProductFeatureSearchIcon />;
      case 'video':
        return <ProductFeatureVideoIcon />;
      default:
        return <ProductFeatureCalendarIcon />;
    }
  }

  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Box
        alignItems="center"
        className={classes.iconWrapper}
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        {getIcon()}
      </Box>
      <Typography align="center" className={classes.text}>
        {props.children}
      </Typography>
    </Box>
  );
};

export default ProductFeatureIcon;
