import { Code } from '@nextui-org/code';
import { ReactNode } from 'react';

interface AlertProps {
  title: string;
  children?: ReactNode;
}

export function Alert({ title, children }: AlertProps) {
  return (
    <Code
      color='danger'
      className='flex w-full break-all flex-wrap font-sans text-wrap'
    >
      <div className='text-lg font-bold w-full'>{title}</div>
      <div className='mt-4 w-full'>{children}</div>
    </Code>
  );
}
