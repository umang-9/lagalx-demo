import React, { ReactElement, useContext } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import ContactFormDialogContext from 'context/ContactFormDialogContext';
import PageGrid from 'components/PageGrid';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageContactCard from './HomePageContactCard';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  },
}));

function HomePageContact(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();
  const openContactForm = useContext(ContactFormDialogContext);

  return (
    <section id="contact">
      <PageGrid>
        <HomePageSectionTitle>
          {t('common:contactUsTitle')}
        </HomePageSectionTitle>
        <Grid container justify="center">
          <Grid className={classes.cardContainer} item xs={12} sm={6} md={4}>
            <HomePageContactCard
              content={t('common:contactUsCardDemoContent') as string}
              ctaText={t('common:contactUsCardDemoCta') as string}
              logoSrc="/images/home-contact-calendar.svg"
              onClick={openContactForm}
              title={t('common:contactUsCardDemoTitle') as string}
            />
          </Grid>
          <Grid className={classes.cardContainer} item xs={12} sm={6} md={4}>
            <HomePageContactCard
              content={t('common:contactUsCardPhoneContent') as string}
              ctaText={t('common:contactUsCardPhoneCta') as string}
              href="tel:+85228336981"
              logoSrc="/images/home-contact-phone.svg"
              title={t('common:contactUsCardPhoneTitle') as string}
            />
          </Grid>
          <Grid className={classes.cardContainer} item xs={12} sm={6} md={4}>
            <HomePageContactCard
              content={t('common:contactUsCardEmailContent') as string}
              ctaText={t('common:contactUsCardEmailCta') as string}
              href="mailto:sales@legalx.ai"
              logoSrc="/images/home-contact-mail.svg"
              title={t('common:contactUsCardEmailTitle') as string}
            />
          </Grid>
        </Grid>
      </PageGrid>
    </section>
  );
}

export default HomePageContact;
