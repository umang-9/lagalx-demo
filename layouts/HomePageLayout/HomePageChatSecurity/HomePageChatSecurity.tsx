import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FreeTrialButton from 'components/FreeTrialButton';
import useTranslation from 'next-translate/useTranslation';
import PageGrid from 'components/PageGrid';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageChatSecurityCard from './HomePageChatSecurityCard';

const useStyles = makeStyles((theme) => ({
  section: { backgroundColor: theme.palette.common.white },
}));

function HomePageChatSecurity(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <PageGrid>
        <HomePageSectionTitle>
          {t('common:chatSecurityTitle')}
        </HomePageSectionTitle>
        <Grid container>
          <HomePageChatSecurityCard
            content={t('common:chatSecurityCardContent1') as string}
            imgSrc="/images/home-chat-security-lock.svg"
            subtitle={t('common:chatSecurityCardSubtitle1') as string}
            title={t('common:chatSecurityCardTitle1') as string}
            xs={12}
            md={4}
          />
          <HomePageChatSecurityCard
            content={t('common:chatSecurityCardContent2') as string}
            imgSrc="/images/home-chat-security-chat.svg"
            subtitle={t('common:chatSecurityCardSubtitle2') as string}
            title={t('common:chatSecurityCardTitle2') as string}
            xs={12}
            md={4}
          />
          <HomePageChatSecurityCard
            content={t('common:chatSecurityCardContent3') as string}
            imgSrc="/images/home-chat-security-portrait.svg"
            subtitle={t('common:chatSecurityCardSubtitle3') as string}
            title={t('common:chatSecurityCardTitle3') as string}
            xs={12}
            md={4}
          />
        </Grid>
        <Box mt={4} display="flex" flexDirection="row" justifyContent="center">
          <FreeTrialButton variant="contained" />
        </Box>
      </PageGrid>
    </section>
  );
}

export default HomePageChatSecurity;
