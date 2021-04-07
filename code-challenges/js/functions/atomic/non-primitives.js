//Q1
let arr1 = [];
let arr2 = [1, 2, 3];
//make a function below called "isEmpty" that checks if an array
//is empty. if it is, then it returns true
//if it is not, then it returns false

console.assert(isEmpty(arr1) === true);
console.assert(isEmpty(arr2) === false);

//Q2
let arr3 = [1, 2, 3];
let arr4 = [2, 3, 4];
//make a function below called "firstIsOne" that checks if the first
//item in the array is equal to the value 1
//if it is, then it returns true
//if it is not then it returns the number

console.assert(firstIsOne(arr3) === true);
console.assert(firstIsOne(arr4) === 2);

//Q3
let arr5 = [2, 7, 9];
let arr6 = [5, 8, 4, 2];
//make a function below called "divByThree" that checks if the last
//item in the array is divisible by 3
//if it is, then it returns true
//if it is not then it false

console.assert(divByThree(arr5) === true);
console.assert(divByThree(arr6) === false);

//Q4
let obj1 = { name: "Tom" };
let obj2 = { name: "Tim" };
//make a function below called "isTom" that takes in an object
//as a parameter and checks if the name is "Tom"
//if it is then it returns true
//if it is not then it returns false

console.assert(isTom(obj1) === true);
console.assert(isTom(obj2) === false);

//Q5
let obj3 = { name: "Jane", age: 22 };
let obj4 = { name: "Stan", age: 19 };
//make a function below called "overTwentyOne" that takes in an object
//as a parameter and checks if the age is over 21
//if it is, then it returns true
//if it not, then it returns false

console.assert(overTwentyOne(obj3) === true);
console.assert(overTwentyOne(obj4) === false);

//Q6
let obj5 = { todo: "buy groceries", isCompleted: false };
let obj6 = { todo: "walk the dog", isCompleted: true };
//make a function below called "isDone" that takes in an object
//and returns if the todo is completed or not (true or false)

console.assert(isDone(obj5) === false);
console.assert(isDone(obj6) === true);

//Q7
let obj7 = { id: 1, cart: ["apples", "oranges", "pears"] };
let obj8 = { id: 2, cart: ["carrots", "lettuce", "celery"] };
//make a function below called "firstItem" that take in an object and
//returns the first item in the cart

console.assert(firstItem(obj5) === "apples");
console.assert(firstItem(obj6) === "carrots");

//Q8
let todos = [
  { title: "clean the house", isCompleted: false },
  { title: "review functions", isCompleted: true },
  { title: "fix the wifi", isCompleted: true },
  { title: "cook dinner", isCompleted: false },
  { title: "fold laundry", isCompleted: true },
];
//make a function below called "todoCount" that takes in an array
//of objects and returns the number of todos not yet completed
//hint: for loop

console.assert(todoCount(todos) === 2);
