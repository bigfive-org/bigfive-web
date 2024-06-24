'use client';

import { SortIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';

export default function SortButtons() {
  const router = useRouter();

  const sortBy = (type: string) => {
    router.push(`/articles?sort=${type}`);
  };
  return (
    <div className='flex gap-4 justify-end mt-4'>
      <Button
        size='sm'
        variant='light'
        startContent={<SortIcon size={14} />}
        onClick={() => sortBy('popularity')}
      >
        Sort by popularity
      </Button>
      <Button
        size='sm'
        variant='light'
        startContent={<SortIcon size={14} />}
        onClick={() => sortBy('date')}
      >
        Sort by date
      </Button>
    </div>
  );
}
