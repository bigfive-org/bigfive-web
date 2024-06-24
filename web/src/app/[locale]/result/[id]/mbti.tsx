import { InfoIcon } from '@/components/icons';
import { heading } from '@/components/primitives';
import { Domain } from '@bigfive-org/results';
import { Code } from '@nextui-org/code';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';

interface MbtiProps {
  results: Domain[];
}

/*
Big Five Trait	MBTI Dimension	High Score	Low Score
Extraversion	    E / I	Extraversion (E)    Introversion (I)
Openness	        S / N	Intuition (N)	      Sensing (S)
Agreeableness	    T / F	Feeling (F)	        Thinking (T)
Conscientiousness	J / P	Judging (J)	        Perceiving (P)
*/

function bigFiveToMBTI(results: Domain[]) {
  let mbti = '';

  const extraversionHigh =
    results.find((trait) => trait.domain === 'E')?.scoreText === 'High';
  mbti += extraversionHigh ? 'E' : 'I';

  const opennessHigh =
    results.find((trait) => trait.domain === 'O')?.scoreText === 'High';
  mbti += opennessHigh ? 'N' : 'S';

  const agreeablenessHigh =
    results.find((trait) => trait.domain === 'A')?.scoreText === 'High';
  mbti += agreeablenessHigh ? 'F' : 'T';

  const conscientiousnessHigh =
    results.find((trait) => trait.domain === 'C')?.scoreText === 'High';
  mbti += conscientiousnessHigh ? 'J' : 'P';

  return mbti;
}

export default function Mbti({ results }: MbtiProps) {
  return (
    <div className='text-center mt-10'>
      <h2 className={heading()} />
      <Code className='text-2xl w-full' color='secondary'>
        <Tooltip
          color='secondary'
          content={
            <>
              The Myers–Briggs Type Indicator (MBTI) is a pseudoscientific
              self-report questionnaire. Due to numerous requests, this has been
              added.{' '}
              <Link className='underline' href='/articles/mbti_pseudoscience'>
                Read more.
              </Link>
            </>
          }
        >
          <div className='text-sm flex justify-center'>
            Myers–Briggs Type Indicator (MBTI)&nbsp; <InfoIcon size={14} />
          </div>
        </Tooltip>
        {bigFiveToMBTI(results)}
      </Code>
    </div>
  );
}
