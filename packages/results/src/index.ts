import { LanguageCode } from "./data/languages";
import languages from "./data/languages";
import { TemplateDomain, Scores, FacetOptions, ResultOptions, DomainOptions } from "./types";

export default async function(options: ResultOptions) {
  const template = await getTemplate(options.language)
  return generateResult(options.scores, template)
}

export function getInfo() {
  return { languages }
}

export async function getFacet(options: FacetOptions) {
  const domain = await getDomain(options)
  if (!domain) {
    throw new Error('Domain not found')
  }
  const facetId = options.facet.toString()
  const filtered = domain.facets.find((item) => item.facet.toString() === facetId)
  return filtered
}

export async function getDomain(options: DomainOptions) {
  const template = await getTemplate(options.language)
  if (!template) {
    throw new Error('Template not found')
  }
  const domainId = options.domain.toLowerCase()
  return template.find((item) => item.domain.toLowerCase() === domainId)
}

export async function getTemplate(language: string): Promise<TemplateDomain[]> {
  try {
    const template = (await import(`./data/${language}`)).default;
    return template
  } catch (error) {
    const template = (await import(`./data/en`)).default;
    return template
  }
}

export function generateResult(scores: Scores, template: TemplateDomain[]) {
  return Object.keys(scores).map((key: string) => {
    const { result, count, score } = scores[key];
    const domainTemplate = template.find(template => template.domain === key);

    if (!domainTemplate) {
      throw new Error('Domain template not found for key: ' + key);
    }
    const resultText = domainTemplate.results.find(res => res.score === result)?.text;
    const mappedFacets = domainTemplate.facets.map(({ facet, title, text }) => {
      // @ts-ignore
      const { score, count, result } = facet[key] || {};
      return { facet, title, text, score, count, scoreText: result };
    }).filter(({ score }) => score);

    return {
      domain: domainTemplate.domain,
      title: domainTemplate.title,
      shortDescription: domainTemplate.shortDescription,
      description: domainTemplate.description,
      scoreText: resultText,
      count,
      score,
      facets: mappedFacets,
      text: resultText
    };
  });
}
