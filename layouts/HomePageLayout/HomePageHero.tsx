import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import FreeTrialButton from 'components/FreeTrialButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

function HomePageHero(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Open responsive dialog
            </Button>
          </Box>
          <Dialog fullScreen={fullScreen} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Modal title
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </section>
  );
}

export default HomePageHero;
