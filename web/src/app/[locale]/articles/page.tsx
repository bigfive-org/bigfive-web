import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from '@/components/post-card';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ArticleHeader } from '@/components/ads/ads';
import { ariclesByPopularity } from '@/components/view-counter';
import SortButtons from './sort-buttons';
import { supportEmail } from '@/config/site';
import { getTranslationLocale } from '@/lib/helpers';

interface ArticlesProps {
  params: { locale: string };
  searchParams: {
    sort: string;
  };
}

export default async function ArticlesPage({
  params: { locale },
  searchParams: { sort }
}: ArticlesProps) {
  unstable_setRequestLocale(locale);

  const translationLocale = getTranslationLocale(locale);

  const localizedPosts = allPosts.filter(
    (post) => post.locale === translationLocale
  );

  let posts;
  if (sort === 'popularity') {
    posts = await ariclesByPopularity(localizedPosts);
  } else {
    posts = localizedPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  }

  return (
    <div className='w-full lg:px-16 mt-12'>
      <ArticleHeader />
      <div className='text-center mt-8'>
        <h1 className='mb-2 font-bold text-4xl'>Personality articles</h1>
        <h5 className='text-default-500 text-lg'>
          All the latest and greatest news and articles on Personality.
          <br />
          Interested in writing for us? Get in touch{' '}
          <a href={`mailto:${supportEmail}`} className='underline'>
            here
          </a>
          .
        </h5>
      </div>
      <SortButtons sortBy={sort} />

      <div className='mt-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
