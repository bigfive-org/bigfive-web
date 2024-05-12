'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { getItems, getInfo } from '@bigfive-org/questions';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { TranslationState, generateTranslation } from '@/actions';
import { subtitle, title } from '@/components/primitives';
import { Chip } from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';

interface TranslatePageProps {
  params: {
    lang: string;
  };
  searchParams: {
    edit: boolean;
  };
}

export default function TranslatePage({
  params: { lang },
  searchParams
}: TranslatePageProps) {
  const [state, formAction] = useFormState(generateTranslation, {
    message: '',
    type: 'success'
  } as TranslationState);
  const items = getItems(lang);
  const choices = items[0].choices;
  const language = getInfo().languages.find((l) => l.id === lang[0]);

  const edit = !!searchParams.edit;

  return (
    <form action={formAction}>
      <div className='gap-4 flex flex-col'>
        <h1 className={title()}>Translation {language?.text}</h1>
        <h2 className={subtitle()}>
          Survey {getInfo().name} ({getInfo().questions} questions)
        </h2>
        <Card>
          <CardHeader>
            <h1 className='text-large font-bold'>Personal information</h1>
          </CardHeader>
          <CardBody className='gap-4'>
            <Input name='name' label='Name (will be credited)' isRequired />
            <Input name='email' type='email' label='Email' isRequired />
            <Textarea name='notes' label='Other notes' />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1 className='text-large font-bold'>Choices</h1>
          </CardHeader>
          <CardBody>
            <div className='flex flex-col gap-4'>
              {choices.map((choice) => (
                <div key={`${lang}-${choice.score}`}>
                  <p className='m-2'>{choice.text}</p>
                  <Input
                    name={choice.score.toString()}
                    id={choice.score.toString()}
                    label={`Your translation of: ${choice.text}`}
                    isRequired
                    defaultValue={edit ? choice.text : ''}
                  />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1 className='text-large font-bold'>Questions</h1>
          </CardHeader>
          <CardBody>
            <div className='flex flex-col gap-4'>
              {items.map((item) => (
                <div key={item.id}>
                  <p className='m-2'>
                    {item.num}. {item.text}
                  </p>
                  <Input
                    id={item.id}
                    name={item.id}
                    isRequired
                    label={`Your translation of: ${item.text}`}
                    defaultValue={edit ? item.text : ''}
                  />
                </div>
              ))}
            </div>
            <SubmitButton />
            {state.message && (
              <div className='flex mt-4 justify-center'>
                <Chip
                  color={state.type === 'success' ? 'success' : 'danger'}
                  size='lg'
                >
                  <p>{state.message}</p>
                </Chip>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className='flex justify-end mt-8'>
      <Button color='primary' type='submit' isLoading={pending}>
        Generate translation
      </Button>
    </div>
  );
};
