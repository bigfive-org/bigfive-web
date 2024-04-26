import { getFacet } from '../../src'

it('returns expected result', async () => {
  const result = await getFacet({ language: 'en', domain: 'a', facet: '6' })
  expect(result).toHaveProperty('text')
})
