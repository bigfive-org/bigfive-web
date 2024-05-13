const test = require('ava')
const { getInfo } = require('../../index')

test('returns data', t => {
  t.truthy(getInfo(), 'result ok')
})

test('translators are credited', t => {
  const { languages } = getInfo()
  languages.forEach(language => {
    if (language.translators) {
      language.translators.forEach(translator => {
        t.truthy(translator.name !== undefined)
      })
    }
  })
})
