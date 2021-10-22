const assertArraysEqual = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length) {
    equal = false;
  } else for (let x = 0; x < firstArray.length && equal; x++) {
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  equal ? console.log(`✅✅✅ Assertion Passed:  ${firstArray} === ${secondArray}`) : console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
};

const eqArrays = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length) {
    return false;
  } else for (let x = 0; x < firstArray.length && equal; x++) {
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  return equal;
};

const flatten = function(source) {
  let output = [];

  for (let x = 0; x < source.length; x++) {
    if (!Array.isArray(source[x])) {
      output.push(source[x]);
    } else for (let y = 0; y < source[x].length; y++) {
      output.push(source[x][y]);
    }
  }

  return output;
};

console.log(`The output should be: 1, 2, 3, 4, 5, 6 => ${flatten([1, 2, [3, 4], 5, [6]])}`);
console.log(`The output should be: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 => ${flatten([1, 2, [3, 4], 5, [6], [7, 8, 9, 10]])}`);