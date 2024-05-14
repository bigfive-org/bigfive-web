'use client';

import { getInfo } from '@bigfive-org/questions';
import { getInfo as getResultsInfo } from '@bigfive-org/results';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip, Tab, Tabs, Tooltip, User } from '@nextui-org/react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from '@nextui-org/table';
import { useRouter } from '@/navigation';
import { EditIcon } from '@/components/icons';
import { Key, useCallback } from 'react';

export default function TranslationPage() {
  const router = useRouter();
  const modules = [
    {
      id: 'b5-johnson-120-ipip-neo-pi-r',
      name: 'b5-johnson-120-ipip-neo-pi-r',
      description: 'Big Five Johnson 120 IPIP-NEO-PI-R inventory'
    },
    {
      id: 'b5-costa-mccrae-300-ipip-neo-pi-r',
      name: 'b5-costa-mccrae-300-ipip-neo-pi-r',
      description: "Big Five Costa and McCrae's 300 IPIP-NEO-PI-R items",
      disabled: true
    }
  ];

  const { languages: surveyLanguages } = getInfo();

  type TranslatedLanguage = {
    language: string;
    languageCode: string;
    verified: boolean;
    translator?: string;
    edit: boolean;
  };

  const surveyTranslators: TranslatedLanguage[] = surveyLanguages.map(
    (language) => ({
      language: language.text,
      languageCode: language.id,
      verified: language.verified,
      translator: language.translators
        ?.map((translator) => translator.name)
        .join(', '),
      edit: true
    })
  );

  const userTranslatorsSurvey = surveyLanguages
    .filter((language) => language.translators)
    .flatMap((language) => language.translators);

  const { languages: resultTextLanguages } = getResultsInfo();

  const resultTextTranslators: TranslatedLanguage[] = resultTextLanguages.map(
    (language) => ({
      language: language.text,
      languageCode: language.id,
      verified: language.verified,
      translator: language.translators
        ?.map((translator) => translator.name)
        .join(', '),
      edit: true
    })
  );

  const userTranslatorsReport = resultTextLanguages
    .filter((language) => language.translators)
    .flatMap((language) => language.translators);

  const columns = [
    {
      key: 'language',
      label: 'LANGUAGE'
    },
    {
      key: 'languageCode',
      label: 'LANGUAGE CODE'
    },
    {
      key: 'verified',
      label: 'VERIFIED'
    },
    {
      key: 'translator',
      label: 'TRANSLATORS'
    },
    {
      key: 'edit',
      label: 'EDIT TRANSLATION'
    }
  ];

  const renderCell = useCallback(
    (item: TranslatedLanguage, columnKey: Key, editLink: string) => {
      switch (columnKey) {
        case 'edit':
          return (
            <Button
              isIconOnly
              variant='light'
              aria-label='Edit'
              onPress={() => router.push(editLink)}
            >
              <EditIcon />
            </Button>
          );
        case 'verified':
          return item.verified ? (
            <Chip color='success' size='sm' variant='flat'>
              Yes
            </Chip>
          ) : (
            <Chip color='warning' size='sm' variant='flat'>
              No
            </Chip>
          );
        case 'translator':
          return (
            <Tooltip content={getKeyValue(item, columnKey.toString())}>
              <p className='truncate w-44'>
                {getKeyValue(item, columnKey.toString())}
              </p>
            </Tooltip>
          );
        default:
          return getKeyValue(item, columnKey.toString());
      }
    },
    []
  );

  return (
    <>
      <div className='w-full lg:px-16 mt-12'>
        <div className='text-center mb-8'>
          <h1 className='mb-2 font-bold text-4xl'>Translations</h1>
          <h5 className='text-default-500 text-lg'>
            Help us translate this to your language. Thank you for your support!
          </h5>
        </div>
        <Tabs aria-label='Options' className='flex items-center justify-center'>
          <Tab key='Survey' title='Survey'>
            <Modules modules={modules} />
            <div className='mt-8'>
              <Table aria-label='Translations table'>
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={surveyTranslators}>
                  {(item) => (
                    <TableRow key={item.languageCode}>
                      {(columnKey) => (
                        <TableCell>
                          {renderCell(
                            item,
                            columnKey,
                            `/translations/${modules[0].id}/${item.languageCode}?edit=true`
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Tab>
          <Tab key='Result text' title='Result text'>
            <div className='mt-8'>
              <Table aria-label='Translations table'>
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={resultTextTranslators}>
                  {(item) => (
                    <TableRow key={item.languageCode}>
                      {(columnKey) => (
                        <TableCell>
                          {renderCell(
                            item,
                            columnKey,
                            `/translations/result/${item.languageCode}?edit=true`
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Tab>
          <Tab
            key='Web page'
            isDisabled
            title={
              <div className='flex items-center space-x-2'>
                <span>Web page</span>
                <Chip size='sm' variant='faded'>
                  WIP
                </Chip>
              </div>
            }
          ></Tab>
          <Tab key='Translators' title='Translators'>
            <div className='flex flex-col gap-3'>
              <Card>
                <CardHeader>
                  <div className='text-center w-full'>
                    <h1 className='text-large font-medium'>
                      Translators survey
                    </h1>
                  </div>
                </CardHeader>
                <CardBody className='flex flex-wrap flex-row gap-3'>
                  {userTranslatorsSurvey
                    .sort((a, _) => (a?.githubUser ? -1 : 1))
                    .map((translator) =>
                      translator?.githubUser ? (
                        <User
                          key={translator?.name}
                          name={translator?.name}
                          avatarProps={{
                            src: `https://avatars.githubusercontent.com/${translator?.githubUser}`
                          }}
                        />
                      ) : (
                        <User key={translator?.name} name={translator?.name} />
                      )
                    )}
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <div className='text-center w-full'>
                    <h1 className='text-large font-medium'>
                      Translators report summary
                    </h1>
                  </div>
                </CardHeader>
                <CardBody className='flex flex-wrap flex-row gap-3'>
                  {userTranslatorsReport
                    .sort((a, _) => (a?.githubUser ? -1 : 1))
                    .map((translator) =>
                      translator?.githubUser ? (
                        <User
                          key={translator?.name}
                          name={translator?.name}
                          avatarProps={{
                            src: `https://avatars.githubusercontent.com/${translator?.githubUser}`
                          }}
                        />
                      ) : (
                        <User key={translator?.name} name={translator?.name} />
                      )
                    )}
                </CardBody>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

interface ModulesProps {
  modules: {
    id: string;
    name: string;
    description: string;
    disabled?: boolean;
  }[];
}

const Modules = ({ modules }: ModulesProps) => {
  const router = useRouter();
  return (
    <div className='flex gap-6 mt-8'>
      {modules.map((module) => (
        <Card key={module.id} isDisabled={module.disabled ? true : false}>
          <CardBody>
            <p>{module.name}</p>
            <p className='text-small text-default-500 mt-2'>
              {module.description}.
              <br />
              Help us translate to a new language here.
              <br />
              <br />
              To edit an existing translation, click on Edit-icon in the table
              below.
              <br />
              <br />A translation may exist here:
              https://ipip.ori.org/newItemTranslations.htm
            </p>
          </CardBody>
          <CardFooter className='justify-end'>
            <Button
              color='primary'
              isDisabled={module.disabled ? true : false}
              onPress={() => router.push(`/translations/${module.id}`)}
            >
              Translate to a new language
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
