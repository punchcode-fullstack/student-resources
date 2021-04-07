const arr1 = [1,2,3]
const arr2 = [1,2,3,4]

// make a function hasOne that checks if an array has 1
// and returns true
// otherwise false

console.assert(hasOne(arr1) === true)

// make a function multiply that takes an array and returns each item multiplied by two
// input: [1,2,3,4]
// output: [2,4,6,8]
console.assert(JSON.stringify(multiply(arr2)) === JSON.stringify([2,4,6,8]))

// make a function noOnes that takes an array and
// removes all instances of the number 1

console.assert(JSON.stringify(noOnes(arr2)) === JSON.stringify([2,3,4]))

// make a function arrayToString that takes an array and converts to string

console.assert(arrayToString(['1', '2', '3']) === '123')
