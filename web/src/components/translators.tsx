import { getTranslators } from '@bigfive-org/questions';
import { Avatar } from '@nextui-org/avatar';
import { Tooltip } from '@nextui-org/react';

export const Translators = () => {
  return (
    <div className='flex mt-4 flex-wrap mb-8'>
      {getTranslators()
        .sort((a, _) => a.githubUser ? -1 : 1)
        .map((translator) => (
          <Tooltip
            key={translator.name}
            content={translator.name}
          >
            {translator.githubUser ? (
              <Avatar
                className='mr-2 mt-2'
                src={`https://avatars.githubusercontent.com/${translator.githubUser}`}
              />
            ) : (
              <Avatar
                className='mr-2 mt-2'
                name={translator.name}
              />
            )}
          </Tooltip>
        ))
      }
    </div>
  );
};
