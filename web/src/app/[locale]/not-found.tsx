'use client';

import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { useCallback } from 'react';
import { useRouter } from '@/navigation';
import { title } from '@/components/primitives';

export default function NotFound() {
  const router = useRouter();

  const onBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className={title()}>Not found</h1>
      <h2 className='text-center mt-4'>Could not find requested resource</h2>
      <div className='flex space-x-4'>
        <Button color='danger' className='mt-4' onClick={() => onBackClick()}>
          Go back
        </Button>
      </div>
      <Image src='/not_found.webp' className='mt-5' />
    </main>
  );
}
