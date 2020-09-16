import React, { ReactElement } from 'react';
import {
  AppBar,
  Box,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  useScrollTrigger ,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import AnchorYunbanLogo from 'components/AnchorYunbanLogo';
import FreeTrialButton from 'components/FreeTrialButton';
import MobileMenuButton from 'components/MobileMenuButton';
import LanguageSelectorMenuButton from './LanguageSelectorMenuButton';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
  },
  anchor: {
    '&:hover': { opacity: 0.54 },
    marginRight: theme.spacing(2),
    opacity: 1,
    textDecoration: 'none',
    transitionDuration: '250ms',
    transitionProperty: 'opacity',
    fontSize: '16px',
  },
}));

function NavBar(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });
  
  

  return (
    <AppBar classes={{ root: classes.appBar }} elevation={trigger ? 24 : 0} position="sticky">
      <Toolbar disableGutters>
        
      

        <Grid container direction="row" justify="center">
          <Grid container item xs={11} md={9}>
            <Grid item xs={4}>
              <Link href="/" passHref shallow>
                <AnchorYunbanLogo />
              </Link>
            </Grid>
            <Grid item xs={8}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="row"
                height="100%"
                justifyContent="flex-end"
              >
                <Hidden mdUp>
                <LanguageSelectorMenuButton variant="text" />
                </Hidden>

                 <Hidden mdUp>
                  <MobileMenuButton />
                </Hidden>

                <Hidden smDown>
                  <LanguageSelectorMenuButton variant="text" />
                  <Link href="/#product-features" passHref shallow>
                    <Typography className={classes.anchor} component="a">
                      {t('common:productOverview')}
                    </Typography>
                  </Link>
                  <Link href="/#security" passHref shallow>
                    <Typography className={classes.anchor} component="a">
                      {t('common:secureTechnology')}
                    </Typography>
                  </Link>
                  <Link href="/#about" passHref shallow>
                    <Typography className={classes.anchor} component="a">
                      {t('common:aboutYunban')}
                    </Typography>
                  </Link>
                  <Link href="/#contact" passHref shallow>
                    <Typography className={classes.anchor} component="a">
                      {t('common:contactUs')}
                    </Typography>
                  </Link>
                  <a
                    className={classes.anchor}
                    href="https://app.legalx.ai/login"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t('common:login')}
                  </a>
                  <FreeTrialButton />
                </Hidden>

              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
