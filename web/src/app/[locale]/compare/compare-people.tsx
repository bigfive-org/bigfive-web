'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from '@nextui-org/table';
import {
  DeleteIcon,
  DotsIcon,
  EditIcon,
  PersonIcon,
  ResultIcon
} from '@/components/icons';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';
import { base64url, formatId, validId } from '@/lib/helpers';
import { useRouter } from '@/navigation';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/dropdown';

interface CompareProps {
  addPersonText: string;
  comparePeopleText: string;
  paramId?: string;
  edit?: string;
}

export const ComparePeople = ({
  addPersonText,
  comparePeopleText,
  paramId,
  edit
}: CompareProps) => {
  const router = useRouter();
  const columns = [
    {
      key: 'name',
      label: 'NAME'
    },
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'actions',
      label: 'ACTIONS'
    }
  ];

  type Row = {
    id: string;
    name: string;
  };

  let initialRows: Row[] = [];
  if (edit) {
    if (edit.includes('_')) {
      // new format for compare
      initialRows = edit.split('_').map((person) => {
        const [name, id] = person.split('-');
        return { name: decodeURI(name), id };
      });
    } else {
      // old format for compare
      initialRows = base64url.decode(edit);
    }
  }

  const [rows, setRows] = useState<Row[]>(initialRows);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState(paramId ?? '');

  const [editName, setEditName] = useState<string>('');
  const [editId, setEditId] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const isInvalidName = React.useMemo(() => {
    if (name === '') return false;
    return !/^[\p{L}\p{M}\p{Zs}]{2,30}$/u.test(name);
  }, [name]);

  const isInvalidId = React.useMemo(() => {
    if (id === '') return false;

    const newId = formatId(id);
    if (rows.some((item) => item.id === newId)) return true;

    return !validId(newId);
  }, [id, rows]);

  const isInvalidEditId = React.useMemo(() => {
    if (editId === '') return false;

    const newId = formatId(editId);
    return !validId(newId);
  }, [editId]);

  const isInvalidEditName = React.useMemo(() => {
    if (editName === '') return false;
    return !/^[\p{L}\p{M}\p{Zs}]{2,30}$/u.test(editName);
  }, [editName]);

  function deleteItem(id: string) {
    setRows((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function addPerson() {
    const newId = formatId(id);
    if (name && id && !isInvalidId) {
      setRows((prev) => {
        return [...prev, { id: newId, name }];
      });
      setName('');
      setId('');
    }
  }

  function comparePeople() {
    const urlParam = rows.map((row) => `${row.name}-${row.id}`).join('_');

    router.push(`/compare/${urlParam}`);
  }

  function onOpenEditPerson(onOpen: () => void, item: Row) {
    setEditName(item.name);
    setEditId(item.id);
    setEditIndex(rows.findIndex(({ id }) => id === item.id));
    onOpen();
  }

  function editPerson(onClose: () => void) {
    const newId = formatId(editId);
    if (editName && editId && !isInvalidEditId && editIndex !== undefined) {
      setRows((prev) => {
        const updatedRows = [...prev];
        updatedRows[editIndex] = { id: newId, name: editName };
        return updatedRows;
      });
      setEditName('');
      setEditId('');
      setEditIndex(undefined);
      onClose();
    }
  }

  return (
    <div className='w-full flex flex-col gap-4 mt-4'>
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 items-start'>
        <Input
          type='text'
          label='Name'
          autoFocus
          labelPlacement='outside'
          placeholder='Arthur Dent'
          startContent={
            <PersonIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          value={name}
          minLength={2}
          maxLength={30}
          isInvalid={isInvalidName}
          errorMessage={
            isInvalidName &&
            'Only letters allowed. Min 2 and max 30 characters.'
          }
          onValueChange={setName}
        />
        <Input
          type='text'
          label='ID'
          labelPlacement='outside'
          placeholder='58a70606a835c400c8b38e84'
          startContent={
            <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          value={id}
          onValueChange={setId}
          isInvalid={isInvalidId}
          errorMessage={
            isInvalidId && 'Please enter a valid ID and not a duplicate.'
          }
        />
        <div className='flex-grow h-16 place-content-end'>
          <Button
            color='primary'
            className='flex-shrink-0'
            onClick={addPerson}
            isDisabled={!name || !id || isInvalidId || isInvalidName}
          >
            {addPersonText}
          </Button>
        </div>
      </div>
      <div>
        <Table hideHeader aria-label='List of persons to compare' isStriped>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent='No rows to display.'>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) =>
                  columnKey === 'actions' ? (
                    <TableCell className='flex justify-end'>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            className='md:hidden'
                            isIconOnly
                            variant='light'
                            aria-label='Open Menu'
                          >
                            <DotsIcon />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label='Static Actions'>
                          <DropdownItem
                            key='edit'
                            onPress={() => onOpenEditPerson(onOpen, item)}
                            aria-label='Edit item'
                          >
                            Edit item
                          </DropdownItem>
                          <DropdownItem
                            key='delete'
                            className='text-danger'
                            color='danger'
                            onClick={() => deleteItem(item.id)}
                            aria-label='Delete item'
                          >
                            Delete item
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <Button
                        className='hidden md:block'
                        isIconOnly
                        variant='light'
                        aria-label='Edit'
                        onPress={() => onOpenEditPerson(onOpen, item)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        className='hidden md:block'
                        isIconOnly
                        variant='light'
                        aria-label='Delete'
                        onClick={() => deleteItem(item.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Button
          color='primary'
          className='mt-4'
          isDisabled={rows.length < 2}
          onClick={comparePeople}
        >
          {comparePeopleText}
        </Button>
      </div>
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
                <Button color='primary' onPress={() => editPerson(onClose)}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
