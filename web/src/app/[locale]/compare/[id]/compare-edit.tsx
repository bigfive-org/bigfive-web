'use client';

import { EditIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';
import { Tooltip } from '@nextui-org/react';

interface CompareEditProps {
  id: string;
}

export default function CompareEdit({ id }: CompareEditProps) {
  const router = useRouter();
  const handleEdit = () => {
    router.push(`/compare/?edit=${id}`);
  };
  return (
    <div>
      <Tooltip content='Edit Comparison' color='secondary'>
        <Button
          color='primary'
          startContent={<EditIcon size={14} />}
          size='sm'
          onClick={handleEdit}
          className='md:hidden'
          isIconOnly
        />
      </Tooltip>
      <Button
        color='primary'
        startContent={<EditIcon size={14} />}
        size='sm'
        onClick={handleEdit}
        className='hidden md:flex'
      >
        Edit Comparison
      </Button>
    </div>
  );
}
