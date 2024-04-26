import { title } from '@/components/primitives';
import { useTranslations } from 'next-intl';
import { GetResultPage } from './get-result';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function ResultPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getResult');

  return (
    <div className='h-[calc(60vh)]'>
      <h1 className={title()}>{t('result')}</h1>
      <div className='mt-10'>{t('explanation')}</div>
      <GetResultPage
        viewPreviousText={t('viewPrevious')}
        getResultsText={t('getResult')}
      />
    </div>
  );
}
