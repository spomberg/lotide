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

module.exports = eqObjects;