/**
 * Created by timfulmer on 12/6/15.
 */
"use strict";

// SAMPLE CODE: Some of this code purposefully breaks program execution to
// illustrate what does not work.  This code is commented out below, please
// uncomment to see the fail cases.

// Let's say we have some code to add one
var addOne=1;
addOne=addOne+1;
console.log(addOne);

// Now we want to add two, we could do
var addTwo=1;
addTwo=addTwo+2;
console.log(addTwo);

// The two chunks of code above look very similar, let's try to use a function
// This function is named, so we can find it later
function add(value,increment){
  return value+increment;
}
// Then we execute the function with ()
console.log(add(1,1));
console.log(add(1,2));

// A function is a top-level object in JavaScript, it can be assigned to a
// variable on it's own.
var functionVariable=add;
// Logging a function shows it's name
console.log(functionVariable);
// Calling toString on a function lists it's definition
console.log(functionVariable.toString());
// A variable pointing to a function can also be executed like a function name
console.log(functionVariable(3,3));

// We can also execute a function immediately, by wrapping it with parenthesis
// Iife's do not need to be named, but it makes it easier to find it in error
// stacks later.
(function iife(variable,stop){
  console.log(variable);
  if(!stop){
    // functions can be invoked recursively
    console.log(iife('recursive invocation',true));
  }
  // An iife logs it's return value
  return 'done';
})('immediately invoked function execution');
// An iife is not available outside it's own scope
//iife('invoked later');