/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables


const yes:boolean = true;
const amount :number = 2+2;
const myName ="Jason";
const hello:string = `hello ${myName}`;
const powerLevel:bigint = 9000n +1n;


function sum(a:number, b:number):number  {
const total = a+b;
return total;

}

const one =sum(1, 0);
console.log("one:", one)

const two =sum(1,2);
console.log("two:", two)