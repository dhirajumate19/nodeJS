// Memory allocation
// Hoisting
// Execution
// Code parsing
// Scope
// Types of variables
// Types of functions

/**
 * JS Terms
 * 1. Execution Context
 * 2. Creation Phase - Time when engine is scanning or parsing the JS Code
 * 3. Execution Phase - Time when engine is actually running the code
 * 4. Call Stack - Area where JS code is running (Also known as Thread of execution)
 *
 */

var a = 10;
let c = 20;
const d = {};

function getGreetings(uName) {
  return `Welcome ${uName}`;
}

for (let i = 0; i < 10; i++) {
  console.log("I: ", i);
}

console.log("Code is running");

let uName = "Sagar";
console.log("Your name is : ", uName);
