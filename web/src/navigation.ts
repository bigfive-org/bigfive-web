import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './config/site';

export const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
