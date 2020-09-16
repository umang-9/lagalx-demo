import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YunbanLogo, { YunbanLogoProps } from 'components/YunbanLogo';

const useStyles = makeStyles({
  anchor: { cursor: 'pointer' },
});

const AnchorYunbanLogo = forwardRef(
  (
    { variant, ...rest }: YunbanLogoProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const classes = useStyles();

    return (
      <a className={classes.anchor} ref={ref} {...rest}>
        <YunbanLogo variant={variant} />
      </a>
    );
  }
);

AnchorYunbanLogo.displayName = 'AnchorYunbanLogo';

export default AnchorYunbanLogo;
