const expect = require('chai').expect;
const letterPositions = require('../letterPositions');

// assertArraysEqual(letterPositions('hello').e, [1]);

describe('#letterPositions', () => {
  it('returns a valid result when searching one word string', () => {
    const input = letterPositions('hello');
    const expected = {h: [0], e: [1], l: [2, 3], o: [4]};
    expect(input).to.eql(expected);
  })
})