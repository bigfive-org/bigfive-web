import { PersonIcon, ResultIcon } from '@/components/icons';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal';
import { useMemo, useState } from 'react';
import { formatId, validId } from '@/lib/helpers';
import { useRouter } from '@/navigation';

interface CompareModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  people: Person[];
}

type Person = {
  id: string;
  name: string;
};

export default function CompareModal({
  isOpen,
  onOpenChange,
  people
}: CompareModalProps) {
  const router = useRouter();

  const [editName, setEditName] = useState<string>('');
  const [editId, setEditId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isInvalidEditName = useMemo(() => {
    if (editName === '') return false;
    return !/^[\p{L}\p{M}\p{Zs}]{2,30}$/u.test(editName);
  }, [editName]);

  const isInvalidEditId = useMemo(() => {
    if (editId === '') return false;

    const newId = formatId(editId);
    return !validId(newId);
  }, [editId]);

  const isDisabledCompare = useMemo(() => {
    if (editId === '') return true;
    if (editName === '') return true;
    if (isInvalidEditName) return true;
    if (isInvalidEditId) return true;
    if (loading) return true;
    return false;
  }, [editId, editName, isInvalidEditName, isInvalidEditId, loading]);

  function editPerson() {
    setLoading(true);
    const newId = formatId(editId);
    const rows = [...people, { name: editName, id: newId }];

    const urlParam = rows.map((row) => `${row.name}-${row.id}`).join('_');
    router.push(`/compare/${urlParam}`);
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              Edit person
            </ModalHeader>
            <ModalBody>
              <Input
                type='text'
                autoFocus
                label='Name'
                labelPlacement='outside'
                placeholder='Arthur Dent'
                startContent={
                  <PersonIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                }
                value={editName}
                onValueChange={setEditName}
                isInvalid={isInvalidEditName}
                errorMessage={
                  isInvalidEditName &&
                  'Only letters allowed. Min 2 and max 30 characters.'
                }
              />
              <Input
                type='text'
                label='ID'
                labelPlacement='outside'
                placeholder='58a70606a835c400c8b38e84'
                startContent={
                  <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                }
                value={editId}
                onValueChange={setEditId}
                isInvalid={isInvalidEditId}
                errorMessage={isInvalidEditId && 'Please enter a valid ID.'}
              />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
              <Button
                color='primary'
                isLoading={loading}
                onPress={() => editPerson()}
                isDisabled={isDisabledCompare}
              >
                Compare
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
