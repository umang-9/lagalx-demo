import React, { ReactElement } from 'react';
import { Box, Divider, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import CheckListItem from 'components/CheckListItem';
import PageGrid from 'components/PageGrid';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageSecureCard from './HomePageSecureCard';
import SecureTechnologyLockIcon from './SecureTechnologyLockIcon';
import SecureTechnologyRefreshIcon from './SecureTechnologyRefreshIcon';
import SecureTechnologyShieldIcon from './SecureTechnologyShieldIcon';

const useStyles = makeStyles((theme) => ({
  section: { backgroundColor: '#F8F9FA' },
  cardContainer: { padding: theme.spacing(2) },
  list: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  iconWrapper: { height: '72px', width: '72px' },
}));

function HomePageSecureTechnology(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section id="security" className={classes.section}>
      <PageGrid>
        <HomePageSectionTitle>
          {t('common:secureTechnologyTitle')}
        </HomePageSectionTitle>
        <Grid container>
          <Grid className={classes.cardContainer} item xs={12}>
            <HomePageSecureCard
              title={t('common:secureTechnologyCard1EncryptionTitle') as string}
              icon={
                <Box className={classes.iconWrapper}>
                  <SecureTechnologyLockIcon />
                </Box>
              }
            >
              <ul className={classes.list}>
                <Box flex={10}>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint1'
                      ) as string
                    }
                  </CheckListItem>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint2'
                      ) as string
                    }
                  </CheckListItem>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint3'
                      ) as string
                    }
                  </CheckListItem>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint4'
                      ) as string
                    }
                  </CheckListItem>
                </Box>
                <Hidden smDown>
                  <Box
                    display="flex"
                    flex={1}
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <Divider orientation="vertical" />
                  </Box>
                </Hidden>
                <Box flex={10}>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint5'
                      ) as string
                    }
                  </CheckListItem>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint6'
                      ) as string
                    }
                  </CheckListItem>
                  <CheckListItem>
                    {
                      t(
                        'common:secureTechnologyCard1EncryptionPoint7'
                      ) as string
                    }
                  </CheckListItem>
                </Box>
              </ul>
            </HomePageSecureCard>
          </Grid>
          <Grid className={classes.cardContainer} item xs={12} md={6}>
            <HomePageSecureCard
              title={t('common:secureTechnologyCard2EncryptionTitle') as string}
              icon={
                <Box className={classes.iconWrapper}>
                  <SecureTechnologyRefreshIcon />
                </Box>
              }
            >
              <ul>
                <CheckListItem>
                  {t('common:secureTechnologyCard2EncryptionPoint1') as string}
                </CheckListItem>
                <CheckListItem>
                  {t('common:secureTechnologyCard2EncryptionPoint2') as string}
                </CheckListItem>
              </ul>
            </HomePageSecureCard>
          </Grid>
          <Grid className={classes.cardContainer} item xs={12} md={6}>
            <HomePageSecureCard
              title={t('common:secureTechnologyCard3EncryptionTitle') as string}
              icon={
                <Box className={classes.iconWrapper}>
                  <SecureTechnologyShieldIcon />
                </Box>
              }
            >
              <ul>
                <CheckListItem>
                  {t('common:secureTechnologyCard3EncryptionPoint1') as string}
                </CheckListItem>
                <CheckListItem>
                  {t('common:secureTechnologyCard3EncryptionPoint2') as string}
                </CheckListItem>
              </ul>
            </HomePageSecureCard>
          </Grid>
        </Grid>
      </PageGrid>
    </section>
  );
}

export default HomePageSecureTechnology;
