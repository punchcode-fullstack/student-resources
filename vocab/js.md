# keyword: Aka "reserved words"

- special words in js to perform an operation (like for to make a for loop that repeats code)

# syntax:

- a set of rules in programming which use a set of symbols to construct a program

# error:

- syntax errors (aka parsing error) - mistakes in syntax

```js
if () { // syntax error: missing a closing bracket
```

- runtime errors (aka exceptions) - for example trying to call a method that does not exist

```js
'a'.doTheThing()
```

- logical errors - a mistake of logic a programmer writes which results in an incorrect program

```
function average(a, b) {
    return a + b / 2     // should be (a + b) / 2 (dont forget PEMDAS)
}
```

# operator precedence

- order in which operators are evaluated (you can always put some parentheses if you are not sure)

# variable (var let const)

- named storage - a way in a programming language to store values

```js
var x = 5
let foo = [1, 2, 3]
const add = function (a, b) {
  return a + b
}
```

# operator (assignment, comparison, not, logical)

- An operator performs some operation on single or multiple operands (data value) and produces a result.

```js
const foo = 5
typeof foo // produces the string "number"
const x = 10 + 20 // add operator produces the number 30
```

# loose equality (==)

- Loose equality compares two values for equality, after converting both values to a common type loose equality

```js
5 == '5' // true
```

# strict equality (===)

- Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.

```js
5 === '5' // false
```

# type coercion

- Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)

```js
Number('5') // 5
5 == '5' // "5" is converted to a number
```

# unary operator

- operator which acts on one value (typeof)

# binary operator

- operator which acts on two values (+)

# ternary

- operator which acts on two values

```js
const msg = condition ? 'this thing' : 'this value'
```

# data types

- in a programming language, different types of values like numbers, booleans, etc

```js
{
  key: 'value
}
[
    null,
    true,
    function () {},
    [1,2,3]
]
5
true
null
```

# primitives (string, number, boolean, etc)

- data that is not an object and has no methods, primitives are immutable
- string, number, boolean, symbol, undefined, null, bigint
- functions, objects, arrays are technically objects but when referring to the word "object" I mean it in the sense of a literal key value pair.

```js
'hello'
5
false
Symbol('foo')
null
BigInt(1)
```

# array []

- a list of values

```js
const foo = [1, { name: 'john' }, () => {}, null, 71, [1]]
```

# index

- a number which can access arrays and strings (which are both "0 indexed")

```js
const foo = [1, 2, 3]
foo[0] // 0 is the index
```

# object (object literal)

- collection of properties (key value pairs) - can be any js data type

```js
{
    key: 'value',
    o: {
        isCool: true
    }
}
```

# dot notation

- a way to access a value on a object by giving the name of the object, a dot, and then the name of the property (obj.foo)

```js
const o = {
  name: 'Shelly',
}
o.name // 'Shelly'
```

# bracket notation

- a way to access a value on a object by giving the name of the object, a bracket with the name of the property inside as a string (obj['foo'])

```js
const o = {
  foo: [1, 2, 3],
}
o['foo'] // [1,2,3]
```

# nesting (objects, for loops)

- when you write something inside of something else

```js
if (isThingThingTrue) {
  if (thisThingIsTrueAsWell) {
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // loop in a loop
  }
}
```

- string: a series of characters

```js
const x = 'hello'
const y = 'what is up?'
const z = `string with some ${2 + 2} js in it`
```

# concatenation

- adding two strings together

```js
'foo' + 'bar' // foobar
```

# boolean

- true or false

```js
const programmingIsHard = true
const allHopeIsLost = false
```

# block

- curly braces in js which group code statements

```js
if () {
    // block code in here
}

for (let i = 0; i < 10; i++) {
    // another block code in here
}
```

# conditional statement (if/else if/else)

- executes a block of code if the condition is true

```js
const someCondition = 5 < 4
if (someCondition) {
  // wont run
} else if (!someCondition) {
  // will run
} else {
  // wont run
}
```

# evaluation (producing a value)

