import { getInfo } from '../../src'

it('returns data', () => {
  expect(getInfo()).toHaveProperty('languages')
})
