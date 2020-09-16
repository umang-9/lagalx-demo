import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FreeTrialButton from 'components/FreeTrialButton';
import PageGrid from 'components/PageGrid';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageTestimonialCard from './HomePageTestimonialCard';

const useStyles = makeStyles({
  section: { backgroundColor: '#F8F9FA' },
});

function HomePageTestimonials(): ReactElement {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <PageGrid>
        <HomePageSectionTitle>
          云办为各专业机构提供全方位的解决方案
        </HomePageSectionTitle>
        <Grid container>
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-pc-woo.png"
            industry="法律行业"
            testimonial={{
              author: '郑慕智',
              position: '胡百全律师事务所顾问律师',
              quote:
                '云办满足了专业律师对安全和效率的双重诉求，为我们的业务及行政管理提供了有效助力。',
            }}
            md={6}
            sm={12}
            xs={12}
          />
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-commerce-finance-law-offices.png"
            industry="法律行业"
            testimonial={{
              author: '周俊轩',
              position: '通商律师事务所合伙人',
              quote:
                '云办的高效率设计，将沟通与协作融为一体，有效提升了信息传递速率，使互动更轻松，协作更高效。云办已经成为团队日常工作的标配‘武装’之一。',
            }}
            md={6}
            sm={12}
            xs={12}
          />
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-zhonglun-wd-law-firm.png"
            industry="法律行业"
            testimonial={{
              author: '林威',
              position: '中伦文德律师事务所高级合伙人',
              quote:
                '云办能深度整合工作各环节的信息流，利用AI管理海量文档，加速知识沉淀，从而帮助公司构建高效协作的企业文化。',
            }}
            md={6}
            sm={12}
            xs={12}
          />
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-jacobson-pharma-corporation.png"
            industry="医药行业"
            testimonial={{
              author: '岑广业',
              position: '雅各臣科研制药董事长兼CEO',
              quote:
                '云办满足了专业律师对安全和效率的双重诉求，为我们的业务及行政管理提供了有效助力。',
            }}
            md={6}
            sm={12}
            xs={12}
          />
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-somerley.png"
            industry="法律行业"
            md={4}
            sm={6}
            xs={12}
          />
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-united-world-college-li-po-chun.png"
            industry="教育行业"
            md={4}
            sm={6}
            xs={12}
          />
          <HomePageTestimonialCard
            imgSrc="/images/client-logo-oneconnect.png"
            industry="金融行业"
            md={4}
            sm={6}
            xs={12}
          />
        </Grid>
        <Box mt={4} display="flex" flexDirection="row" justifyContent="center">
          <FreeTrialButton variant="contained" />
        </Box>
      </PageGrid>
    </section>
  );
}

export default HomePageTestimonials;
