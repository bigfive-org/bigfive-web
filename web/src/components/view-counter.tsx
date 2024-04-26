import { kv } from '@vercel/kv';
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
