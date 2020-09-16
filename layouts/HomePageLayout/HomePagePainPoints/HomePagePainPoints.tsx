import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import PageGrid from 'components/PageGrid';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePagePainPointCard from './HomePagePainPointCard';

const useStyles = makeStyles((theme) => ({
  container: { backgroundColor: '#222E54', color: theme.palette.common.white },
}));

function HomePagePainPoints(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.container}>
      <PageGrid>
        <HomePageSectionTitle color="inherit">
          {t('common:painPointTitle')}
        </HomePageSectionTitle>
        <Grid container>
          <HomePagePainPointCard
            title={
              t('common:painPointCardIneffectiveCommunicationTitle') as string
            }
            subtitle={
              t(
                'common:painPointCardIneffectiveCommunicationSubtitle'
              ) as string
            }
            points={
              t(
                'common:painPointCardIneffectiveCommunicationPoints',
                {},
                { returnObjects: true }
              ) as string[]
            }
          />
          <HomePagePainPointCard
            title={
              t('common:painPointCardLowCollaborationEfficiencyTitle') as string
            }
            subtitle={
              t(
                'common:painPointCardLowCollaborationEfficiencySubtitle'
              ) as string
            }
            points={
              t(
                'common:painPointCardLowCollaborationEfficiencyPoints',
                {},
                { returnObjects: true }
              ) as string[]
            }
          />
          <HomePagePainPointCard
            title={
              t('common:painPointCardDifficultySharingDataTitle') as string
            }
            subtitle={
              t('common:painPointCardDifficultySharingDataSubtitle') as string
            }
            points={
              t(
                'common:painPointCardDifficultySharingDataPoints',
                {},
                { returnObjects: true }
              ) as string[]
            }
          />
          <HomePagePainPointCard
            title={t('common:painPointCardCrmTroublesTitle') as string}
            subtitle={t('common:painPointCardCrmTroublesSubtitle') as string}
            points={
              t(
                'common:painPointCardCrmTroublesPoints',
                {},
                { returnObjects: true }
              ) as string[]
            }
          />
          <HomePagePainPointCard
            title={t('common:painPointCardAuditTroublesTitle') as string}
            subtitle={t('common:painPointCardAuditTroublesSubtitle') as string}
            points={
              t(
                'common:painPointCardAuditTroublesPoints',
                {},
                { returnObjects: true }
              ) as string[]
            }
          />
        </Grid>
      </PageGrid>
    </section>
  );
}

export default HomePagePainPoints;
