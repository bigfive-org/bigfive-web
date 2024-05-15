'use client';

import { Button, Tooltip, useDisclosure } from '@nextui-org/react';
import {
  CopyIcon,
  FacebookIcon,
  MailIcon,
  PDFIcon,
  TwitterIcon
} from './icons';
import { Link as NextUiLink } from '@nextui-org/link';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { EmailModal } from './email-modal';

interface ShareBarProps {
  link: string;
  description: string;
}

export default function ShareBar({ link, description }: ShareBarProps) {
  const [_, copy] = useCopyToClipboard();
  const disclosure = useDisclosure();

  const handleCopy = (text: string) => async () => await copy(text);

  return (
    <>
      <Tooltip color='secondary' content='Share on facebook'>
        <Button
          isIconOnly
          aria-label='Share on facebook'
          radius='full'
          size='md'
          variant='light'
          as={NextUiLink}
          isExternal
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
        >
          <FacebookIcon size={48} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Share on X'>
        <Button
          isIconOnly
          aria-label='Share on X'
          radius='full'
          size='md'
          variant='light'
          target='_blank'
          as={NextUiLink}
          href={`https://twitter.com/intent/tweet?text=${description}!&url=${link}`}
        >
          <TwitterIcon size={42} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Download PDF'>
        <Button
          isIconOnly
          aria-label='Download pdf'
          radius='full'
          size='md'
          variant='light'
          onPress={() => window.print()}
        >
          <PDFIcon size={32} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Mail link'>
        <Button
          isIconOnly
          aria-label='Mail the link'
          radius='full'
          size='md'
          variant='light'
          onPress={disclosure.onOpen}
        >
          <MailIcon size={42} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Copy link'>
        <Button
          isIconOnly
          aria-label='Copy link'
          radius='full'
          size='md'
          variant='light'
          onPress={handleCopy(link)}
        >
          <CopyIcon size={42} />
        </Button>
      </Tooltip>
      <EmailModal disclosure={disclosure} link={link} />
    </>
  );
}
