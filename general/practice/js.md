# Concepts to practice in order

## Syntax reference

https://markdown-flashcard.surge.sh/js

## Guide

- js info is amazing

https://javascript.info/

Everything listed should be praticed with

- primitives (numbers, booleans, strings, etc)
- objects and arrays

- variable declaration

```js
var x = 2
let y = 3
const x = 'a'
```

- making different types of data and accessing it

```js
const person = {
    first: 'Nick',
    nested: {
        cool: true
    }
}
const arr = [1,2,3]
const theName = person.name // 'Nick'
const isCool = person.nested.cool // true
const theLetterN = person.name[0]
const theFirstItem = arr[0]
```

- operators

```js
/*
    arithmetic
        - +
        - -
        - *
        - /
        - % (modulo)
        - ++
        - --
        - +=
    assignment (=)
    comparison
        - ==
        - ===
        - negation (not) ! // !=
        - >
        - <
        - >=
    concatentation of strings
        - +=
        - x = x + b
    ternary
*/
```

- conditionals

```js
// if statements
if (true) {

} else {

}
// ternary
const isCool = 'hello' === 'hello' ? true : false
```

- loops (for, for in, for of)

```js
/*
    for loops consist of 3 parts
    1. variable initialization: let i = 0
    2. a comparison: i < 10 (once false the for loop stops)
    3. a change in value: i++ (same as saying i = i + 1)
*/
for(let i = 0; i < 10; i++) {
    // i gives me 0 through 9
}
```

- functions
```js
/*
    various ways to write functions
*/
function add(a, b) {
    return a + b
}
const anotherAdd = (a, b) => a + b
const anotherAddAgain = (a, b) => {
    return a + b
}
const add3 = function (a, b) {
    return a + b
}
```

- methods

```js
[1,2,3].map()
[1,2,3].forEach()
'hello'.charAt(0) // 'h'
[1,2,3].includes()
'hello'.split('') // ['h', 'e', 'l', 'l', 'o']
```

- DOM stuff (selecting html elements, event listeners)

```js
const foo = document.querySelector('#foo')
foo.addEventListener('click', () => {

})
//......
```

- synthesizing these concepts together

## The scary trees of js knowledge

![practice](function-practice-atoms.png)

![mental-model](js-mental-model.png)