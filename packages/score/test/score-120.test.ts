import { processAnswers } from '../src/index'
import answers from './data/120-test-results.json'


const score = processAnswers(answers.testResult.answers)


describe('validate facet', () => {
  it('should return true', () => {
    // Openness
    expect(score.O.score).toEqual(70);
    expect(score.O.result).toEqual("neutral");

    // Extraversion
    expect(score.E.score).toEqual(79);
    expect(score.E.result).toEqual("neutral");

    // Agreeableness
    expect(score.A.score).toEqual(65);
    expect(score.A.result).toEqual("neutral");

    // Conscientiousness
    expect(score.C.score).toEqual(75);
    expect(score.C.result).toEqual("neutral");

    // Neuroticism
    expect(score.N.score).toEqual(62);
    expect(score.N.result).toEqual("neutral");
  })
})
