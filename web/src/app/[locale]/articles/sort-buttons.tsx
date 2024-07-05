'use client';

import { SortIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';

interface SortButtonsProps {
  sortBy: string;
}

export default function SortButtons({ sortBy }: SortButtonsProps) {
  const router = useRouter();

  const handleSortBy = (type: string) => {
    router.push(`/articles?sort=${type}`);
  };

  return (
    <div className='flex gap-4 justify-end mt-4'>
      <Button
        size='sm'
        variant='light'
        startContent={<SortIcon size={14} />}
        onClick={() =>
          handleSortBy(sortBy === 'popularity' ? 'date' : 'popularity')
        }
      >
        Sort by {sortBy === 'popularity' ? 'Date' : 'Popularity'}
      </Button>
    </div>
  );
}
