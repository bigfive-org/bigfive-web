import { Button } from '@nextui-org/button';
import { useState } from 'react';

interface ReadMoreProps {
  children: React.ReactNode;
  showExpanded?: boolean;
}

const ReadMore = ({ children, showExpanded = false }: ReadMoreProps) => {
  const text = children;
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setReadMoreShown(!isReadMoreShown);
  };

  return (
    <>
      {!showExpanded && (
        <Button
          className='my-2'
          onClick={toggleReadMore}
          size='sm'
          variant='bordered'
        >
          {isReadMoreShown ? 'Read less' : 'Read more'}
        </Button>
      )}
      {(isReadMoreShown || showExpanded) && text}
    </>
  );
};

export default ReadMore;
