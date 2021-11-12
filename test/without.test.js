const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(`The output should be [2, 3] => ${without([1, 2, 3], [1])}`);
console.log(`The output should be ["1", "2"] => ${without(["1", "2", "3"], [1, 2, "3"])}`);
console.log(`The output should be [Claire] => ${without(['Anna', 'Bella', 'Claire'], ['Anna', 'James', 'John', 'Clark', 'Bella'])}`);