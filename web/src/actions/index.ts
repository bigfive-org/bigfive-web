'use server';

import { connectToDatabase } from '@/db';
import { ObjectId } from 'mongodb';
import { B5Error, DbResult, Feedback } from '@/types';
import calculateScore from '@bigfive-org/score';
import generateResult, {
  getInfo,
  Language,
  Domain
} from '@bigfive-org/results';
import nodemailer from 'nodemailer';
import { getItems, getChoices } from '@bigfive-org/questions';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  secure: true,
  port: 465,
  auth: {
    user: 'hello@bigfive-test.com',
    pass: process.env.ZOHO_API_KEY
  }
});

const collectionName = process.env.DB_COLLECTION || 'results';
const resultLanguages = getInfo().languages;

export type Report = {
  id: string;
  timestamp: number;
  availableLanguages: Language[];
  language: string;
  results: Domain[];
};

export async function getTestResult(
  id: string,
  language?: string
): Promise<Report | undefined> {
  'use server';
  try {
    const query = { _id: new ObjectId(id) };
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const report = await collection.findOne(query);
    if (!report) {
      console.error(`The test results with id ${id} are not found!`);
      throw new B5Error({
        name: 'NotFoundError',
        message: `The test results with id ${id} is not found in the database!`
      });
    }
    const selectedLanguage =
      language ||
      (!!resultLanguages.find((l) => l.id == report.lang) ? report.lang : 'en');
    const scores = calculateScore({ answers: report.answers });
    const results = generateResult({ lang: selectedLanguage, scores });
    return {
      id: report._id.toString(),
      timestamp: report.dateStamp,
      availableLanguages: resultLanguages,
      language: selectedLanguage,
      results
    };
  } catch (error) {
    if (error instanceof B5Error) {
      throw error;
    }
    throw new Error('Something wrong happend. Failed to get test result!');
  }
}

export async function saveTest(testResult: DbResult) {
  'use server';
  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(testResult);
    return { id: result.insertedId.toString() };
  } catch (error) {
    console.error(error);
    throw new B5Error({
      name: 'SavingError',
      message: 'Failed to save test result!'
    });
  }
}

export type FeebackState = {
  message: string;
  type: 'error' | 'success';
};

export async function saveFeedback(
  _: FeebackState,
  formData: FormData
): Promise<FeebackState> {
  'use server';
  const feedback: Feedback = {
    name: String(formData.get('name')),
    email: String(formData.get('email')),
    message: String(formData.get('message'))
  };
  try {
    const db = await connectToDatabase();
    const collection = db.collection('feedback');
    await collection.insertOne({ feedback });
    return {
      message: 'Sent successfully!',
      type: 'success'
    };
  } catch (error) {
    return {
      message: 'Error sending feedback!',
      type: 'error'
    };
  }
}

export type EmailState = {
  message: string;
  type: 'error' | 'success';
};

export async function sendEmail(
  _: EmailState,
  formData: FormData
): Promise<EmailState> {
  'use server';
  const email = {
    to: String(formData.get('to')),
    message: String(formData.get('message'))
  };
  try {
    const msg = {
      to: email.to,
      from: 'hello@bigfive-test.com',
      replyTo: 'hello@bigfive-test.com',
      subject: 'BigFive Test Results',
      html: email.message
    };
    await transporter.sendMail(msg);
    return {
      message: 'Sent successfully!',
      type: 'success'
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Error sending email!',
      type: 'error'
    };
  }
}

export type TranslationState = {
  message: string;
  type: 'error' | 'success';
};

export const generateTranslation = async (
  _: TranslationState,
  formData: FormData
): Promise<TranslationState> => {
  'use server';

  const choices = getChoices('en');
  const plusKeyedChoices = choices.plus.map((choice) => ({
    ...choice,
    text: formData.get(choice.score.toString())
  }));

  const minusKeyedChoices = choices.minus.map((choice) => ({
    ...choice,
    text: formData.get(choice.score.toString())
  }));

  const translatedChoices = {
    plus: plusKeyedChoices,
    minus: minusKeyedChoices
  };

  const translatedItems = getItems('en').map((item) => {
    const { choices, ...rest } = item;
    return {
      ...rest,
      text: formData.get(item.id) as string
    };
  });

  try {
    const db = await connectToDatabase();
    const collection = db.collection('translations');
    await collection.insertOne({
      name: String(formData.get('name')),
      email: String(formData.get('email')),
      language: String(formData.get('language')),
      choices: translatedChoices,
      questions: translatedItems
    });
    return {
      message: 'Thanks <3 Saved successfully!',
      type: 'success'
    };
  } catch (error) {
    return {
      message: 'Error saving',
      type: 'error'
    };
  }
};
