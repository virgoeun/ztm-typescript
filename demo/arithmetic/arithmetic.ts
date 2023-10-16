/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const inf = 1/0;
assert.equal(inf, Infinity);

const naN =0/0;
assert(isNaN(naN));


const abs = Math.abs(-5); //5
console.log("🚀 abs:", abs)

const pi = Math.PI
console.log("🚀 pi:", pi)

