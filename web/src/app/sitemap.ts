import { MetadataRoute } from 'next';
import { basePath, locales } from '@/config/site';
import { getInfo } from '@bigfive-org/results';

const articles = [
  'agreeableness',
  'conscientiousness',
  'extraversion',
  'neuroticism',
  'openness',
  'conscientiousness_longevity',
  'bigfive_relationships',
  'personality_diseases',
  'the_dark_of_personality',
  'link_between_personality_trais_psychological_needs'
];
const resultLanguages = getInfo().languages.map((l) => l.id);

export default function sitemap(): MetadataRoute.Sitemap {
  const alternatesPageLang = (path: string = '') =>
    locales.reduce((a, v) => ({ ...a, [v]: basePath + `/${v}${path}` }), {});
  const alternatesParamsLang = (path: string = '') =>
    resultLanguages.reduce(
      (a, v) => ({ ...a, [v]: basePath + `${path}&amp;lang=${v}` }),
      {}
    );
  return [
    {
      url: basePath,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang()
      }
    },
    {
      url: basePath,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang('/result')
      }
    },
    {
      url: `${basePath}/result/58a70606a835c400c8b38e84?showExpanded=true`,
      lastModified: new Date(),
      alternates: {
        languages: alternatesParamsLang(
          '/result/58a70606a835c400c8b38e84?showExpanded=true'
        )
      }
    },
    {
      url: `${basePath}/compare/W3sibmFtZSI6Ik1hcnZpbiIsImlkIjoiNThhNzA2MDZhODM1YzQwMGM4YjM4ZTg0In0seyJuYW1lIjoiQXJ0aHVyIERlbnQiLCJpZCI6IjVlNTZiYTdhYjA5NjEzMDAwN2Q1ZDZkOCJ9LHsibmFtZSI6IkZvcmQgUGVyZmVjdCIsImlkIjoiNWRlYTllODhlMTA4Y2IwMDYyMTgzYWYzIn0seyJuYW1lIjoiU2xhcnRpYmFydGZhc3QiLCJpZCI6IjVlNTZiNjUwYjA5NjEzMDAwN2Q1ZDZkMCJ9XQ==`,
      lastModified: new Date(),
      alternates: {
        languages: alternatesPageLang(
          '/compare/W3sibmFtZSI6Ik1hcnZpbiIsImlkIjoiNThhNzA2MDZhODM1YzQwMGM4YjM4ZTg0In0seyJuYW1lIjoiQXJ0aHVyIERlbnQiLCJpZCI6IjVlNTZiYTdhYjA5NjEzMDAwN2Q1ZDZkOCJ9LHsibmFtZSI6IkZvcmQgUGVyZmVjdCIsImlkIjoiNWRlYTllODhlMTA4Y2IwMDYyMTgzYWYzIn0seyJuYW1lIjoiU2xhcnRpYmFydGZhc3QiLCJpZCI6IjVlNTZiNjUwYjA5NjEzMDAwN2Q1ZDZkMCJ9XQ=='
        )
      }
    },
    {
      url: `${basePath}/test`,
      lastModified: new Date()
      // add lang
    },
    {
      url: `${basePath}/about`,
      lastModified: new Date()
    },
    {
      url: `${basePath}/faq`,
      lastModified: new Date()
    },
    {
      url: `${basePath}/privacy`,
      lastModified: new Date()
    },
    {
      url: `${basePath}/articles`,
      lastModified: new Date()
    },
    ...articles.map((article) => ({
      url: `${basePath}/articles/${article}`,
      lastModified: new Date()
    }))
  ];
}
