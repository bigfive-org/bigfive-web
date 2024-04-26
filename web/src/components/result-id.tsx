'use client';

import { formatAndValidateId } from '@/lib/helpers';
import { useMemo, useState } from 'react';
import { Input } from '@nextui-org/input';
import { ResultIcon } from '@/components/icons';

export default function ResultId() {
  const [id, setId] = useState('');

  const isInvalidId = useMemo(() => {
    if (id === '') return false;

    return !formatAndValidateId(id);
  }, [id]);

  return (
    <Input
      type='text'
      label='ID'
      labelPlacement='outside'
      placeholder='58a70606a835c400c8b38e84'
      startContent={
        <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
      }
      isInvalid={isInvalidId}
      color={isInvalidId ? 'danger' : 'default'}
      onValueChange={setId}
      errorMessage={isInvalidId && 'Please enter a valid ID'}
    />
  );
}
