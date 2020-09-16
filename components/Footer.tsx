import React, { ReactElement } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import LanguageSelectorMenuButton from 'components/LanguageSelectorMenuButton';
import YunbanLogo from 'components/YunbanLogo';

const useStyles = makeStyles((theme) => ({
  footer: { color: theme.palette.common.white },
  footerTop: {
    backgroundColor: '#222E54',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  footerBottom: {
    backgroundColor: '#0F162B',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  footerGrid: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  anchor: {
    '&:hover': { opacity: 0.54 },
    marginLeft: theme.spacing(2),
    opacity: 1,
    textDecoration: 'none',
    transitionDuration: '250ms',
    transitionProperty: 'opacity',
  },
  languageMenuButton: { marginLeft: theme.spacing(2) },
}));

function Footer(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Box alignItems="center" className={classes.footerTop}>
        <Grid container justify="center">
          <Grid container className={classes.footerGrid} item xs={11} md={9}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="row"
                justifyContent={{
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                }}
              >
                <YunbanLogo variant="white" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="row"
                justifyContent={{
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-end',
                }}
                pt={{ xs: 2, sm: 2, md: 0 }}
              >
                <Link href="/#product-features" passHref shallow>
                  <Typography
                    className={classes.anchor}
                    color="inherit"
                    component="a"
                  >
                    {t('common:productOverview')}
                  </Typography>
                </Link>
                <Link href="/#about" passHref shallow>
                  <Typography
                    className={classes.anchor}
                    color="inherit"
                    component="a"
                  >
                    {t('common:aboutYunban')}
                  </Typography>
                </Link>
                <Link href="/#security" passHref shallow>
                  <Typography
                    className={classes.anchor}
                    color="inherit"
                    component="a"
                  >
                    {t('common:secureTechnology')}
                  </Typography>
                </Link>
                <Link href="/#contact" passHref shallow>
                  <Typography
                    className={classes.anchor}
                    color="inherit"
                    component="a"
                  >
                    {t('common:contactUs')}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        alignItems="center"
        className={classes.footerBottom}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid container justify="center">
          <Grid container className={classes.footerGrid} item xs={11} md={9}>
            <Grid item xs={12} md={6}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="row"
                justifyContent={{
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start',
                }}
              >
                <Typography>{t('common:copyright')}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="row"
                justifyContent={{
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-end',
                }}
                pt={{ xs: 2, sm: 2, md: 0 }}
              >
                <Link href="/terms" passHref>
                  <Typography
                    className={classes.anchor}
                    color="inherit"
                    component="a"
                  >
                    {t('common:termsOfUse')}
                  </Typography>
                </Link>
                <Link href="/privacy" passHref>
                  <Typography
                    className={classes.anchor}
                    color="inherit"
                    component="a"
                  >
                    {t('common:privacyPolicy')}
                  </Typography>
                </Link>
                <LanguageSelectorMenuButton
                  className={classes.languageMenuButton}
                  showStartIcon
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;
