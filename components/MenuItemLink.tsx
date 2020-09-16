import React, { ReactNode, forwardRef, MutableRefObject } from 'react';
import Link from 'next-translate/Link';
import { MenuItem } from '@material-ui/core';
import { AppLocale } from 'locales';

interface MenuItemLinkProps {
  children: ReactNode;
  href: string;
  lang: AppLocale;
}

const MenuItemLink = forwardRef(
  (
    { children, href, lang, ...rest }: MenuItemLinkProps,
    ref: MutableRefObject<HTMLAnchorElement>
  ) => {
    return (
      <Link lang={lang} href={href} passHref>
        <MenuItem component="a" ref={ref} {...rest}>
          {children}
        </MenuItem>
      </Link>
    );
  }
);

MenuItemLink.displayName = 'MenuItemLink';

export default MenuItemLink;
