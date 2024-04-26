import { getTemplate } from '../../src'

it('it returns template for en', async () => {
  expect(await getTemplate('en')).toBeTruthy()
})

it('it returns template for no', async () => {
  expect(await getTemplate('no')).toBeTruthy()
})
