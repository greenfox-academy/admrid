'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(...args) {
  console.log(...args);
}

printer('valami', 5, 87, true)