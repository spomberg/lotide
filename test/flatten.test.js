const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('flats a one level array', () => {
    const input = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(input, expected);
  })
})