import { type LanguageCode } from "./data/languages";

type Score = 'low' | 'neutral' | 'high';
type DomainShort = 'O' | 'C' | 'E' | 'A' | 'N';

export interface Result {
  score: Score;
  text: string;
}

export interface Facet {
  facet: number;
  title: string;
  text: string;
}

export interface TemplateDomain {
  domain: DomainShort;
  title: string;
  shortDescription: string;
  description: string;
  results: Result[];
  facets: Facet[];
}

export interface FacetInput {
  score: number;
  count: number;
  result: Score;
}

export interface DomainInput {
  score: number;
  count: number;
  result: Score;
  facet: Record<string, FacetInput>;
}

export type Scores = Record<string, DomainInput>;

// export type Template = Record<string, Domain>;


export interface ResultOptions {
  language: LanguageCode;
  scores: Scores;
}


export interface FacetOptions {
  language: LanguageCode
  domain: string
  facet: string
}


export interface DomainOptions {
  language: LanguageCode
  domain: string
}
