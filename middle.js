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

module.exports = middle;