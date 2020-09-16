import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Menu } from '@material-ui/core';
import { ExpandMore, Language } from '@material-ui/icons';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import MenuItemLink from 'components/MenuItemLink';
import {
  EnglishLocale,
  SimplifiedChineseLocale,
  TraditionalChineseLocale,
} from 'locales';

interface LanguageSelectorMenuButtonProps {
  className?: string;
  showStartIcon: boolean;
  size?: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined';
}

function LanguageSelectorMenuButton(
  props: LanguageSelectorMenuButtonProps
): ReactElement {
  const [anchorEl, setAnchorEl] = useState(null);
  const { lang } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    // Dismiss menu whenever language changes
    setAnchorEl(null);
  }, [lang]);

  return (
    <>
      <Button
        className={props.className}
        color="inherit"
        endIcon={<ExpandMore />}
        onClick={(e): void => setAnchorEl(e.currentTarget)}
        size={props.size}
        startIcon={props.showStartIcon && <Language />}
        variant={props.variant}
      >
        {lang === EnglishLocale && 'English'}
        {lang === SimplifiedChineseLocale && '简体中文'}
        {lang === TraditionalChineseLocale && '繁體中文'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        onClose={(): void => setAnchorEl(null)}
        open={!!anchorEl}
      >
        {lang !== EnglishLocale && (
          <MenuItemLink lang={EnglishLocale} href={router.pathname}>
            English
          </MenuItemLink>
        )}
        {lang !== SimplifiedChineseLocale && (
          <MenuItemLink lang={SimplifiedChineseLocale} href={router.pathname}>
            简体中文
          </MenuItemLink>
        )}
        {lang !== TraditionalChineseLocale && (
          <MenuItemLink lang={TraditionalChineseLocale} href={router.pathname}>
            繁體中文
          </MenuItemLink>
        )}
      </Menu>
    </>
  );
}

LanguageSelectorMenuButton.defaultProps = {
  showStartIcon: true,
};

export default LanguageSelectorMenuButton;
