'use client'

import { getInfo } from '@bigfive-org/questions';
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";

export default function TranslationPage() {
  const modules = [
    {
      id: 'b5-johnson-120-ipip-neo-pi-r',
      name: 'b5-johnson-120-ipip-neo-pi-r',
      description: 'Big Five Johnson 120 IPIP-NEO-PI-R inventory'
    }
  ]

  const { languages } = getInfo()
  const translators = languages.map((language) => ({
    language: language.text,
    languageCode: language.id,
    status: "VERIFIED",
    translator: language.translators?.map((translator) => translator.name).join(", ")
  }))

  const columns = [
    {
      key: "language",
      label: "LANGUAGE",
    },
    {
      key: "languageCode",
      label: "LANGUAGE CODE",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
      key: "translator",
      label: "TRANSLATOR"
    },
  ];

  return (
    <>
      <div className='w-full lg:px-16 mt-12'>
        <div className='text-center mb-8'>
          <h1 className='mb-2 font-bold text-4xl'>Translations</h1>
          <h5 className='text-default-500 text-lg'>
            Help us translate the big five survey to your language
          </h5>
        </div>
        <h2 className='font-bold text-2xl text-center mb-8'>
          Surveys
        </h2>
        <div className='flex justify-center gap-4'>
          {modules.map((module) => (
            <Card key={module.id}>
              <CardBody>
                <p>{module.name}</p>
                <p className="text-small text-default-500">{module.description}</p>
              </CardBody>
              <CardFooter className='justify-end'>
                <Button color='primary'>Translate this</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className='mt-8'>
          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={translators}>
              {(item) => (
                <TableRow key={item.languageCode}>
                  {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
