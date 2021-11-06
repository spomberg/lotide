const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if(keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } 
    if(!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if(typeof object1[key] === "object" && typeof object2[key] === "object") {
        if (eqObjects(object1[key], object2[key])) {
          delete object1[key];
          delete object2[key];
          return eqObjects(object1, object2);
        } else return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)// => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }, { a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }), true) // => true
assertEqual(eqObjects({ a: { y: {x: 1, d: 2}, z: 1 }, b: 2 }, { a: { y: {a: 1, b: 2}, z: 1 }, b: 3 }), false) // => false

module.exports = eqObjects;