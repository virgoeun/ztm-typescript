/* eslint-disable */
import { strict as assert } from "assert";

//Not (switching true & false )
const writing = true;
const reading = !writing;
assert.equal(reading, true);

// OR
// Pick 1 movie
const rating =9;
const favoriteMovie =false;

//compound boolean with OR (either one of them is true...)
const suggestMovie = rating > 8 || favoriteMovie;
//assert.equal(suggestMovie, true);

//AND (both should be satisfied)
const age =18;
const isTeenager = age >=13 && age<20;
// assert.equal(isTeenager, true);


//our Package
const packageWeight =30;
const packageLength=50;
const feeExemption = false; // there is no feeExemption by default 


const extraFee = !feeExemption && (packageWeight>25 || packageLength>40);
// (!)feeExemption evaluates to "true" when feeExemption is false
// So, if feeExemption is false (indicating there is no fee exemption),
// because if it's false we stop the function 
// so we set it up as false (no fee Ex)
// then we confirm it's true  
// so if we set up true by default, if we negate the boolean, then it's false
// then it stops there, not going to the latter logic part

