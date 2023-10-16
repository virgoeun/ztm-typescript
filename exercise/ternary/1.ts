// Using at least one ternary operator, create a program that can convert
// Celsius and Fahrenheit temperatures.
//
// To convert °C to °F: (°C * 1.8) + 32
// To convert °F to °C: (°F - 32) / 1.8
//
// To confirm that your program works properly, do the following:
// 1. convert 25°C to °F, and assert that the value is 77
// 1. convert 68°F to °C, and assert that the value is 20

import { strict as assert } from "assert";

function toFah(degreeC: number): number {
  return degreeC * 1.8 + 32;
}

function toCel(degreeF: number): number {
  return (degreeF - 32) / 1.8;
}

function converter(unit: "C" | "F", temp: number): number {
  return unit === "C" ? toFah(temp) : toCel(temp);
}
assert.equal(converter("C", 25), 77);
assert.equal(converter("F", 68), 20);
