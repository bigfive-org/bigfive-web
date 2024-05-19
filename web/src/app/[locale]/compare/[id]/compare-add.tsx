'use client';

import { AddIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import CompareModal from './compare-modal';
import { useDisclosure } from '@nextui-org/modal';

interface CompareAddProps {
  people: Person[];
}

interface Person {
  name: string;
  id: string;
}

export default function CompareAdd({ people }: CompareAddProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button
        color='primary'
        startContent={<AddIcon size={14} />}
        onClick={onOpen}
        size='sm'
      >
        Add person
      </Button>
      <CompareModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        people={people}
      />
    </div>
  );
}
