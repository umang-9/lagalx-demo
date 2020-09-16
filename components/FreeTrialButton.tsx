import React, { ReactElement, useContext } from 'react';
import { Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { makeStyles, darken } from '@material-ui/core/styles';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import ContactFormDialogContext from 'context/ContactFormDialogContext';

const useStyles = makeStyles((theme) => ({
  button: { borderRadius: 0 },
  contained: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    '&:hover': { backgroundColor: darken('#222E54', 0.3) },
  },
  outlined: { borderColor: '#ffffff', color: '#ffffff' },
  text: { color: '#ffffff', fontWeight: 'bold' },
}));

interface FreeTrialButtonProps {
  className?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

function FreeTrialButton(props: FreeTrialButtonProps): ReactElement {
  const classes = useStyles();
  const openContactForm = useContext(ContactFormDialogContext);
  const { t } = useTranslation();

  return (
    <Button
      classes={{
        outlined: classes.outlined,
        contained: classes.contained,
        text: classes.text,
      }}
      className={classNames(classes.button, props.className)}
      endIcon={<ArrowForward />}
      onClick={openContactForm}
      variant={props.variant}
    >
      {t('common:freeTrial')}
    </Button>
  );
}

FreeTrialButton.defaultProps = {
  variant: 'outlined',
};

export default FreeTrialButton;
