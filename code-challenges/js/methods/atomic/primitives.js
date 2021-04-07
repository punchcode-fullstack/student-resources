// make a function stringToArray that takes a string and converts to array

console.assert(stringToArray('hello') === ['h', 'e', 'l', 'l', 'o'])

// make a function stringIncludesLetter that takes a string and letter
// and tells if it contains that letter

console.assert(stringIncludesLetter('hello', 'h') === true)
console.assert(stringIncludesLetter('hello', 'x') === false)

// make a function stringAtIndex that takes a string and index
// and returns what the character is there

console.assert(stringAtIndex('hello', 0) === 'h')
console.assert(stringAtIndex('hello', 1) === 'e')

// make a function stringAtHumanIndex that takes a string
// and human index (starting from 1)

console.assert(stringAtHumanIndex('hello', 1) === 'h')
console.assert(stringAtHumanIndex('hello', 2) === 'e')