/* eslint-disable */
import { strict as assert } from "assert";

// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events. Control flow structures include conditional
// statements, loops, and function calls, which allow for branching and
// repetition of code.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

const answer = 2 + 2;
assert.equal(answer, 4);

if (answer > 4) {
  console.log(">4");
}

if (answer === 4) {
  console.log("=4");
} else {
  console.log("!4");
}

const age = 6;
const likesHavingFun = true;

if (age <= 12 && likesHavingFun) {
  // play at the park
} else if (age > 12 && !likesHavingFun) {
  //be bored
} else {
  //work on hobbies
}

const hasTheSkills = true;
const day = "tuesday";
const hoursWorked = 9;
const totalOvertime = 0.5;
const holidaySeason = false;

//awful version ><
function approveWork() {
  if (
    (hasTheSkills &&
      (day === "tuesday" || (hoursWorked > 8 && totalOvertime < 1))) ||
    holidaySeason
  ) {
    //approve work
  } else {
    //go home
  }
}

//BETTER version - clearer block by block
function approveMoreWork() {
  if (!hasTheSkills) {
    //go home
    return;
  }
  const canWorkOverTime = hoursWorked > 8 && totalOvertime < 1;
  if (!canWorkOverTime) {
    //go home;
    return;
  }

  if (holidaySeason || day === "tuesday") {
    // work
  } else {
    //go home
  }
}

// NEXT BETTER version: using functions

function hasOverTimeHours(hoursWorked: number, totalOvertime: number): boolean {
  const hasHours = hoursWorked > 8 && totalOvertime < 1;
  return hasHours;
}

function isBusyDay(day: string, holidaySeason: boolean): boolean {
  return holidaySeason || day === "tuesday";
}

function approveMoreWorkTwo() {
  if (!hasTheSkills) {
    //go home
    return;
  }

  if (!hasOverTimeHours(hoursWorked, totalOvertime)) {
    //go home;
    return;
  }

  if (!isBusyDay(day, holidaySeason)) {
    // go home
    return;
  }

// you can add more here
// e.g. monthlyMax, isEmployeeLate

  //approve work
  return;
}
