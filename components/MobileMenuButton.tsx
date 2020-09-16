import React, { ReactElement, ReactNode, useState } from 'react';
import {
  Box,
  Divider,
  Fade,
  IconButton,
  List,
  ListItem,
  Paper,
  Popper,
} from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next-translate/Link';
import YunbanLogo from 'components/YunbanLogo';

const useStyles = makeStyles({
  menuButton: { color: '#222E54' },
  ctaContainer: { backgroundColor: '#F8F9FA' },
  paper: { width: '90vw' },
  anchor: {
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '8px 16px',
    textDecoration: 'none',
  },
});

function MobileMenuButton(): ReactElement {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <IconButton
        className={classes.menuButton}
        onClick={(e): void => setAnchorEl(e.currentTarget)}
      >
        <Menu />
      </IconButton>
      <Popper
        anchorEl={anchorEl}
        disablePortal
        open={!!anchorEl}
        placement="top-end"
        transition
      >
        {({ TransitionProps }): ReactNode => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper} elevation={4}>
              <Box
                alignItems="center"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p={2}
              >
                <YunbanLogo variant="primary" />
                <IconButton onClick={(): void => setAnchorEl(null)}>
                  <Close />
                </IconButton>
              </Box>
              <Divider />
              <List>
                <Link href="/#product-features" passHref shallow>
                  <ListItem
                    button
                    component="a"
                    onClick={(): void => setAnchorEl(null)}
                  >
                    {t('common:productOverview')}
                  </ListItem>
                </Link>
                <Link href="/#security" passHref shallow>
                  <ListItem
                    button
                    component="a"
                    onClick={(): void => setAnchorEl(null)}
                  >
                    {t('common:secureTechnology')}
                  </ListItem>
                </Link>
                <Link href="/#about" passHref shallow>
                  <ListItem
                    button
                    component="a"
                    onClick={(): void => setAnchorEl(null)}
                  >
                    {t('common:aboutYunban')}
                  </ListItem>
                </Link>
                <Link href="/#contact" passHref shallow>
                  <ListItem
                    button
                    component="a"
                    onClick={(): void => setAnchorEl(null)}
                  >
                    {t('common:contactUs')}
                  </ListItem>
                </Link>
                <a
                    className={classes.anchor}
                    href="https://app.legalx.ai/login"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t('common:login')}
                  </a>
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default MobileMenuButton;
