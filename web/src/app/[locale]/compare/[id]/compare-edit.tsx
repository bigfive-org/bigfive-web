'use client';

import { EditIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';

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
      <Button
        color='primary'
        startContent={<EditIcon size={14} />}
        size='sm'
        onClick={handleEdit}
      >
        Edit Comparison
      </Button>
    </div>
  );
}
