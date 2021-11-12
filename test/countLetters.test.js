const countLetters = require('../countLetters');
const expect = require('chai').expect;

describe('#countLetters', () => {
  it('returns a valid result when testing a sentence', () => {
    const input = countLetters("Lighthouse in the house");
    const expected = { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    expect(input).to.deep.equal(expected);
  })
})
