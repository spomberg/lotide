const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === ' ') {
      continue;
    }
    !results[sentence[x]] ? results[sentence[x]] = [x] : results[sentence[x]].push(x);
  }

  return results;
};

module.exports = letterPositions;