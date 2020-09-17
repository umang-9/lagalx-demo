import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import FreeTrialButton from 'components/FreeTrialButton';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';

function styles(theme) {
  return ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
  });
}

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  section: {
    alignItems: 'center',
    // backgroundImage:
    //   'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/images/hero.jpg)',
    // backgroundPosition: 'center center',
    // backgroundSize: 'cover',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: theme.spacing(6),
    whiteSpace: 'pre-wrap',
  },
  freeTrialCta: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoWrap: {
    width: '100%',
    height: '100%',
  },
}));

function HomePageHero(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={classes.section}>
      <Grid className="videoWrap">
        <video autoPlay loop muted className="video" >
            <source src='/banner-video.mp4' type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </Grid>
      <Grid container justify="center" className="bannerCaption">
        <Grid item xs={11} md={9}>
          <Typography
            align="center"
            className={classes.title}
            color="inherit"
            component="h1"
            variant="h2"
          >
            {t('common:heroTitle')}
          </Typography>
          <Typography
            align="center"
            component="h2"
            variant="h5"
            color="inherit"
          >
            {t('common:heroSubtitle')}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt={4}
          >
            <FreeTrialButton className={classes.freeTrialCta} />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt={4}
          >
            <Button onClick={handleClickOpen} className="playButton">
              <Icon>play_circle_outline</Icon>
            </Button>
          </Box>
          <Dialog className="videoPopup" fullScreen onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <IconButton aria-label="close" className="closeButton" onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <video autoPlay className="video" controls>
                  <source src='/banner-video.mp4' type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePageHero;
