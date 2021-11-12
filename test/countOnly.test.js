const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('returns 1 when the item is included in the array once', () => {
    const input = result1['Jason'];
    const expected = 1;
    assert.equal(input, expected);
  })
  it('returns undefined when the item is not included in the array', () => {
    const input = result1['Karima'];
    const expected = undefined;
    assert.equal(input, expected);
  })
  it('returns 2 when the item is included twice in the array', () => {
    const input = result1['Fang'];
    const expected = 2;
    assert.equal(input, expected);
  })
})