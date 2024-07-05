import { Card, CardFooter, CardBody } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Image } from '@nextui-org/image';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';
import { Link } from '@/navigation';
import { calculateReadingTime } from '@/lib/helpers';
import { Tooltip } from '@nextui-org/react';

export function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <Card
        isBlurred
        className='p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
        isPressable={!!post.url}
      >
        <CardBody className='pt-0 px-2 pb-1'>
          <Image
            className='mb-4 object-cover'
            src={post.image}
            alt={post.description}
            height={400}
            width={400}
          />
          <Tooltip content={post.author?.name} placement='top'>
            <div className='absolute right-8 md:right-4 mt-2 z-10'>
              <Avatar
                src={post.author?.avatar}
                isBordered
              />
            </div>
          </Tooltip>
          <h3 className='z-10 mt-3 text-3xl font-bold'>{post.title}</h3>
          <p className='font-normal w-full text-default-600 mt-3'>
            {post.description}
          </p>
        </CardBody>
        <CardFooter className='flex justify-between items-center'>
          <div className='flex text-small text-default-500 gap-x-5'>
            <time
              className='block'
              dateTime={post.date}
              suppressHydrationWarning
            >
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </div>
          <p className='text-small text-default-500'>{calculateReadingTime(post.body.raw)} min read</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
