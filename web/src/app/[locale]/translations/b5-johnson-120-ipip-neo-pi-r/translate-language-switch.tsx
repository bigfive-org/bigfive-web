'use client';

import { Select, SelectItem } from '@nextui-org/select';
import { ChangeEvent } from 'react';
import { Language } from '@bigfive-org/questions';
import { useRouter } from '@/navigation';

interface TestLanguageSwitchProps {
  availableLanguages: Language[];
}

export const TranslateLanguageSwitch = ({
  availableLanguages
}: TestLanguageSwitchProps) => {
  const router = useRouter();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedLanguage = event.target.value;
    router.push(
      `/translations/b5-johnson-120-ipip-neo-pi-r/${selectedLanguage}`
    );
    router.refresh();
  }

  return (
    <div className='w-30'>
      <Select
        onChange={onSelectChange}
        aria-label='Choose language to translate from'
        size='sm'
        label='Choose language to translate from'
        items={availableLanguages}
      >
        {(language) => (
          <SelectItem key={language.id} value={language.id}>
            {language.text}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};
