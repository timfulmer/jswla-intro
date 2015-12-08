/**
 * Created by timfulmer on 12/6/15.
 */

// SAMPLE CODE: Some of this code purposefully breaks program execution to
// illustrate what does not work.  This code is commented out below, please
// uncomment to see the fail cases.

// Variables in computer science are an alphanumeric name associated with a
// memory location, which may or may not contain a value.

// Variables in JavaScript must be declared before being used.

// This causes an error and stops execution of the program.
//console.log(hasNotBeenDeclared);

// Declaring a variable tells the machine to reserve some memory for it.  This
// is also referred to as a "pointer".
var declaredVariable;
console.log(declaredVariable);

// Assigning a value to a variable puts something into memory.
declaredVariable='something';
// Using a variable in code causes the machine to "dereference" the variable,
// following the pointer and accessing the value memory.
console.log(declaredVariable);

// We can also unset the value of a variable, setting it to point back to the
// undefined value.
declaredVariable=undefined;
console.log(declaredVariable);

// There is also a null value.  Null is much like undefined, except it means
// the variable as been defined.
declaredVariable=null;
console.log(declaredVariable);

// JavaScript is what's called a "Loosely type language", variables can hold all
// kinds of information
declaredVariable=1;
console.log(declaredVariable);
declaredVariable=1.5;
console.log(declaredVariable);
declaredVariable=true;
console.log(declaredVariable);