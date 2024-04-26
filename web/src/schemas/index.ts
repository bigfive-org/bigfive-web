import { z } from 'zod';

export const testSchema = z.object({
  testId: z.string(),
  lang: z.string(),
  invalid: z.boolean(),
  answers: z
    .array(
      z.object({
        id: z.string(),
        answer: z.string(),
        domain: z.string(),
        facet: z.number(),
        score: z.number()
      })
    )
    .nonempty(),
  timeElapsed: z.number(),
  dateStamp: z.date()
});

export const testId = z.object({
  id: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, 'Invalid hexadecimal ID')
    .min(24)
    .max(24)
});
