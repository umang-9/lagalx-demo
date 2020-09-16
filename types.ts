export interface MetaLink {
  href: string;
  hrefLang?: string;
  rel: 'canonical' | 'alternate';
}

export interface PageMeta {
  canonicalLink: MetaLink;
  alternateLink: MetaLink[];
}
