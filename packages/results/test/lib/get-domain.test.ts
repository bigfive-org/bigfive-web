import { getDomain } from '../../src'

it('returns expected result', () => {
  const result = getDomain({ language: 'en', domain: 'o' })
  expect(result).toBeTruthy()
})
