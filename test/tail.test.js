const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [Lighthouse, Labs] when running tails against [Yo Yo, Lighthouse, Labs]", () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(input), ["Lighthouse", "Labs"]);
  })
});