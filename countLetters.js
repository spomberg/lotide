const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(input) {
  let output = {};

  for (let character of input) {
    if (character === ' ') {
      continue;
    }

    !output[character] ? output[character] = 1 : output[character]++;
  }

  return output;
};

console.log(countLetters('lighthouse in the house'));
console.log(countLetters('Hello World'));

