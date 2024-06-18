import { heading } from '@/components/primitives';
import { Domain } from '@bigfive-org/results';
import { Code } from '@nextui-org/code';

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

  const extraversion = results.find(trait => trait.domain === 'E')?.scoreText === 'High';
  mbti += (extraversion) ? 'E' : 'I';

  const openness = results.find(trait => trait.domain === 'O')?.scoreText === 'High';
  mbti += (openness) ? 'N' : 'S';

  const agreeableness = results.find(trait => trait.domain === 'A')?.scoreText === 'High';
  mbti += (agreeableness) ? 'F' : 'T';

  const conscientiousness = results.find(trait => trait.domain === 'C')?.scoreText === 'High';
  mbti += (conscientiousness) ? 'J' : 'P';

  return mbti;
}

export default function Mbti({ results }: MbtiProps) {
  return (
    <div className='text-center mt-10'>
      <h2 className={heading()}></h2>
      <Code className='text-2xl' color='secondary'>
        <div className='text-sm'>Myers–Briggs Type Indicator (MBTI)</div>
        {bigFiveToMBTI(results)}
      </Code>
    </div>
  );
}
