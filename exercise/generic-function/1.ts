// Write a generic function that can locate the first occurrence of an item in
// an array. The function should accept an array of any type as a parameter,
// along with an element to locate. If the element is found in the array, then
// the function should return the index of where that element exists in the
// array. If the element does not exist in the array, then the function should
// return `undefined`.
//
// To test that your function works properly, perform these steps:
// 1. Run your function with the existing `numbers` array and try to find the element 3
// 2. Assert that the index returned is 2
// 3. Run your function with the existing `numbers` array and try to find the element 6
// 4. Assert that your function returns `undefined`

import { strict as assert } from "assert";

function findElement<T>(array: T[], element: T): number | undefined {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return undefined;
}

// Example usage
const numbers: number[] = [1, 2, 3, 4, 5];
const index1 = findElement(numbers, 3);
const index2 = findElement(numbers, 6);

assert.equal(index1, 2);
assert.equal(index2, undefined);
