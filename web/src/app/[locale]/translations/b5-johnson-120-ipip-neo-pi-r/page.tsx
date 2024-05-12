import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import { TranslateLanguageSwitch } from './translate-language-switch';
import { getInfo } from '@bigfive-org/questions';

export default function b5Johnson120IpipNeoPiR() {
  const { languages } = getInfo();
  return (
    <>
      <Card>
        <CardHeader className='text-center w-full'>
          <h1 className='text-large font-medium'>Johnson 120 IPIP NEO-PI-R</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <TranslateLanguageSwitch availableLanguages={languages} />
        </CardBody>
      </Card>
    </>
  );
}
