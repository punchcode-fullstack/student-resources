const arraysMatch = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false
  }
	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
      return false
    }
	}
	// Otherwise, return true
	return true
}

const objectsMatch = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

//IGNORE CODE ABOVE :)

//Q1
let o1;
//make a loop below that sets "o1" to an array of
//numbers 1-5

console.assert(arraysMatch(o1, [1, 2, 3, 4, 5]));

//Q2
let arr1 = [1, 2, 3];
let o2 = 0;
//make a for loop below that increments "o2" based on
//how many items there are in "arr1"

console.assert(o2 === 3)

let arr2 = [4, 5, 6];
//make a for loop  below that injects the numbers 7, 8 and 9
//to the end of the array arr2

console.assert(arraysMatch(arr2, [4, 5, 6, 7, 8, 9]));

let obj1 = { key1: 1, key2: 2, key3: 3 }
//make a for loop below that accesses each key in obj1
//and increments their value by 1

console.assert(objectsMatch(obj1, { key1: 2, key2: 3, key3: 4 }));

let arr3 = ["a", "a", "b", "a", "c", "c"];
let obj2 = {};

//make a for loop below that inserts key value pairs
//in obj2 where each key represents how many pairs
//there are in arr3
//expected obj2 = {a: 3, b: 1, c: 2}

console.assert(objectsMatch(obj2, { a: 3, b: 1, c: 2 }));
