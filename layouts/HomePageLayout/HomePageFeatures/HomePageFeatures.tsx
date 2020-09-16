import React, { ReactElement } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import PageGrid from 'components/PageGrid';
import HomePageSectionSubtitle from '../HomePageSectionSubtitle';
import HomePageSectionTitle from '../HomePageSectionTitle';
import ProductFeatureGraphic from './ProductFeatureGraphic';
import ProductFeatureIcon from './ProductFeatureIcon';
import ProductFeatureShowCase from './ProductFeatureShowCase';
import ProductFeatureShowCaseContent from './ProductFeatureShowCaseContent';

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
}));

function HomePageFeatures(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <section id="product-features">
        <PageGrid>
          <HomePageSectionTitle>
            {t('common:productFeaturesTitle')}
          </HomePageSectionTitle>
          <HomePageSectionSubtitle>
            {t('common:productFeaturesSubtitle')}
          </HomePageSectionSubtitle>
          <Grid container direction="row" justify="center">
            <Grid className={classes.iconWrapper} item xs={6} sm={4} md={2}>
              <ProductFeatureIcon variant="document">
                {t('common:productFeaturesDms')}
              </ProductFeatureIcon>
            </Grid>
            <Grid className={classes.iconWrapper} item xs={6} sm={4} md={2}>
              <ProductFeatureIcon variant="calendar">
                {t('common:productFeaturesCalendar')}
              </ProductFeatureIcon>
            </Grid>
            <Grid className={classes.iconWrapper} item xs={6} sm={4} md={2}>
              <ProductFeatureIcon variant="chat">
                {t('common:productFeaturesChat')}
              </ProductFeatureIcon>
            </Grid>
            <Grid className={classes.iconWrapper} item xs={6} sm={4} md={2}>
              <ProductFeatureIcon variant="video">
                {t('common:productFeaturesConference')}
              </ProductFeatureIcon>
            </Grid>
            <Grid className={classes.iconWrapper} item xs={6} sm={4} md={2}>
              <ProductFeatureIcon variant="search">
                {t('common:productFeaturesNlpSearch')}
              </ProductFeatureIcon>
            </Grid>
            <Grid className={classes.iconWrapper} item xs={6} sm={4} md={2}>
              <ProductFeatureIcon variant="cloudLock">
                {t('common:productFeaturesRemoteOffice')}
              </ProductFeatureIcon>
            </Grid>
          </Grid>
        </PageGrid>
      </section>
      <PageGrid disableMargin>
        <Divider />
      </PageGrid>
      <PageGrid component="section">
        <ProductFeatureShowCase
          graphicPosition="left"
          left={<ProductFeatureGraphic variant="document" />}
          right={
            <ProductFeatureShowCaseContent
              title={t('common:productFeaturesShowCaseDmsTitle') as string}
              subtitle={t('common:productFeaturesShowCaseDmsContent') as string}
            />
          }
        />
        <ProductFeatureShowCase
          graphicPosition="right"
          left={
            <ProductFeatureShowCaseContent
              title={t('common:productFeaturesShowCaseCalendarTitle') as string}
              subtitle={
                t('common:productFeaturesShowCaseCalendarContent') as string
              }
            />
          }
          right={<ProductFeatureGraphic variant="project" />}
        />
        <ProductFeatureShowCase
          graphicPosition="left"
          left={<ProductFeatureGraphic variant="crossFunctional" />}
          right={
            <ProductFeatureShowCaseContent
              title={t('common:productFeaturesShowCaseChatTitle') as string}
              subtitle={
                t('common:productFeaturesShowCaseChatContent') as string
              }
            />
          }
        />
        <ProductFeatureShowCase
          graphicPosition="right"
          left={
            <ProductFeatureShowCaseContent
              title={
                t('common:productFeaturesShowCaseConferenceTitle') as string
              }
              subtitle={
                t('common:productFeaturesShowCaseConferenceContent') as string
              }
            />
          }
          right={<ProductFeatureGraphic variant="communication" />}
        />
        <ProductFeatureShowCase
          graphicPosition="left"
          left={<ProductFeatureGraphic variant="search" />}
          right={
            <ProductFeatureShowCaseContent
              title={
                t('common:productFeaturesShowCaseNlpSearchTitle') as string
              }
              subtitle={
                t('common:productFeaturesShowCaseNlpSearchContent') as string
              }
            />
          }
        />
        <ProductFeatureShowCase
          graphicPosition="right"
          left={
            <ProductFeatureShowCaseContent
              title={
                t('common:productFeaturesShowCaseRemoteOfficeTitle') as string
              }
              subtitle={
                t('common:productFeaturesShowCaseRemoteOfficeContent') as string
              }
            />
          }
          right={<ProductFeatureGraphic variant="devices" />}
        />
      </PageGrid>
    </>
  );
}

export default HomePageFeatures;
