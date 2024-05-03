'use client';

import { heading } from '@/components/primitives';
import Link from 'next/link';
import { Facet } from '@bigfive-org/results';
import { BarChartCompare } from '@/components/bar-chart-generic';
import { CompareHrec1, CompareHrec2, CompareHrec3 } from '@/components/ads/ads';

interface DomainProps {
  title: string;
  shortDescription: string;
  domain: NamedScore[];
  domainKey: string;
}

type NamedScore = {
  name: string;
  facets: Facet[];
};

export const Ads = (domain: string) => {
  switch (domain) {
    case 'O':
      return <CompareHrec1 />;
    case 'C':
      return <CompareHrec2 />;
    case 'A':
      return <CompareHrec3 />;
    case 'E':
      return <CompareHrec3 />;
    case 'N':
      return <CompareHrec3 />;
  }
}

export const DomainComparePage = ({
  title,
  shortDescription,
  domain,
  domainKey
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
      <div className='my-4'>
        {Ads(domainKey)}
      </div>
    </>
  );
};
