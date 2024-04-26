'use client';

import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';
import { formatAndValidateId, formatId } from '@/lib/helpers';
import { useEffect, useMemo, useState } from 'react';
import { Input } from '@nextui-org/input';
import { ResultIcon } from '@/components/icons';

interface GetResultPageProps {
  viewPreviousText: string;
  getResultsText: string;
}

export const GetResultPage = ({
  viewPreviousText,
  getResultsText
}: GetResultPageProps) => {
  const router = useRouter();

  const [previousResultId, setPreviousResultId] = useState<string | null>(null);
  const [id, setId] = useState('');

  const isInvalidId = useMemo(() => {
    if (id === '') return false;

    return !formatAndValidateId(id);
  }, [id]);

  useEffect(() => {
    const resultId = localStorage.getItem('resultId');
    if (resultId) {
      setPreviousResultId(resultId);
    }
  }, []);

  const handleGetResults = () => {
    if (!formatAndValidateId(id)) return;
    router.push(`/result/${formatId(id)}`);
  };

  return (
    <>
      <div className='w-full my-3'>
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
          value={id}
        />
      </div>
      <div className='flex justify-end gap-3'>
        {previousResultId && (
          <Link
            className={clsx(
              buttonStyles({ color: 'danger', size: 'lg' }),
              'w-full md:w-auto'
            )}
            href={`/result/${previousResultId}`}
          >
            {viewPreviousText}
          </Link>
        )}
        <Button
          color='primary'
          size='lg'
          className='w-full md:w-auto'
          onClick={handleGetResults}
          isDisabled={id === '' || isInvalidId}
        >
          {getResultsText}
        </Button>
      </div>
    </>
  );
};
