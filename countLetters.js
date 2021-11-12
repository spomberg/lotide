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

module.exports = countLetters;