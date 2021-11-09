const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [4, 5] when testing the array [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    assert.deepEqual(middle(input), [4, 5]);
  }),

  it("returns [3] when testing the array [1, 2, 3, 4, 5]", () => {
    const input = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(input), [3]);
  }),

  it("returns an empty array when testing an array with only two elements", () => {
    const input = [1, 2];
    assert.deepEqual(middle(input), []);
  })
});