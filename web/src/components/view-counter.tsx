import { kv } from '@vercel/kv';
import { Post } from 'contentlayer/generated';
import { unstable_noStore as noStore } from 'next/cache';

interface ViewCounterProps {
  postId: string;
}

export async function ViewCounter({ postId }: ViewCounterProps) {
  'use server';
  noStore();
  const views = await kv.incr(postId.replace('.md', ''));

  return <p>{Intl.NumberFormat('en-us').format(views)} views</p>;
}

type PostWithViews = Post & { views: number };

export async function ariclesByPopularity(posts: Post[]): Promise<Post[]> {
  'use server';
  noStore();
  const postViews: PostWithViews[] = await Promise.all(
    posts.map(async (post) => {
      const views = Number(await kv.get(post._id.replace('.md', '')));
      return { ...post, views };
    })
  );

  return postViews.sort((a, b) => b.views - a.views);
}
