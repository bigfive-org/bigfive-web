import { HeartBoldIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Feedback from './feedback';
import { Link } from '@/navigation';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className='text-center justify-center mt-10'>
        <h1 className={title()}>About</h1>
      </div>
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
        <p>
          Welcome to bigfive-test.com, your premier destination for exploring
          personality traits using the scientifically acclaimed Big Five model.
          Our free, open-source test offers detailed insights into the five key
          dimensions of personality: Openness, Conscientiousness, Extraversion,
          Agreeableness, and Neuroticism.
        </p>
        <br />
        <p>
          Each dimension is carefully analyzed to provide a comprehensive view
          of your traits and how they influence your behavior and interactions.
        </p>
        <p>
          Developed with precision and accessibility in mind, our test helps you
          understand yourself better and foster personal growth. Embrace the
          journey of self-discovery with bigfive-test.com, where psychological
          insights meet user-friendly technology.
        </p>
        <br />
        <p>
          If you have questions please read through the{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>{' '}
          first. If you can&apos;t find an answer there, feel free to contact us
          at bigfive-test@rubynor.com.
        </p>
      </div>
      <section>
        <div className='text-center justify-center mt-20'>
          <h2 className={title()}>We love feedback!&nbsp;</h2>
          <div className='flex md:inline-flex flex-col md:flex-row items-center'>
            <HeartBoldIcon
              className='text-pink-500 animate-heartbeat'
              size={50}
              style={{
                animationDuration: '2.5s'
              }}
            />
          </div>
          <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
            Send us feedback about how our features can be improved or specific
            issues.
          </div>
        </div>
        <Feedback />
      </section>
    </>
  );
}
