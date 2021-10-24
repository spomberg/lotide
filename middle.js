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

const middle = function (array) {
  let output = [];
  
  if (array.length <= 2) {
    return output;
  }
  
  if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1], array[array.length / 2]);
  } else output.push(array[Math.floor(array.length / 2)]); 

  return output;
}

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));