const test = require('ava')
const { getInfo, getTranslators } = require('../../index')

test('returns data', t => {
  t.truthy(getInfo(), 'result ok')
})

test('translators are credited', t => {
  const translators = getTranslators()
  translators.forEach(translator => {
    t.truthy(translator.name !== undefined)
    t.truthy(translator.language !== undefined)
  })
})
