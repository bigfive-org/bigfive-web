export interface Answers {
  [key: string]: {
    facet: {
      [key: string]: {
        result: string;
        score: number;
        count: number;
      };
    };
  };
}

type Score = 'low' | 'neutral' | 'high';

interface TemplateDomain {
    domain: string;
    title: string;
    shortDescription: string;
    description: string;
    results: TemplateResult[];
    facets: TemplateFacet[];
}

interface TemplateResult {
    score: Score;
    text: string;
}

interface TemplateFacet {
    facet: number;
    title: string;
    text: string;
}

export interface Options {
  language?: string;
  domain?: string;
  facet?: string;
}

export interface Language {
  id: string;
  text: string;
}

export interface ResultsOptions {
  lang: string;
  scores: any;
}

export interface Domain {
    domain: string;
    title: string;
    shortDescription: string;
    description: string;
    scoreText: string;
    count: number;
    score: number;
    facets: Facet[];
    text: string;
}

export interface Facet {
    facet: number;
    title: string;
    text: string;
    score: number;
    count: number;
    scoreText: Score;
}

export type Translator = {
  name: string;
  language: string;
  githubUser: string;
}

export function getTemplate(lang: string): any;
export function generateResult(answers: Answers, template: TemplateDomain[]): Domain[];
export function getDomain(options: Options): Domain;
export function getFacet(options: Options): Facet;
export function getInfo(): { languages: Language[] };
export function getTranslators(): Translator[];
export default function getResults(options: ResultsOptions): Domain[];
