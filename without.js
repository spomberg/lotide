const assertArraysEqual = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length){
    equal = false;
  } else for (let x = 0; x < firstArray.length && equal; x++) {
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  equal ? console.log(`✅✅✅ Assertion Passed:  ${firstArray} === ${secondArray}`) : 
  console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
}

const eqArrays = function(firstArray, secondArray) {
  let equal = true;
  if (firstArray.length !== secondArray.length){
    return false;
  } else for (let x = 0; x < firstArray.length && equal; x++) {
    firstArray[x] === secondArray[x] ? equal = true : equal = false;
  }
  return equal;
}

const without = function(source, itemsToRemove) {
  let output = [];

  for (let x = 0; x < source.length; x++) {
    let match = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]){ 
        match = true;
      }
    }
    if (!match) {
      output.push(source[x]);
    }
  }
    return output;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(`The output should be [2, 3] => ${without([1, 2, 3], [1])}`);
console.log(`The output should be ["1", "2"] => ${without(["1", "2", "3"], [1, 2, "3"])}`);
console.log(`The output should be [Claire] => ${without(['Anna', 'Bella', 'Claire'], ['Anna', 'James', 'John', 'Clark', 'Bella'])}`);