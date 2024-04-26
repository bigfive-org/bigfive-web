import { base64url } from '@/lib/helpers';
import { getTestResult } from '@/actions';
import { title } from '@/components/primitives';
import { DomainComparePage } from './domain';
import { BarChartCompare } from '@/components/bar-chart-generic';

interface ComparePageProps {
  params: {
    id: string;
  };
}

type Person = {
  id: string;
  name: string;
};

export default async function ComparePage({
  params: { id }
}: ComparePageProps) {
  const people: Person[] = base64url.decode(id);
  const reports = await Promise.all(
    people.map(async (person) => {
      const report = await getTestResult(person.id);
      if (!report) throw new Error('No report found');
      return {
        name: person.name,
        report
      };
    })
  );

  const categories = reports[0].report.results.map((result) => result.title);

  const series = reports.map(({ name, report }) => {
    return {
      name,
      data: report.results.map((result) => result.score)
    };
  });
  const getNamedFacets = (domain: string) =>
    reports.map((report) => {
      const domainResult = report.report.results.find(
        (result) => result.domain === domain
      );
      return {
        name: report.name,
        facets: domainResult?.facets
      };
    });

  return (
    <>
      <h1 className={title()}>Overview</h1>
      <BarChartCompare max={120} categories={categories} series={series} />
      {reports[0].report.results.map((domain) => (
        <DomainComparePage
          key={domain.domain}
          title={domain.title}
          shortDescription={domain.shortDescription}
          // @ts-ignore
          domain={getNamedFacets(domain.domain)}
        />
      ))}
    </>
  );
}
