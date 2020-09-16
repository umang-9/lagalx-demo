import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import FreeTrialButton from 'components/FreeTrialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/images/hero.jpg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '580px',
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: theme.spacing(6),
    whiteSpace: 'pre-wrap',
  },
  freeTrialCta: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },
}));

function HomePageHero(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <Grid container justify="center">
        <Grid item xs={11} md={9}>
          <Typography
            align="center"
            className={classes.title}
            color="inherit"
            component="h1"
            variant="h2"
          >
            {t('common:heroTitle')}
          </Typography>
          <Typography
            align="center"
            component="h2"
            variant="h5"
            color="inherit"
          >
            {t('common:heroSubtitle')}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt={4}
          >
            <FreeTrialButton className={classes.freeTrialCta} />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePageHero;
