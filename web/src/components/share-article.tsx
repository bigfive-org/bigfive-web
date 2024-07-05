import { Link as NextUILink } from '@nextui-org/link';
import { FacebookIcon, LinkedInIcon, MastadonIcon, TwitterIcon } from './icons';
import { Tooltip } from '@nextui-org/react';
import { basePath } from '@/config/site';

interface ShareArticleProps {
  slug: string;
}

const socialMedia = [
  {
    name: 'Twitter',
    icon: TwitterIcon,
    url: 'http://www.twitter.com/share?url='
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/sharing/share-offsite/?url='
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  {
    name: 'Mastadon',
    icon: MastadonIcon,
    url: 'https://mastodon.social/share?url='
  }
];

export function ShareArticle({ slug }: ShareArticleProps) {
  return (
    <div className='flex justify-end mt-4 gap-2'>
      {socialMedia.map(({ name, icon: Icon, url }) => (
        <Tooltip key={name} content={`Share on ${name}`} placement='top'>
          <NextUILink
            isExternal
            href={`${url}${basePath}/articles/${slug}`}
            aria-label={name}
          >
            <Icon size={24} className='text-default-500' />
          </NextUILink>
        </Tooltip>
      ))}
    </div>
  );
}
