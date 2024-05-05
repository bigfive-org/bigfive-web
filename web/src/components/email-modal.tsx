import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';

import { Input, Textarea } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import { EmailState, sendEmail } from '@/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { sleep } from '@/lib/helpers';
import { MailIcon } from './icons';

interface EmailModalProps {
  disclosure: ReturnType<typeof useDisclosure>;
  reportId: string;
}

export const EmailModal = ({ disclosure, reportId }: EmailModalProps) => {
  const [state, formAction] = useFormState(sendEmail, {
    message: '',
    type: 'success'
  } as EmailState);

  const [email, setEmail] = useState('');

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalidEmail = !validateEmail(email) && email !== '';

  const isInvalidForm = isInvalidEmail || email === '';

  useEffect(() => {
    if (state.type === 'success') {
      sleep(700).then(() => disclosure.onClose());
      setEmail('');
    }
  }, [state]);

  return (
    <Modal isOpen={disclosure.isOpen} onOpenChange={disclosure.onOpenChange}>
      <ModalContent>
        <form action={formAction}>
          <ModalHeader>Send the results to mail</ModalHeader>
          <ModalBody>
            <p>
              We will send the result to the email you provide. We will not spam
              you or use your email for any other purposes.
            </p>

            <Input
              autoFocus
              endContent={<MailIcon />}
              label='Email'
              name='to'
              type='email'
              value={email}
              onValueChange={setEmail}
              isInvalid={isInvalidEmail}
              errorMessage={
                isInvalidEmail ? 'Please enter a valid email address' : ''
              }
              placeholder='Enter your email'
              variant='bordered'
            />
            <Textarea
              name='message'
              className='hidden'
              value={`https://bigfive-test.com/result/${reportId}`}
            />
            {state.message && (
              <Chip color={state.type === 'success' ? 'success' : 'danger'}>
                {state.message}
              </Chip>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              onPress={() => disclosure.onClose()}
              variant='light'
              color='danger'
            >
              Close
            </Button>
            <SubmitButton isInvalidForm={isInvalidForm} />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

interface SubmitButtonProps {
  isInvalidForm: boolean;
}

const SubmitButton = ({ isInvalidForm }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      isDisabled={isInvalidForm}
      color='primary'
      isLoading={pending}
      type='submit'
    >
      Send
    </Button>
  );
};
