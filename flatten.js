const flatten = function(source) {
  let output = [];

  for (let x = 0; x < source.length; x++) {
    if (!Array.isArray(source[x])) {
      output.push(source[x]);
    } else for (let y = 0; y < source[x].length; y++) {
      output.push(source[x][y]);
    }
  }

  return output;
};

module.exports = flatten;