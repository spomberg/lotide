const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length) return false;
    
  for (let x = 0; x < firstArray.length && equal; x++) {
    if (Array.isArray(firstArray[x])) {
      if (eqArrays(firstArray[x], secondArray[x])) {
        continue;
      } else return false;
    }
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  return equal;
}

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([[2, [4, [5, 6]]], [4]], [[2, [4, [5, 6]]], [4]]), true) // => true
assertEqual(eqArrays([[2, [4, [5, 6]]], [4]], [[2, [4, [5, 7]]], [4]]), false) // => false
assertEqual(eqArrays([[2, [4, [5, [6, 7 , 8, 9]]]], [4]], [[2, [4, [5, [6, 7 , 8, 7]]]], [4]]), false) // => false
assertEqual(eqArrays([[2, [4, [5, [6, 7 , [8, "a", "b", ["c"]], 9]]]], [4]], [[2, [4, [5, [6, 7 , [8, "a", "b", ["c"]], 9]]]], [4]]), true) // => true