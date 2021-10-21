const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  } else return array.slice(1);
};

let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words).length, 2);

words = ["Yo Yo"];
assertEqual(tail(words).length, 0);

words = [];
assertEqual(tail(words).length, 0);