const findKey = require('../findKey');
const assert = require('chai').assert;

//SAMPLE OBJECTS
const testObject1 = {
  "Battlestar Galactica": {star: 'Starbuck', year: 2004},
  "Lost": {star: "Jack", year: 2004},
  "Friends": {star: "Joey", year: 1994}
};

const testObject2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  it('returns a valid result when testing properties that contain objects with just one property on itself', () => {
    const input = findKey(testObject2, x => x.stars === 2);
    const expected = "noma";
    assert.equal(input, expected);
  })
  it('returns a valid result when testing properties that contain objects with more than one property on itself', () => {
    const input = findKey(testObject1, x => x.year === 2004);
    const expected = "Battlestar Galactica";
    assert.equal(input, expected);
  })
})