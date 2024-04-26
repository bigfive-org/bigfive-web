import languages, { Language, LanguageCode } from './data/languages';
import path from 'path';

export async function getItems(languageCode: LanguageCode = 'en'): Promise<Question[]> {
  try {
    const questions: Question[] = (await import(path.join(__dirname, 'data', languageCode, 'questions'))).default;
    const choices: ChoiceKeyed[] = (await import(path.join(__dirname, 'data', languageCode, 'choices'))).default;

    return questions.map((question, i) => ({
      ...question,
      num: ++i,
      // @ts-ignore
      choices: choices[question.keyed]
    }))
  } catch (error) {
    console.log(error)
    throw new Error(`Inventory ./data/${languageCode}/questions not found. Try another language input.`)
  }
}

export function getInfo(): Info {
  return {
    name: "Johnson's IPIP NEO-PI-R",
    id: 'johnson-120-ipip-neo-pi-r',
    shortId: 'b5-120',
    time: 10,
    questions: 120,
    languages
  }
}

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

type ChoiceKeyed = {
  plus: Choice[];
  minus: Choice[];
}

export type Info = {
  name: string;
  id: string;
  shortId: string;
  time: number;
  questions: number;
  languages: Language[]
};
