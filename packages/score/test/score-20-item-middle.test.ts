import { processAnswers } from '../src/index'

const answers = ['E', 'A', 'C', 'N', 'O']
  .flatMap(letter => Array(20).fill({ domain: letter, score: 3 }))
  .reduce((a, b) => a.concat(b), [])

const score = processAnswers(answers)


describe('validate facet', () => {
  it('should return true', () => {
    expect(score.E.score).toEqual(60);
    expect(score.A.score).toEqual(60);
    expect(score.C.score).toEqual(60);
    expect(score.N.score).toEqual(60);
    expect(score.O.score).toEqual(60);
  })
})
