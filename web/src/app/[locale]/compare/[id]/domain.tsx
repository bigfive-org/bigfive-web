'use client';

import { heading } from '@/components/primitives';
import Link from 'next/link';
import { Facet } from '@bigfive-org/results';
import { BarChartCompare } from '@/components/bar-chart-generic';

interface DomainProps {
  title: string;
  shortDescription: string;
  domain: NamedScore[];
}

type NamedScore = {
  name: string;
  facets: Facet[];
};

export const DomainComparePage = ({
  title,
  shortDescription,
  domain
}: DomainProps) => {
  const categories = domain[0].facets.map((facet) => facet.title);
  const scores = domain.map((d) => ({
    name: d.name,
    data: d.facets.map((f) => f.score)
  }));
  return (
    <>
      <div className='mt-5'>
        <Link href={`#${title}`}>
          <h2 className={heading()} id={title}>
            {title}
          </h2>
        </Link>
        <div className='mt-3'>{shortDescription}</div>
        <div>
          <BarChartCompare max={20} categories={categories} series={scores} />
        </div>
      </div>
    </>
  );
};
