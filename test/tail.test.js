const assertEqual = require('../assertEqual');
const tail = require('../tail');

let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words).length, 2);

words = ["Yo Yo"];
assertEqual(tail(words).length, 0);

words = [];
assertEqual(tail(words).length, 0);