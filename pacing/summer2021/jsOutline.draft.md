# Why do we have programming languages?

# Computer vs Human Languages

# Why learn Javascript now?

# Javascript
* Where did it come from?
* Why is it still so popular?
    * You can do anything with it
    * etc

# What is it really?
* ECMA International
* The spec (ECMAScript Launguage Specification)
    * https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
    * how to use it
    * we are primarily going to follow the spec and become expert at reading and understanding it

# The Basics

# Types (general)
* different kinds of commonly encountered data in everyday life (numeric, alpha, list, table)

## The JS types
1. number
    * NaN
    * zero
    * negative zero
    * infinity
    * negative infinity
2. bigint
3. string
    * single/double quotes
    * backticks
4. boolean
5. null
6. undefined
7. object
    * key/value pairs
8. symbol
        * guaranteed unique identifier

## typeof operator
* typeof x
* typeof(x)

## null vs undefined
* many ways to say empty

## REPL
* what is a REPL?
* chrome devtools as a repl
* using node locally as a repl
* quokka in vscode as a repl
    
## Abstract Operations
* ToPrimitive
* ToNumber
* ToString

## Coercion
    * how types are converted into each other

## Operations
* Equality
    * strict vs coerced
* Arithmetic
* Logical
* Order of Precedence

---
## Static vs Dynamic Typing
* Duck Typing
* Pros/Cons

## Typescript
* hybrid of static typing for javascript
* pros/cons
* comparison demo

---

# Variable Basics
* a label to a memory location
* just like you did in Algebra
* declaration
    * var
    * let
    * const
* assignment


# Scope
## Your code is not what you think
* bytecode
* demo of simple function to bytecode
    * node --print-bytecode file.js

* definitions of scope and visibility

## Be the compiler
* definition of execution context
* how javascript compiles and executes your code
* teach the "be the compiler" game
* play "be the compiler" to setup an execution context and then execute a simple program 

## Different Named Scopes
* Global scope
* Lexical scope
* Function scope
* Block scope

## Strict Mode
* https://262.ecma-international.org/11.0/#sec-strict-mode-code
* discuss the most glaring differences
    * undeclared variables
---

# Errors
## Understanding common error types
* ReferenceError
* TypeError

# Functions: Basic
* what is a function?
* why do we use them?
* learn the parts of a function
    * name
    * arguments/parameters
    * return value
    * definition ```function signature```
* how functions are defined
    * function definition
    * function expression
    * anonymous functions
* how functions are evaluated
* discussion: named vs anonymous functions

# Workshop: Running Functions
* lots of practice creating and running different functions in the node context

# Arrow Function Syntax
* arrow function basics

# Functions: IIFE
* discuss the IIFE pattern

# Hoisting
* explain hoisting and how we already know what it is b/c we learned how the compiler works
* let and hoisting

# functions as arguments
* definition: first class functions
* closures
* callbacks

# Data structures
* what they are as a very brief overview. just enough to understand 
* data structure CRUD operations
* memory complexity of data structures
* time complexity of data structures
* additional resources to learn about BigO
* array
* hashtable

# Objects
* keys and values
* nesting

# Arrays
* how we store lists in javascript
* the index starts at 0
* a special kind of object
* typeof array == 'object'
* isArray

# Modules
* what is a module?
* imports and exports
* revealing module pattern

# "this" keyword
* understanding ```this```
* Binding with call, apply, and bind
* arrow functions and ```this```

# Constructor pattern
* ```new``` keyword
* what it does
* canonical Car example

# workshop: Person example

# Classes
* classes in other languages
    * classical inheritance
* javascript doesn't do any of that
* the ```class``` keyword
* static vs instance methods and variables

# Prototypes
* the javascript way
* the prototype chain
* exploring common prototypes like ```{}``` and ```[]```
* prototypal inheritance
* swapping prototypes

# Common Bugs and ways to stop them
* variable masking/shadowing
* coercion based errors
    * nullish coalescence
    * optional chaining
