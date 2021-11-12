const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('returns true when testing two identical multi-level arrays', () => {
    const input = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    const expected = true;
    assert.equal(input, expected);
  })
  it('returns false when testing two different multi-level arrays', () => {
    const input = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    const expected = false;
    assert.equal(input, expected);
  })
  it('returns true when testing two equal deep-level arrays', () => {
    const input = eqArrays([[2, [4, [5, 6]]], [4]], [[2, [4, [5, 6]]], [4]]);
    const expected = true;
    assert.equal(input, expected);
  })
  it('returns false when testing two different deep-level arrays', () => {
    const input = eqArrays([[2, [4, [5, 6]]], [4]], [[2, [4, [5, 7]]], [4]]);
    const expected = false;
    assert.equal(input, expected);
  })
  it('returns true when testing two equal even deeper arrays', () => {
    const input = eqArrays([[2, [4, [5, [6, 7 , [8, "a", "b", ["c"]], 9]]]], [4]], [[2, [4, [5, [6, 7 , [8, "a", "b", ["c"]], 9]]]], [4]]);
    const expected = true;
    assert.equal(input, expected);
  })
})