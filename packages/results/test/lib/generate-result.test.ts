import { generateResult, getTemplate } from '../../src'
import languages from '../../src/data/languages'
import { type Scores } from '../../src/types'
import scores from '../data/scores.json'

it('it returns expected result for no', async () => {
  const template = await getTemplate('no')
  const result = generateResult(scores as Scores, template)
  expect(result).toBeTruthy()
})

it('it returns expected result for all languages', async () => {
  for (const language of languages) {
    const template = await getTemplate(language.code)
    const result = generateResult(scores as Scores, template)
    expect(result).toBeTruthy()
  }
})
