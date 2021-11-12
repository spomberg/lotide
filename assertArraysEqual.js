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

module.exports = assertArraysEqual;