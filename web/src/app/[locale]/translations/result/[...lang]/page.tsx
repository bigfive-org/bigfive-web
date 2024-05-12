import { getTemplate } from '@bigfive-org/results';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Input, Textarea } from '@nextui-org/input';
import { subtitle, title } from '@/components/primitives';

interface TranslationResultProps {
  params: {
    lang: string;
  };
}
export default function TranslationResult({
  params: { lang }
}: TranslationResultProps) {
  const template = getTemplate(lang);
  return (
    <div className='gap-4 flex flex-col'>
      <h1 className={title()}>Translation</h1>
      <h2 className={subtitle()}>Translation of the results page</h2>
      {template.map((item: any) => {
        return (
          <Card key={item.domain}>
            <CardHeader>
              <h1 className='text-large font-bold'>{item.title}</h1>
            </CardHeader>
            <CardBody className='gap-4'>
              <Input defaultValue={item.title} name='domain' label='Domain' />
              <Input
                defaultValue={item.shortDescription}
                label='Short Domain description'
                name='shortDescription'
              />
              <Textarea
                defaultValue={item.description}
                label='Domain description'
                name='description'
              />
              {item.results.map((result: any) => {
                return (
                  <div key={`${item.domain}-${result.score}`}>
                    <Input
                      defaultValue={result.text}
                      label={`Result text (${result.score})`}
                      name='text'
                    />
                    <Input
                      className='hidden'
                      hidden
                      defaultValue={result.score}
                      label='score'
                      name='score'
                    />
                  </div>
                );
              })}
              {item.facets.map((facet: any) => {
                return (
                  <div
                    key={`${item.domain}-${facet.facet}`}
                    className='flex flex-col gap-4'
                  >
                    <h2 className='text-large font-medium'>{facet.title}</h2>
                    <Input
                      defaultValue={facet.title}
                      label='Facet title'
                      name='title'
                    />
                    <Textarea
                      defaultValue={facet.text}
                      label='Facet text'
                      name='text'
                    />
                    <Input
                      className='hidden'
                      hidden
                      defaultValue={facet.facet}
                      label='facet'
                      name='facet'
                    />
                  </div>
                );
              })}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
