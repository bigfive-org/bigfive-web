import { title } from '@/components/primitives';
import { useTranslations } from 'next-intl';
import { GetResultPage } from './get-result';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ResultHeader } from '@/components/ads/ads';
import { AdsContainer } from '@/components/ads/ads-container';

interface Props {
  params: { locale: string };
}

export default function ResultPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getResult');

  return (
    <div className='min-h-screen'>
      <div className='my-4'>
        <ResultHeader />
      </div>
      <h1 className={title()}>{t('result')}</h1>
      <div className='mt-10'>{t('explanation')}</div>
      <GetResultPage
        viewPreviousText={t('viewPrevious')}
        getResultsText={t('getResult')}
      />
      <AdsContainer />
    </div>
  );
}
