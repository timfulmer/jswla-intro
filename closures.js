/**
 * Created by timfulmer on 12/6/15.
 */
"use strict";

// SAMPLE CODE: Some of this code purposefully breaks program execution to
// illustrate what does not work.  This code is commented out below, please
// uncomment to see the fail cases.

// Simplest closure
var globalVariable='global-value';
function closure(){
  console.log(globalVariable);
}
closure();

// Slightly more complicated
function enclosingScope(){
  var innerVariable='inner-value';
  // This is another closure, "closing" over the enclosing variable.
  return function innerScope(){
    console.log(innerVariable);
  }
}
var closureVariable=enclosingScope();
// The function keeps the inner variable around, even though it's not accessible
// any more.
closureVariable();
//console.log(innerVariable);

// Closures can also be used to capture the current value of a variable
function captureValue(variable){
  return function logValue(){
    console.log(variable);
  }
}
var capturedVariable='initial-value',
  capturedVariableClosure=captureValue(capturedVariable);
capturedVariableClosure();
capturedVariable='updated-value';
// The closure remembers what the value was, not what it has been changed to
capturedVariableClosure();

// Changing variables withing the closure can have some interesting affects
function captureAndChangeValue(variable){
  variable='changed-value';
  return function logValue(){
    console.log(variable);
  }
}
var changedVariable='initial-value',
  changedVariableClosure=captureAndChangeValue(changedVariable);
changedVariableClosure();
console.log(changedVariable);
changedVariable='updated-value';
changedVariableClosure();
console.log(changedVariable);
// Basically the two variables are completely different once passed in as the
// argument to a function, then closed over with another function.
