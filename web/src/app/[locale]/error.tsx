'use client';

import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { useCallback, useEffect } from 'react';
import { useRouter } from '@/navigation';
import { title } from '@/components/primitives';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const onBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className={title()}>Error</h1>
      <h2 className='text-center mt-4'>
        {error ? error.message : 'Something went wrong!'}
      </h2>
      <div className='flex space-x-4'>
        <Button color='danger' className='mt-4' onClick={() => onBackClick()}>
          Go back
        </Button>

        <Button color='primary' className='mt-4' onClick={() => reset()}>
          Try again
        </Button>
      </div>
      <Image src='/error.webp' className='mt-5' />
    </main>
  );
}
