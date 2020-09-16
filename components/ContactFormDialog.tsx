import React, { ReactElement, useReducer } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  darken,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowForward } from '@material-ui/icons';
import useTranslation from 'next-translate/useTranslation';
import useContactFormState from 'hooks/useContactFormState';
import { sendEnquiry } from 'api';

interface ContactFormDialogProps {
  onClose(): void;
  open: boolean;
}

interface ContactFormDialogState {
  isSending: boolean;
  sendFail: boolean;
  sendSuccess: boolean;
}

const initState = {
  isSending: false,
  sendFail: false,
  sendSuccess: false,
};

function reducer(
  state: ContactFormDialogState,
  action
): ContactFormDialogState {
  switch (action.type) {
    case 'pending':
      return { ...state, isSending: true, sendFail: false, sendSuccess: false };
    case 'fulfilled':
      return { ...state, isSending: false, sendFail: false, sendSuccess: true };
    case 'rejected':
      return { ...state, isSending: false, sendFail: true, sendSuccess: false };
    case 'reset':
      return { ...initState };
    default:
      return { ...state };
  }
}

const useStyles = makeStyles((theme) => ({
  contained: {
    backgroundColor: '#222E54',
    color: theme.palette.common.white,
    '&:hover': { backgroundColor: darken('#222E54', 0.3) },
  },
  dialogActions: { justifyContent: 'center', paddingBottom: theme.spacing(4) },
  countryCode: { flex: 1 },
  phoneNumber: { flex: 2.5, marginLeft: theme.spacing(1) },
  circularProgress: { marginTop: theme.spacing(2) },
  failedMessage: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.main,
  },
  successCheck: { marginBottom: theme.spacing(4) },
}));

function ContactFormDialog(props: ContactFormDialogProps): ReactElement {
  const { t } = useTranslation();
  const classes = useStyles();
  const [{ isSending, sendFail, sendSuccess }, dispatch] = useReducer(
    reducer,
    initState
  );
  const {
    onAgreedToPrivacyPolicyChange,
    onCompanyHeadCountChange,
    onCompanyNameChange,
    onContactEmailChange,
    onContactNameChange,
    onContactPhoneNumberChange,
    onContactPhoneNumberCountryCodeChange,
    onReset,
    values,
  } = useContactFormState();

  async function onSubmit(e): Promise<void> {
    e.preventDefault();
    dispatch({ type: 'pending' });

    const data = {
      company_head_count: values.companyHeadCount,
      company_name: values.companyName,
      contact_phone_number: `+${values.contactPhoneNumberCountryCode.replace(
        '+',
        ''
      )} ${values.contactPhoneNumber}`,
      contact_email: values.contactEmail,
      contact_name: values.contactName,
    };

    try {
      await sendEnquiry(data);
      dispatch({ type: 'fulfilled' });
    } catch (error) {
      dispatch({ type: 'rejected' });
    }
  }

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      onClose={(): void => {
        if (!isSending) {
          props.onClose();
        }
      }}
      open={props.open}
      onExited={(): void => {
        onReset();
        dispatch({ type: 'reset' });
      }}
    >
      <DialogTitle>{t('common:contactFormDialogTitle')}</DialogTitle>
      <form id="contact-form" onSubmit={onSubmit}>
        <DialogContent>
          {sendSuccess ? (
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              pb={4}
            >
              <img
                alt=""
                className={classes.successCheck}
                role="presentation"
                src="/images/contact-form-success-tick.svg"
              />
              <Typography align="center">
                {t('common:contactFormSuccessMessage')}
              </Typography>
            </Box>
          ) : (
            <>
              <TextField
                autoFocus
                fullWidth
                label={t('common:contactFormCompanyName')}
                margin="normal"
                onChange={(e): void => onCompanyNameChange(e.target.value)}
                required
                value={values.companyName}
                variant="outlined"
              />
              <TextField
                fullWidth
                inputProps={{ min: 1, step: 1 }}
                label={t('common:contactFormCompanyHeadCount')}
                margin="normal"
                onChange={(e): void => onCompanyHeadCountChange(e.target.value)}
                required
                type="number"
                variant="outlined"
                value={values.companyHeadCount}
              />
              <TextField
                fullWidth
                label={t('common:contactFormContactName')}
                margin="normal"
                onChange={(e): void => onContactNameChange(e.target.value)}
                required
                value={values.contactName}
                variant="outlined"
              />
              <TextField
                fullWidth
                label={t('common:contactFormContactEmail')}
                margin="normal"
                onChange={(e): void => onContactEmailChange(e.target.value)}
                required
                type="email"
                variant="outlined"
                value={values.contactEmail}
              />
              <Box
                alignItems="flex-end"
                display="flex"
                flexDirection="row"
                mb={1}
                mt={2}
              >
                <TextField
                  className={classes.countryCode}
                  label={t('common:contactFormContactPhoneNumber')}
                  onChange={(e): void =>
                    onContactPhoneNumberCountryCodeChange(e.target.value)
                  }
                  required
                  placeholder="86"
                  value={values.contactPhoneNumberCountryCode}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.phoneNumber}
                  onChange={(e): void =>
                    onContactPhoneNumberChange(e.target.value)
                  }
                  required
                  value={values.contactPhoneNumber}
                  variant="outlined"
                />
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={values.agreedToPrivacyPolicy}
                    onChange={(e): void =>
                      onAgreedToPrivacyPolicyChange(e.target.checked)
                    }
                    color="primary"
                  />
                }
                label={t('common:contactFormAgreeToPrivacyPolicy')}
              />
            </>
          )}
        </DialogContent>
        {!sendSuccess && (
          <DialogActions classes={{ root: classes.dialogActions }}>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Button
                classes={{ contained: classes.contained }}
                disabled={isSending}
                endIcon={<ArrowForward />}
                form="contact-form"
                type="submit"
                variant="contained"
              >
                {t('common:contactFormSubmitButton')}
              </Button>
              {isSending && (
                <CircularProgress
                  classes={{ root: classes.circularProgress }}
                  size={20}
                />
              )}
              {sendFail && (
                <Typography align="center" className={classes.failedMessage}>
                  {t('common:contactFormErrorMessage')}
                </Typography>
              )}
            </Box>
          </DialogActions>
        )}
      </form>
    </Dialog>
  );
}

export default ContactFormDialog;
