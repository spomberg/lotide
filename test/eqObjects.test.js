const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true when testing two equal one-level objects', () => {
    const input = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    const expected = true;
    assert.equal(input, expected);
  })
  it('returns false when testing two different one-level objects', () => {
    const input = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    const expected = false;
    assert.equal(input, expected);
  })
  it('returns false when testing two different two-level objects', () => {
    const input = eqObjects({ a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }, { a: 1, b: 2 });
    const expected = false;
    assert.equal(input, expected);
  })
  it('returns true when testing two equal two-level objects', () => {
    const input = eqObjects({ a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }, { a: { y: {x: 1, d: 2}, z: 1 }, b: 2 });
    const expected = true;
    assert.equal(input, expected);
  })
  it('returns false when testing two different two-level objects', () => {
    const input = eqObjects({ a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }, { a: { y: {a: 1, b: 2}, z: 1 }, b: 3 });
    const expected = false;
    assert.equal(input, expected);
  })
})