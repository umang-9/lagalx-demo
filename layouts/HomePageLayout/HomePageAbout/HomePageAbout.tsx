import React, { ReactElement } from 'react';
import { Divider, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import PageGrid from 'components/PageGrid';
import HomePageSectionSubtitle from '../HomePageSectionSubtitle';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageAboutLogo from './HomePageAboutLogo';
import HomePageAboutTeamLogo from './HomePageAboutTeamLogo';

const useStyles = makeStyles((theme) => ({
  aboutSectionTitle: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  aboutSection: {
    color: theme.palette.common.white,
    backgroundImage:
      'linear-gradient(269deg, rgba(184,221,255,0.65) 0%, rgba(74,135,207,0.65) 24%, rgba(6,38,140,0.65) 100%), url(/images/about-background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  aboutSectionBlock: {
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  divider: {
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(4),
  },
  logoWrapper: {
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  content: { whiteSpace: 'pre-wrap' },
}));

function HomePageAbout(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className={classes.aboutSection}>
        <PageGrid>
          <HomePageSectionTitle
            align="left"
            className={classes.aboutSectionTitle}
          >
            {t('common:aboutSectionTitle')}
          </HomePageSectionTitle>
          <Divider classes={{ root: classes.divider }} />
          <Grid container>
            <Grid className={classes.aboutSectionBlock} item xs={12} md={6}>
              <Typography className={classes.content} color="inherit" paragraph>
                {t('common:aboutSectionContent')}
              </Typography>
            </Grid>
            <Grid
              className={classes.aboutSectionBlock}
              container
              item
              xs={12}
              md={6}
            >
              <Hidden xsDown>
                <Grid item sm={2} />
              </Hidden>
              <Grid className={classes.logoWrapper} item xs={6} sm={4}>
                <HomePageAboutLogo imgSrc="/images/about-logo-cyberport.png" />
              </Grid>
              <Grid className={classes.logoWrapper} item xs={6} sm={4}>
                <HomePageAboutLogo imgSrc="/images/about-logo-invest-hk.png" />
              </Grid>
              <Hidden xsDown>
                <Grid item sm={2} />
              </Hidden>
              <Grid className={classes.logoWrapper} item xs={6} sm={4}>
                <HomePageAboutLogo imgSrc="/images/about-logo-microsoft-partner-network.png" />
              </Grid>
              <Grid className={classes.logoWrapper} item xs={6} sm={4}>
                <HomePageAboutLogo imgSrc="/images/about-logo-tencent-cloud.png" />
              </Grid>
              <Grid className={classes.logoWrapper} item xs={6} sm={4}>
                <HomePageAboutLogo imgSrc="/images/about-logo-alibaba.png" />
              </Grid>
            </Grid>
          </Grid>
        </PageGrid>
      </section>
      <section>
        <PageGrid>
          <HomePageSectionTitle align="center">
            {t('common:teamTitle')}
          </HomePageSectionTitle>
          <HomePageSectionSubtitle>
            {t('common:teamSubtitle')}
          </HomePageSectionSubtitle>
          <Grid container justify="center">
            <Hidden smDown>
              <Grid item md={1} />
            </Hidden>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Tsinghua University"
                src="/images/team-tsinghua.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="London School of Economics and Political Science"
                src="/images/team-lse.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Massachusetts Institute of Technology"
                src="/images/team-mit.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Harvard Business School"
                src="/images/team-harvard-business-school.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo alt="Yale" src="/images/team-yale.png" />
            </Grid>
            <Hidden smDown>
              <Grid item md={1} />
            </Hidden>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="JP Morgan"
                src="/images/team-jp-morgan.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Morrison Foerster"
                src="/images/team-morrison-foerster.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Sidley"
                src="/images/team-sidley.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Orrick"
                src="/images/team-orrick.png"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <HomePageAboutTeamLogo
                alt="Hack Reactor"
                src="/images/team-hack-reactor.png"
              />
            </Grid>
          </Grid>
        </PageGrid>
      </section>
    </>
  );
}

export default HomePageAbout;
