'use client'

import { getInfo } from '@bigfive-org/questions';
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Chip, Tab, Tabs } from '@nextui-org/react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";

export default function TranslationPage() {
  const modules = [
    {
      id: 'b5-johnson-120-ipip-neo-pi-r',
      name: 'b5-johnson-120-ipip-neo-pi-r',
      description: 'Big Five Johnson 120 IPIP-NEO-PI-R inventory'
    },
    {
      id: 'b5-costa-mccrae-300-ipip-neo-pi-r',
      name: 'b5-costa-mccrae-300-ipip-neo-pi-r',
      description: 'Big Five Costa and McCrae\'s 300 IPIP-NEO-PI-R items'
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
            Help us translate this to your language
          </h5>
        </div>
        <Tabs aria-label="Options">
          <Tab key="Survey" title="Survey">
            <div className='flex gap-6 mt-8'>
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
          </Tab>
          <Tab key="Result text" title="Result text">
          </Tab>
          <Tab
            key="Web page"
            isDisabled
            title={
              <div className="flex items-center space-x-2">
                <span>Web page</span>
                <Chip size="sm" variant="faded">WIP</Chip>
              </div>
            }
          >

          </Tab>
        </Tabs>
      </div>
    </>
  )
}