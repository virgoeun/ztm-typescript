/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let n=1;
//postfix
n++; 

//prefix increment
++n;

// assert.equal(n, 2);

n = 5;

// const k = n++ // n & ++ two operation here, first, n(5) save as k (that is why k is not 6 below ) and then ++
// assert.equal(k, 6); // false -> it's 5
// assert.equal(n, 6); // it's true 


const M = ++n // prefix is one operation -> + n and then the whole thing saves as M

assert.equal(M, 6); 


// usually prefix is safer choice without subtle bugs!

n = 5;
const t= --n;
assert.equal(t, 4);

n =5; 
n +=5;
n -=10;

assert.equal(n, 0)
console.log("💖", n)
