/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

const courseName = "typescript";
const amount = 10.5;
const oneThousan = 1e3;

const allPermissions = 0o777;
const hexByte = 0xff;
const binary = 0b0100001;
const bigInt = 9000n;

const yes = true;
const no = false;

const missing = undefined;//completely missing 
const empty = null; // we KNOW it's missing

console.log(typeof empty); //object
console.log(typeof missing); // undefined

let someNum = 0; // for reassigning (not const)
someNum =1;
someNum=2;

// let someNum=5 
// this doesn't work since we declared already above

//but inside {}, it's considered different block so it's allowed to redeclare with different value like this 👇
{
let someNum=5;
}

//it's useful to test with the same variable name

{
    let someNum=5;
    //test code... 
}

{
    let someNum=4;
    //test code... 
}

{
    let someNum=10;
    //test code... 
}

//uninitialized variable (just variable declaration)

let hello;

hello = "hi";
hello = "hey";
hello = "hiya";
//later on, we would pick up by logic

// const whoops; (error)
//this isn't working! 
//const has to be initialized immediately!

