import { getItems } from '@bigfive-org/questions';
import { Survey } from './survey';
import { useTranslations } from 'next-intl';
import { saveTest } from '@/actions';
import { unstable_setRequestLocale } from 'next-intl/server';
import { TestHeader, TestHrec1 } from '@/components/ads/ads';

interface Props {
  params: { locale: string };
}

export default function TestPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const questions = getItems(locale);
  const t = useTranslations('test');
  return (
    <>
      <div className='my-4'>
        <TestHeader />
      </div>
      <Survey
        questions={questions}
        nextText={t('next')}
        prevText={t('back')}
        resultsText={t('seeResults')}
        saveTest={saveTest}
        locale={locale}
      />
      <div className='my-4'>
        <TestHrec1 />
      </div>
    </>
  );
}
