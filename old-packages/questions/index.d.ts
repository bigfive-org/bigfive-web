export type Language = {
  id: string;
  text: string;
  translators?: Translator[];
};

export type Question = {
  domain: string;
  facet: number;
  id: string;
  keyed: string;
  num: number;
  text: string;
  choices: Choice[];
};

export type Choice = {
  color: number;
  score: number;
  text: string;
};

export type Item = {
  lang: string;
  shuffle: boolean;
};

export type Info = {
  name: string;
  id: string;
  shortId: string;
  time: number;
  questions: number;
  note: string;
  languages: Language[];
};

export type Translator = {
  name: string;
  githubUser?: string;
  description?: string;
}


export type ChoiceKeyed = {
  plus: Choice[];
  minus: Choice[];
}

export function getItems(lang?: string, shuffle?: boolean): Question[];

export function getInfo(): Info;

export function getChoices(lang?: string): ChoiceKeyed;

export function getQuestions(lang?: string): Question[];
