import { getInfo, getItems } from '../src/index'

describe('questions module tests', () => {
  it('it should get info about the test', () => {
    const info = getInfo()
    expect(info).toBeDefined()
  })

  it('it should get test items', async () => {
    const info = getInfo()
    const items = await getItems('en')
    expect(items.length).toBe(info.questions)
  })

  it('should fetch items for all languages', async () => {
    const { languages } = getInfo()
    const fetchPromises = languages.map(async ({ code }) => {
      const items = await getItems(code)
      expect(items).toBeDefined()
    })

    await Promise.all(fetchPromises)
  })

  it('validation of question ids across languages', async () => {
    const languages = getInfo().languages.map(({ code }) => code)
    const questions = await Promise.all(languages.map(async languageId => await getItems(languageId)))
    const ids: string[][] = questions.map((question) => question.map(q => q.id))

    ids.reduce((previous: string[], current: string[]) => {
      expect(previous).toEqual(current)
      return current
    })
  })
})
