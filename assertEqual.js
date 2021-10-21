const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  } else console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("XXXX", "XXXX");
assertEqual("Xxxx", "XXxx");
assertEqual(1111, 1111);
assertEqual(109977, 1456);