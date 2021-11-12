const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

describe('#findKeyByValue', () => {
  it('returns a valid result when the value is present', () => {
    const input = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = 'drama';
    assert.equal(input, expected);
  })
  it('returns undefined when the value is not present', () => {
    const input = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.equal(input, expected);
  })
})