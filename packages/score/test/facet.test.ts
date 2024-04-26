import { processAnswers } from '../src/index'
import facetData from './data/facet-test-data.json'
import facetExpected from './data/facet-test-result.json'

describe('validate facet', () => {
  it('should return true', () => {
    const result = processAnswers(facetData);
    expect(result).toEqual(facetExpected);
  });
});
