const assertArraysEqual = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length) {
    equal = false;
  } else for (let x = 0; x < firstArray.length && equal; x++) {
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  equal ? console.log(`✅✅✅ Assertion Passed:  ${firstArray} === ${secondArray}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
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

const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === ' ') {
      continue;
    }
    !results[sentence[x]] ? results[sentence[x]] = [x] : results[sentence[x]].push(x);
  }

  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);

