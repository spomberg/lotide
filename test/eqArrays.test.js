const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([[2, [4, [5, 6]]], [4]], [[2, [4, [5, 6]]], [4]]), true) // => true
assertEqual(eqArrays([[2, [4, [5, 6]]], [4]], [[2, [4, [5, 7]]], [4]]), false) // => false
assertEqual(eqArrays([[2, [4, [5, [6, 7 , 8, 9]]]], [4]], [[2, [4, [5, [6, 7 , 8, 7]]]], [4]]), false) // => false
assertEqual(eqArrays([[2, [4, [5, [6, 7 , [8, "a", "b", ["c"]], 9]]]], [4]], [[2, [4, [5, [6, 7 , [8, "a", "b", ["c"]], 9]]]], [4]]), true) // => true