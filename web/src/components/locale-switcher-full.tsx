'use client';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { languages, type Language } from '../config/site';
import { Select, SelectItem } from '@nextui-org/select';
import { Avatar } from '@nextui-org/avatar';
import { useRouter, usePathname } from '../navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale });
  }
  const usedLocale = languages.find((lang) => lang.code === locale) || {
    name: 'English',
    code: 'en',
    countryCode: 'us'
  };
  const countryAvatar = (lang: Language) =>
    lang.countryCode ? (
      <Avatar
        alt={lang.name}
        className='w-6 h-6'
        src={`/flags/${lang.countryCode}.svg`}
      />
    ) : (
      <Avatar
        alt={lang.name}
        className='w-6 h-6'
        name={lang.code.toUpperCase()}
      />
    );
  return (
    <div className='w-40'>
      <Select
        name='localeSelect'
        selectedKeys={[locale]}
        onChange={onSelectChange}
        aria-label='Select language'
        startContent={countryAvatar(usedLocale)}
      >
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            textValue={lang.name}
            startContent={countryAvatar(lang)}
          >
            {lang.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
