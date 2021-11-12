const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

const testArray = ['Alex', 'Barry', 'Claire', 'Danny'];
assertArraysEqual(takeUntil(testArray, x => x === 'Danny'), ['Alex', 'Barry', 'Claire']);
assertArraysEqual(takeUntil(testArray, x => x.length === 5), ['Alex']);