const without = function(source, itemsToRemove) {
  let output = [];

  for (let x = 0; x < source.length; x++) {
    let match = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        match = true;
      }
    }
    if (!match) {
      output.push(source[x]);
    }
  }
  return output;
};

module.exports = without;