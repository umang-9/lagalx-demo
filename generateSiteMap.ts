import fs from 'fs';
import util from 'util';
import path from 'path';
import xmlFormatter from 'xml-formatter';
import { SitemapStream, streamToPromise } from 'sitemap';
import { parseISO, isValid } from 'date-fns';
import {
  EnglishLocale,
  SimplifiedChineseLocale,
  TraditionalChineseLocale,
} from './locales';

const pages = ['/', '/terms', '/privacy'];
const localeCodes = [
  EnglishLocale,
  SimplifiedChineseLocale,
  TraditionalChineseLocale,
];

function parseCreatedAt(date: string): Date {
  try {
    const parsed = parseISO(date);

    if (isValid(parsed)) {
      return parsed;
    }

    return null;
  } catch (error) {
    return null;
  }
}

function getLastChar(str: string): string {
  return str.substr(str.length - 1);
}

async function generateSiteMap(): Promise<void> {
  const isStaging = process.env.BUILD_ENVIRONMENT === 'staging';

  if (!isStaging) {
    const stream = new SitemapStream({ hostname: 'https://yunban.co' });
    const writeFile = util.promisify(fs.writeFile);
    const pagePaths = pages.reduce((previous, pagePath) => {
      localeCodes.forEach((locale) => {
        const lastChar = getLastChar(pagePath);

        if (locale === EnglishLocale) {
          previous.push({ url: pagePath });
        } else {
          previous.push({
            url: lastChar === '/' ? `/${locale}` : `${pagePath}/${locale}`,
            createdAt: parseCreatedAt('2020-05-01'),
            priority: 1,
          });
        }
      });

      return previous;
    }, []);

    pagePaths.forEach((page) => {
      stream.write({
        changefreq: 'monthly',
        lastmod: page.createdAt,
        priority: page.priority,
        url: page.url,
      });
    });

    stream.end();

    const sm = await streamToPromise(stream);
    await writeFile(
      path.join('./public/sitemap.xml'),
      xmlFormatter(sm.toString())
    );
  }
}

generateSiteMap();
