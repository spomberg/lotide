const assertArraysEqual = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length){
    equal = false;
  } else for (let x = 0; x < firstArray.length && equal; x++) {
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  equal ? console.log(`✅✅✅ Assertion Passed:  ${firstArray} === ${secondArray}`) : 
  console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
};

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
const testArray = ['Time', 'to', 'make', 'another', 'test']; 
assertArraysEqual(map(testArray, word => word.toUpperCase()), ['TIME', 'TO', 'MAKE', 'ANOTHER', 'TEST']);
assertArraysEqual(map(testArray, word => word.length), [4, 2, 4, 7, 4]);
assertArraysEqual(map(testArray, word => word[0]), ['T', 't', 'm', 'a', 't']);