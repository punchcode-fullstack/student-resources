const arr = [1]
const firstIsOne = null
// set firstIsOne to true if the first item is 1
console.assert(firstIsOne === true)

const obj = {
    count: 1
}
// increment count by 1 do not directly change obj above
console.assert(obj.count === 2)

const obj2 = {
    count: 1
}
// decrease count by 1 do not directly change obj above
console.assert(obj2.count === 2)

const person = {
    first: 'Jane',
    last: 'doe',
    isCool: false
}
// check that first name is larger than last name
// don't change the null to the value true
// use the object
const isFirstLarger = null
console.assert(isFirstLarger === true)

// set person isCool to true
// do not manually change the object above
console.assert(person.isCool === true)