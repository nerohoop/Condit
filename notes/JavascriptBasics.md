## Promises
A promise can be:
* fulfilled - The action relating to the promise succeeded
* rejected - The action relating to the promise failed
* pending - Hasn't fulfilled or rejected yet
* settled - Has fulfilled or rejected

## Functions

## Declarations
* var - Declares a variable, optionally initializing it to a value.
* let - Declares a block-scoped, local variable, optionally initializing it to a value.
* const - Declares a block-scoped, read-only named constant.

## Undefined
* A variable declared using the var or let statement with no assigned value specified has the value of undefined.
* An attempt to access an undeclared variable will result in a ReferenceError exception being thrown.
* You can use undefined to determine whether a variable has a value.
* The undefined value behaves as false when used in a boolean context.

## null vs undefined
undefined means a variable has been declared but has not yet been assigned a value.
On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.
Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object

## Variable scope
* Global scope - when you declare a variable outside of any function.
* Local scope - when you declare a variable within a function.

## Variable hoisting
* You can refer to a variable declared later, without getting an exception.
* However, variables that are hoisted will return a value of undefined.

## Global variables
* Global variables are in fact properties of the global object.

# Data structures and types

## Data types
* Six data types that are primitives:
  * Boolean. true and false.
  * null. A special keyword denoting a null value.
  * undefined. A top-level property whose value is undefined.
  * Number. 42 or 3.14159.
  * String. "Howdy"
  * Symbol (new in ECMAScript 2015).
* Object

## Data type conversion
JavaScript is a dynamically typed language. That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution.

## Comparision Operators
The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.

# Control flow and error handling

## Falsy values
The following values evaluate to false (also known as Falsy values):
* false
* undefined
* null
* 0
* NaN
* the empty string ("")
All other values, including all objects, evaluate to true when passed to a conditional statement.

## Defining functions
```JavaScript
  function myFunc(theObject) {
    theObject.make = 'Toyota';
  }

  var square = function(number) { return number * number; };
```
* Primitive parameters (such as a number) are passed to functions by value
* Object parameters are passed by reference
