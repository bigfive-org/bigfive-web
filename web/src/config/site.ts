import { getTranslations } from 'next-intl/server';

export type SiteConfig = typeof siteConfig;

export const basePath = 'https://bigfive-test.com';

export const supportEmail = 'bigfive-test@rubynor.com';

export type Language = {
  code: string;
  name: string;
  countryCode?: string;
  map?: string[];
};

export const languages: Language[] = [
  { code: 'en', name: 'English', countryCode: 'us', map: ['en-GB'] },
  { code: 'ar', name: 'Arabic', map: ['ar-sa'] },
  { code: 'ur', name: 'Urdu' },
  { code: 'hy', name: 'Armenian', countryCode: 'am' },
  { code: 'sq', name: 'Albanian', countryCode: 'al' },
  { code: 'de', name: 'Deutsch', countryCode: 'de', map: ['de-DE'] },
  {
    code: 'es',
    name: 'Spanish',
    countryCode: 'es',
    map: ['es-ES', 'es-US', 'es-MX']
  },
  { code: 'et', name: 'Estonian', countryCode: 'ee' },
  { code: 'ca', name: 'Catalan', countryCode: 'es-ct' },
  { code: 'hr', name: 'Croatian', countryCode: 'hr' },
  { code: 'fr', name: 'French', countryCode: 'fr', map: ['fr-FR', 'fr-CA'] },
  { code: 'id', name: 'Indonesian', countryCode: 'id' },
  { code: 'hu', name: 'Hungarian', countryCode: 'hu' },
  { code: 'it', name: 'Italian', countryCode: 'it', map: ['it-IT'] },
  { code: 'no', name: 'Norwegian', countryCode: 'no', map: ['nb', 'nn'] },
  { code: 'pt-br', name: 'Brazilian Portuguese', countryCode: 'br' },
  { code: 'pt', name: 'Portuguese', countryCode: 'pt' },
  { code: 'he', name: 'Hebrew', countryCode: 'il' },
  { code: 'sv', name: 'Swedish', countryCode: 'se' },
  { code: 'bg', name: 'Bulgarian', countryCode: 'bg' },
  { code: 'uk', name: 'Ukrainian', countryCode: 'ua' },
  { code: 'nl', name: 'Dutch', countryCode: 'nl' },
  { code: 'fa', name: 'Persian', countryCode: 'ir' },
  { code: 'da', name: 'Danish', countryCode: 'dk' },
  { code: 'ro', name: 'Romanian', countryCode: 'ro' },
  { code: 'ko', name: 'Korean', countryCode: 'kr' },
  { code: 'fi', name: 'Finnish', countryCode: 'fi' },
  { code: 'hi', name: 'Hindi', countryCode: 'in' },
  { code: 'tr', name: 'Turkish', countryCode: 'tr' },
  { code: 'is', name: 'Icelandic', countryCode: 'is' },
  { code: 'ja', name: 'Japanese', countryCode: 'jp' },
  { code: 'pl', name: 'Polish', countryCode: 'pl' },
  { code: 'sr', name: 'Serbian', countryCode: 'rs' },
  { code: 'ss', name: 'Siswati', countryCode: 'sz' },
  { code: 'sl', name: 'Slovenian', countryCode: 'si' },
  { code: 'ru', name: 'Russian', countryCode: 'ru' },
  { code: 'th', name: 'Thai', countryCode: 'th' },
  { code: 'cs', name: 'Czech', countryCode: 'cz' },
  { code: 'vi', name: 'Vietnamese', countryCode: 'vn' },
  {
    code: 'zh-cn',
    name: 'Chinese (Simplified)',
    countryCode: 'cn'
  },
  {
    code: 'zh-hant',
    name: 'Chinese (Traditional)',
    countryCode: 'cn'
  },
  { code: 'bn', name: 'Bengali', countryCode: 'bd' }
].sort((a, b) => a.name.localeCompare(b.name));

export const locales = languages.map((lang) => lang.code) as string[];

export const siteConfig = {
  name: 'Big Five Personality Test',
  creator: '@maccyber',
  description:
    'Learn to know yourself better with a free, open-source personality test.',
  navItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'result',
      href: '/result'
    },
    {
      label: 'compare',
      href: '/compare'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'about',
      href: '/about'
    }
  ],
  navMenuItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'see_results',
      href: '/result'
    },
    {
      label: 'compare_with',
      href: '/compare'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'privacy',
      href: '/privacy'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'faq',
      href: '/faq'
    }
  ],
  footerLinks: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'privacy',
      href: '/privacy'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'faq',
      href: '/faq'
    }
  ],
  links: {
    github: 'https://github.com/rubynor/bigfive-web',
    twitter: 'https://twitter.com/BigFiveOrg',
    linkedIn: 'https://www.linkedin.com/company/bigfive-personality/',
    facebook: 'https://www.facebook.com/bigfivepersonality/',
    mastadon: 'https://mastodon.social/@bigfive'
  }
};

export const getNavItems = async ({
  locale,
  linkType
}: {
  locale: string;
  linkType: 'navItems' | 'navMenuItems' | 'footerLinks';
}) => {
  const t = await getTranslations({ locale, namespace: 'toolbar' });
  return siteConfig[linkType].map((link) => ({
    label: t(`${link.label}`),
    href: link.href
  }));
};