```js
2 + 2 // evaluates to 4
```

# browser api (prompt, confirm, alert)

- api (application programming interface) provided by the browser which provides a programmer a way to interface with code
- Read about this more here: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

```js
// examples
fetch()
document.querySelector()
```

# falsey truthy values

- a truthy value is a value that is considered true when encountered in a Boolean context (like an if statement)

```js
// falsey
if (0) {
}

// falsey values
const falseyString = ''
null
0
false
undefined
NaN // not a number (nonsense math computation like)

2 / 'h' // NaN
```

# methods

- actions performed on objects (a function on an object)
- more informally - functions you can call on different pieces of data

```js
const foo = {
  sayHi: () => console.log('hello'),
}
foo
  .sayHi() // 'hello'
  [(1, 2, 3)].map((x) => x * 2)
```

# debugging

- Searching for (and fixing) errors in programming code is called code debugging.

```js
if (notSureIfThisIsAThing) {
  console.log(notSureIfThisIsAThing)
}
function add() {
  debugger // pauses code here...
}
```

# loop (while for)

- Loops offer a quick and easy way to do something repeatedly.
- you can read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement

```js
let count = 0
while (count < 10) {
  console.log(count)
  count++
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

# for in

- The for...in statement iterates a specified variable over all the enumerable properties of an object.

```js
let obj = {
  name: 'Cindy',
  age: 32,
}
for (let key in obj) {
  console.log(key) // logs 'name', 'age'
}
```

# for of

- The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)

```js
for (let x of [1, 2, 3]) {
  console.log(x) // logs 1, 2, 3
}
```

# iteration

- sequence of instructions that are continually repeated

```js
const arr = []
for (let x of [1, 2, 3]) {
  // this block of code is the iteration
  arr.push(x)
  console.log(x) // logs 1, 2, 3
}
```

# break

- used to terminate a loop or switch statement

```js
function onlyGoTo10(num) {
  for (let i = 1; i <= num; i++) {
    if (i > 10) {
      break
    }
    console.log(i)
  }
}
```

# continue

- used to "continue" the loop (stopping here and advancing to the next iteration if any)

```js
let listWithoutThree = ''
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue
  }
  listWithoutThree += `<li>${i}</li>`
}
```

# hoisting

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- Read more here: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

```js
sayHi() // works due to hoisting the function upwards
function sayHi() {
  phrase = 'Hello'

  alert('Yo')

  var phrase
  // phase would be undefined - but not throw an error due to hosting
}
```

# function

- build blocks of a program - they allow code to be called multiple times without repeating (a loop is not a function - but a function can have a loop)
- read more here: https://javascript.info/function-basics

```js
function sumArray(arr) {
  return arr.reduce((a, b) => a + b)
}
sumArray([1, 2, 3]) // 6
sumArray([4, 5, 6]) // 15
```

# function declaration

- using the function keyword (can be hoisted)

```js
function sumArray(arr) {
  return arr.reduce((a, b) => a + b)
}
```

# function expression

- setting a function equal to a variable

```js
const sumArray = (arr) => {
  return arr.reduce((a, b) => a + b)
}
```

# anonymous function

- a function without a name

```js
const mapped = [1, 2, 3].map(function () {
  // this function in map is anonymous
})
button.addEventListener('click', function (e) {
  // this function in addEventListener is anonymous
})
```

# named function

- a function with a name

# parameters (AKA "function arguments" - note the word function before argument)

- the "placeholders" for values that are passed to the function

```js
// a and b are parameters
function add(a, b) {
  return a + b
}
```

# arguments

- values that are passed to a function

```js
const add = (a, b) => a + b
add(1, 2) // 1 and 2 are arguments

