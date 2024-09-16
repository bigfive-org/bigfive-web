import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { ChevronRightLinearIcon, InfoIcon } from '@/components/icons';
import NextLink from 'next/link';
import { User } from '@nextui-org/user';
import { Chip, Divider, Link } from '@nextui-org/react';
import { Image } from '@nextui-org/image';
import { calculateReadingTime, getTranslationLocale } from '@/lib/helpers';
import { ViewCounter } from '@/components/view-counter';
import { Suspense } from 'react';
import { basePath } from '@/config/site';
import { Metadata } from 'next';
import { PostCard } from '@/components/post-card';
import { ShareArticle } from '@/components/share-article';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({
  params
}: {
  params: {
    slug: string;
    locale: string;
  };
}): Metadata => {
  const translationLocale = getTranslationLocale(params.locale);
  const localizedPosts = allPosts.filter(
    (post) => post.locale === translationLocale
  );

  const post = localizedPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name, url: post.author.link }],
    keywords: post.tags,
    openGraph: {
      type: 'website',
      url: post.url,
      title: post.title,
      description: post.description,
      images: {
        url: `${basePath}${post.image}`,
        alt: post.title
      }
    },
    twitter: {
      title: post.title,
      card: 'summary_large_image',
      description: post.description,
      site: basePath,
      creator: post.author.link,
      images: {
        url: `${basePath}${post.image}`,
        alt: post.title
      }
    }
  };
};

interface PostLayoutProps {
  params: {
    slug: string;
    locale: string
  };
}

const PostLayout = async ({ params }: PostLayoutProps) => {
  const translationLocale = getTranslationLocale(params.locale);
  const localizedPosts = allPosts.filter(
    (post) => post.locale === translationLocale
  );

  const currentPost = localizedPosts.find((post) => post.slug === params.slug);
  const posts = allPosts.filter((aPost) => aPost._id !== currentPost?._id);

  const currentTags = new Set(currentPost?.tags?.split(', '));
  const relevantPosts = posts
    .map((post) => {
      const postTags = post.tags.split(', ');
      let relevance = postTags.reduce(
        (acc, tag) => acc + (currentTags.has(tag) ? 1 : 0),
        0
      );
      return { ...post, relevance };
    })
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3);

  if (!currentPost) throw new Error(`Post not found for slug: ${params.slug}`);
  return (
    <article className='w-full flex flex-col justify-start items-center prose prose-neutral'>
      <div className='lg:max-w-screen-md m-auto'>
        <div className='flex'>
          <Link
            isBlock
            as={NextLink}
            className='text-default-700 hover:text-default-900 justify-start mb-2'
            color='foreground'
            href='/articles'
            size='md'
          >
            <ChevronRightLinearIcon
              className='rotate-180 inline-block mr-1'
              size={15}
            />
            Back to articles
          </Link>
          {getTranslationLocale(params.locale) !== 'en' && (
            <div className='text-default-700 ml-auto'>
              <InfoIcon size={20} className='inline-block mr-1' />
              AI generated translation
            </div>
          )}
        </div>
        {currentPost.image && (
          <div className='relative'>
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              height={600}
              width={1200}
              removeWrapper
              className='mb-4 w-full object-cover'
            />
            <div className='absolute inset-0 flex md:mt-8 mt-2 mx-2 md:mx-4'>
              <div className='bg-foreground px-4 py-2 z-10 h-fit rounded'>
                <h1 className='lg:text-5xl md:text-4xl text-xl font-bold z-20 text-background'>
                  {currentPost.title}
                </h1>
              </div>
            </div>
          </div>
        )}
        <div className='flex justify-between text-small mb-2 text-default-500 w-full'>
          <p>{calculateReadingTime(currentPost.body.raw)} min read</p>
          <Suspense>
            <ViewCounter postId={currentPost.slug} />
          </Suspense>
          <time dateTime={currentPost.date}>
            {format(parseISO(currentPost.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <Divider className='mt-8' />
        <div className='mt-4 flex w-full'>
          <div className='flex w-full'>
            <User
              name={currentPost.author.name}
              avatarProps={{ src: currentPost.author.avatar }}
              description={currentPost.author?.username}
            />
          </div>
          <ShareArticle slug={params.slug} />
        </div>
        <Divider className='mt-4' />
        <div
          className='[&>*]:mb-3 [&>*:last-child]:mb-0 articlePage mt-10'
          dangerouslySetInnerHTML={{ __html: currentPost.body.html }}
        />
        <div className='flex gap-2 flex-wrap mt-4'>
          {currentPost.tags.split(', ').map((tag: string, index: number) => (
            <Chip key={index} variant='flat'>
              {tag}
            </Chip>
          ))}
        </div>
      </div>
      <div className='mt-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {relevantPosts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </article>
  );
};

export default PostLayout;
