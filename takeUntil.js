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

const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) break;
    result.push(item);
  }
  return result;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

const testArray = ['Alex', 'Barry', 'Claire', 'Danny'];
assertArraysEqual(takeUntil(testArray, x => x === 'Danny'), ['Alex', 'Barry', 'Claire']);
assertArraysEqual(takeUntil(testArray, x => x.length === 5), ['Alex']);