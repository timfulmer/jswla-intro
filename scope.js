/**
 * Created by timfulmer on 12/6/15.
 */
'use strict';

// SAMPLE CODE: Some of this code purposefully breaks program execution to
// illustrate what does not work.  This code is commented out below, please
// uncomment to see the fail cases.

// Three scopes are available to us in modern JavaScript: global, function and
// block scope

// Global scope is the top level scope.  This is the same as window scope in a
// browser
var globalVariable='global-value';
console.log(globalVariable);

// Global variables are available inside other functions
function globalFunction(){
  console.log(globalVariable);
}
globalFunction();

// Be careful with global variables, strange things can happen
function overwriteGlobalVariable(){
  // Oops, I accidentally used the same name as a global
  var globalVariable='function-value';
  // Where did my global value go?!
  console.log(globalVariable);
}
overwriteGlobalVariable();

// Then there is function scope
function functionScope(){
  var functionVariable='function-value';
  console.log(functionVariable);
}
functionScope();
// Variables defined in function scope are only available within the function
//console.log(functionVariable);

// All scopes are nested, inheriting what is above
function outerFunction(){
  var outerFunctionVariable='outer-function-value';
  console.log(outerFunctionVariable);
  function innerFunction(){
    var innerFunctionVariable='inner-function-value';
    console.log(innerFunctionVariable);
    console.log(outerFunctionVariable);
  }
  innerFunction();
  // Variables declared inside inner functions are also not visible from
  // enclosing functions
  //console.log(innerFunctionVariable);
}
outerFunction();
// Inner functions are also not visible outside the enclosing function
//innerFunction();

// Variables declared with var are visible outside of code blocks.  Declaring a
// variable inside a code block at the global level makes it a global variable.
if(true){
  var codeBlockVariable='code-block-value';
}
console.log(codeBlockVariable);

// In fact, any variable declared is "hoisted" to the top of it's scope
console.log(hoistedCodeBlockVariable);
if(true){
  var hoistedCodeBlockVariable='code-block-value';
}
console.log(hoistedCodeBlockVariable);

// ECMA6 gives us the let keyword, so block scope can act like function scope,
// without breaking old JavaScript apps
if(true){
  let blockScopeVariable='block-scope-value';
  console.log(blockScopeVariable);
}
//console.log(blockScopeVariable);

// Block scope variables are not hoisted like global and function scoped
// variables
if(true){
  //console.log(hoistedBlockScopeVariable);
  let hoistedBlockScopeVariable='hoisted-block-scope-value';
  console.log(hoistedBlockScopeVariable);
}