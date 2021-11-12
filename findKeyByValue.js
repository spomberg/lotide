const findKeyByValue = function(sourceObject, valueToFind) {
  let result = undefined;
  const properties = Object.keys(sourceObject);
  
  for (const value of properties) {
    if (valueToFind === sourceObject[value]) {
      result = value;
    }
  }

  return result;
};

module.exports = findKeyByValue;