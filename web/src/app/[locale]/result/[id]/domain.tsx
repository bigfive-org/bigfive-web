'use client';

import { subtitle, heading } from '@/components/primitives';
import Link from 'next/link';
import { Facet, Domain } from '@bigfive-org/results';
import { BarChart } from '@/components/bar-chart';
import ReadMore from '@/components/read-more';

interface DomainProps {
  domain: Domain;
  scoreText: string;
  showExpanded?: boolean;
}

export const DomainPage = ({
  domain,
  scoreText,
  showExpanded
}: DomainProps) => {
  return (
    <>
      <div className='mt-5'>
        <Link href={`#${domain.title}`}>
          <h2 className={heading()} id={domain.title}>
            {domain.title}
          </h2>
        </Link>
        <p>{domain.shortDescription}</p>
        <ReadMore showExpanded={showExpanded}>
          <p dangerouslySetInnerHTML={{ __html: domain.description }} />
        </ReadMore>
        <br />
        <br />
        <p>{domain.text}</p>
        <BarChart max={20} results={domain.facets} />
        <div>
          {domain.facets.map((facet: Facet, index: number) => (
            <div key={index} className='mt-5'>
              <Link href={`#${facet.title}`}>
                <h3 className={subtitle()} id={facet.title}>
                  {facet.title}
                </h3>
              </Link>
              <div className='font-semibold text-gray-500'>
                {scoreText}: {facet.score} ({facet.scoreText})
              </div>
              <p className='mt-3'>{facet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
