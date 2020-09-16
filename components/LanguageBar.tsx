import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelectorMenuButton from './LanguageSelectorMenuButton';

const useStyles = makeStyles((theme) => ({
  nav: { backgroundColor: 'transparent', color: theme.palette.common.white },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  anchor: {
    '&:hover': { opacity: 0.54 },
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    opacity: 1,
    textDecoration: 'none',
    transitionDuration: '250ms',
    transitionProperty: 'opacity',
  },
}));

function LanguageBar(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
      className={classes.nav}
      component="nav"
      container
      direction="row"
      justify="center"
    >
      <Grid className={classes.wrapper} item xs={11} md={9}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <LanguageSelectorMenuButton variant="text" />
          <a
            className={classes.anchor}
            href="https://app.legalx.ai/login"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('common:login')}
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LanguageBar;
