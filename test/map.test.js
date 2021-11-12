const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const testArray = ['Time', 'to', 'make', 'another', 'test']; 
assertArraysEqual(map(testArray, word => word.toUpperCase()), ['TIME', 'TO', 'MAKE', 'ANOTHER', 'TEST']);
assertArraysEqual(map(testArray, word => word.length), [4, 2, 4, 7, 4]);
assertArraysEqual(map(testArray, word => word[0]), ['T', 't', 'm', 'a', 't']);