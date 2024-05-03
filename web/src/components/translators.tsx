import { getInfo } from '@bigfive-org/questions';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Tooltip } from '@nextui-org/react';
import { HeartFilledIcon } from './icons';
import { Link } from '@nextui-org/link';

export const Translators = () => {
  const { languages } = getInfo();
  const translators = languages
    .filter((language) => language.translators)
    .flatMap((language) => language.translators);

  return (
    <div className='flex mt-4 flex-wrap mb-8'>
      <div className='w-full flex text-gray-700 dark:text-white mb-4 justify-between'>
        <div className='flex'>
          By our awesome translators &nbsp;
          <HeartFilledIcon />
        </div>
        <div>
          <Link isExternal href='https://b5.translations.alheimsins.net/'>
            Help out here!
          </Link>
        </div>
      </div>
      <AvatarGroup isBordered total={translators.length}>
        {translators
          .sort((a, _) => (a?.githubUser ? -1 : 1))
          .map((translator) => (
            <Tooltip key={translator?.name} content={translator?.name}>
              {translator?.githubUser ? (
                <Avatar
                  className='mr-2 mt-2'
                  src={`https://avatars.githubusercontent.com/${translator?.githubUser}`}
                />
              ) : (
                <Avatar className='mr-2 mt-2' name={translator?.name} />
              )}
            </Tooltip>
          ))}
      </AvatarGroup>
    </div>
  );
};
