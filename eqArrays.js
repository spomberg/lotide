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
};

module.exports = eqArrays;