const isVowel = (char) => 'AEIOUaeiou'.includes(char)
isVowel('a') // a is an argument
```

# function reference

- a function that is a reference or a function being passed by reference means one is not directly calling it - just referring to it

```js
function add(a, b) {
  return a + b
}
function callIt(fn, a, b) {
  return fn(a, b)
}
callIt(add, 1, 2) // 3 (add is passed as a reference to callIt)
function handleClick(e) {}
button.addEventListener('click', handleClick) // handleClick is passed as a reference to addEventListener
button.addEventListener('hover', function (e) {
  // this anonymous function is also passed as a reference to addEventListener
})
```

# fat arrow function

- a more concise way to write function expressions and anonymous functions

```js
const add = (a, b) => a + b
setTimeout(() => {
  console.log('foo!')
}, 1000)
```

# pure function

- a function where it's output is stricty determined by its input with no "side effects"

```js
// the function add is pure since I give it an input and will receive the same output each time - without affecting anything else.
function add(a, b) {
  return a + b
}
add(1, 2) // 3
```

# callback

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- read more here: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

```js
function multiply(x) {
  return x * 2
}
const multiplied = [1, 2, 3].map(multiply) // map calls multiply function (multiply is the "callback")
const handleClick = (event) => alert('hello')
// handleClick is the callback
document.querySelector('#foo').addEventListener('click', handleClick)
```

# closure

- A closure is the combination of a function bundled together (enclosed) with a reference to that function's outer scope (lexical environment)

```js
function getCounter() {
  let counter = 0
  return function () {
    // function can access its parent scope (IE counter)
    return counter++ // increases by 1 each time
  }
}
let count = getCounter() // returns the anonymous function that returns counter incremented
console.log(count()) // 0
console.log(count()) // 1
console.log(count()) // 2
```

# scope (global and local)

- The current context of execution. The context in which values and expressions are "visible" or can be referenced.

```js
const exampleFunction = () => {
  const x = 'declared inside function' // x can only be used in exampleFunction
  console.log('Inside function')
  console.log(x)
}

console.log(x) // Causes error

var x = 'declared outside function'

exampleFunction()

function exampleFunction() {
  console.log('Inside function')
  console.log(x)
}

console.log('Outside function')
console.log(x)
```

# template strings (literals)

- Template literals are string literals allowing embedded expressions.

```js
const x = 'Jane'
const name = `Hello, ${x}` // 'Hello, Jane'
```

- DOM (Document Object Model)
- The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

```js
const heading = document.createElement('h1')
document.body.appendChild(heading) // adds a new h1 to the body of the html document
```

# DOM (querySelector, querySelectorAll, getElementById, classList)

```js
function doAThing(e) {}
// select the element with foo id ("#foo")
// add a listener for the "click" event
document.querySelector('#foo').addEventListener('click', doAThing)
```

# DOM manipulation

- Manipulating/Changing the DOM means using this API to change the document (add elements, remove elements, move elements around etc...).

```js
document.body.innerHTML = '<li>cool</li>'
```

# event object (e)

- An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard

```js
function doAThing(e) {
  console.log(e) // {type: 'click', .........}
}
// select the element with foo id ("#foo")
// add a listener for the "click" event
document.querySelector('#foo').addEventListener('click', doAThing)
```

# synchronous code

- top to bottom in code (only one thing happens at a time)

```js
const a = 10
if (a < 10) {
} else {
  console.log('hello')
}
function add(a, b) {
  return a + b
}
const three = add(1, 2)
console.log(three)

// 'hello'
// 3
```

# asynchronous code

- code called "later" - through callbacks, promises

```js
function currentSeconds() {
  const date = new Date()
  return date.getSeconds()
}
setInterval(currentSeconds, 1000)
document.addEventListener('click', function (e) {
  // this function is a callback and called when the user clicks...
})
```

```js
document.body.innerHTML = '<li>cool</li>'
```

# GET request

- GET is used to request data from a specified resource.

# Promise

- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- a Promise represents a future value

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42)
  }, 5000)
})

p.then((v) => console.log(v) /* 42 */) // 5 seconds later
```

# fetch

- The Fetch API provides an interface for fetching resources (like making a GET request)
- a fetch returns a new promise

```js
// make a get request to todos api
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json()) // convert response into json
  .then((json) => console.log(json)) // log the json to the console
```