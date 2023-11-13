/* eslint-disable */

// A `while` loop executes the body while (as long as) some boolean expression
// is `true`. It is your responsibility to manage when and how the loop exits.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


let i =0;
while (i<=5) {
    console.log(`${i}`)
    i+=1;
}

 i = 1;
while (i <= 5) {
  console.log(`${i}`);
break;
}

console.log("00")

 i = 1;
 while (i <= 5) {
   
 if (i===4) {
    i+=1;
     continue;
    
 }
 console.log(`${i}`);
  i += 1;
 }

 console.log("stop")

 i = 1;
 while(true) {

    if(i>=30) {
        console.log("out of infinite loop")
        break;
    }
    i+=1;
 }