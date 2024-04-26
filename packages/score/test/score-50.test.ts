import { processAnswers } from '../src/index'
import answers from './data/50-test-results.json'


const score = processAnswers(answers)


describe('validate facet', () => {
  it('should return true', () => {
    // Openness
    expect(score.O.score).toEqual(33);
    expect(score.O.result).toEqual("neutral");

    // Extraversion
    expect(score.E.score).toEqual(31);
    expect(score.E.result).toEqual("neutral");

    // Agreeableness
    expect(score.A.score).toEqual(30);
    expect(score.A.result).toEqual("neutral");

    // Conscientiousness
    expect(score.C.score).toEqual(31);
    expect(score.C.result).toEqual("neutral");

    // Neuroticism
    expect(score.N.score).toEqual(21);
    expect(score.N.result).toEqual("low");

  })
})
