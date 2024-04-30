'use client';

import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure
} from '@nextui-org/react';
import {
  CopyIcon,
  FacebookIcon,
  MailIcon,
  PDFIcon,
  TwitterIcon
} from './icons';
import { Link as NextUiLink } from '@nextui-org/link';
import { Report } from '@/actions/index';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Input, Textarea } from '@nextui-org/input';
import { useEffect, useMemo, useState } from 'react';
import { EmailState, sendEmail } from '@/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { sleep } from '@/lib/helpers';

interface ShareBarProps {
  report: Report;
}

export default function ShareBar({ report }: ShareBarProps) {
  const [_, copy] = useCopyToClipboard();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState('');

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(sendEmail, {
    message: '',
    type: 'success'
  } as EmailState)

  useEffect(() => {
    if (state.type === 'success') {
      console.log('asdasd')
      sleep(700).then(() => onClose());
    }
  }, [state]);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (email === '') return false;

    return validateEmail(email) ? false : true;
  }, [email]);

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
          href={`https://www.facebook.com/sharer/sharer.php?u=https://bigfive-test.com/result/${report.id}`}
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
          href={`https://twitter.com/intent/tweet?text=See my personality traits!&url=https://bigfive-test.com/result/${report.id}`}
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
          onPress={onOpen}
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
          onPress={handleCopy(`https://bigfive-test.com/result/${report.id}`)}
        >
          <CopyIcon size={42} />
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <form action={formAction}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Send the results to mail
                </ModalHeader>
                <ModalBody>
                  <p>
                    We will send the result to the email you provide. We will not
                    spam you or use your email for any other purposes.
                  </p>
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                    }
                    label='Email'
                    name='to'
                    type='email'
                    value={email}
                    onValueChange={setEmail}
                    isInvalid={isInvalidEmail}
                    errorMessage={
                      isInvalidEmail && 'Please enter a valid email address'
                    }
                    placeholder='Enter your email'
                    variant='bordered'
                  />
                  <Textarea
                    name='message'
                    className='hidden'
                    value={`https://bigfive-test.com/result/${report.id}`}
                  />
                  {state.message && (
                    <Chip
                      color={state.type === 'success' ? 'success' : 'danger'}
                      size='lg'
                      className='w-fit'
                    >
                      <p>{state.message}</p>
                    </Chip>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color='primary'
                    isDisabled={email === '' || isInvalidEmail}
                    isLoading={pending}
                    type='submit'
                  >
                    Send
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
