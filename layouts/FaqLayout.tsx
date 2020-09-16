import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import PageGrid from 'components/PageGrid';
import PageSectionTitle from 'components/PageSectionTitle';

const useStyles = makeStyles((theme) => ({
  list: {
    listStyleType: 'disc',
    paddingLeft: theme.spacing(5),
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
}));

function FaqLayout(): ReactElement {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <section>
      <PageGrid>
        <PageSectionTitle>{t('common:faq')}</PageSectionTitle>
        <Typography component="h5" gutterBottom variant="h5">
          {t('common:faqBrowserNotificationsTitle')}
        </Typography>
        <Typography component="h6" gutterBottom variant="h6">
          Google Chrome
        </Typography>
        <ul className={classes.list}>
          {(t(
            'common:faqGoogleChromePushNotificationsSteps',
            {},
            { returnObjects: true }
          ) as string[]).map((m) => (
            <li key={m} className={classes.listItem}>
              {m}
            </li>
          ))}
        </ul>
        {(t(
          'common:faqGoogleChromePushNotificationsStepsComments',
          {},
          { returnObjects: true }
        ) as string[]).map((m) => (
          <p key={m}>{m}</p>
        ))}
        <Typography component="h6" gutterBottom variant="h6">
          Firefox
        </Typography>
        <ul className={classes.list}>
          {(t(
            'common:faqFirefoxPushNotificationsSteps',
            {},
            { returnObjects: true }
          ) as string[]).map((m) => (
            <li key={m} className={classes.listItem}>
              {m}
            </li>
          ))}
        </ul>
        <Typography component="h6" gutterBottom variant="h6">
          Edge
        </Typography>
        <ul className={classes.list}>
          {(t(
            'common:faqEdgePushNotificationsSteps',
            {},
            { returnObjects: true }
          ) as string[]).map((m) => (
            <li key={m} className={classes.listItem}>
              {m}
            </li>
          ))}
        </ul>
        {(t(
          'common:faqEdgePushNotificationsStepsComments',
          {},
          { returnObjects: true }
        ) as string[]).map((m) => (
          <p key={m}>{m}</p>
        ))}
        <Typography component="h6" gutterBottom variant="h6">
          Safari
        </Typography>
        {(t(
          'common:faqSafariPushNotificationsStepsComments',
          {},
          { returnObjects: true }
        ) as string[]).map((m) => (
          <p key={m}>{m}</p>
        ))}
      </PageGrid>
    </section>
  );
}

export default FaqLayout;
