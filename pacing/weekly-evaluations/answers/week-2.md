## JS

## what is js?
### answer:
a programming language

#### Link
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript

## what is a keyword?
### answer:
Keywords are reserved words in JavaScript that you cannot use to indicate variable labels or function names. 

There are a total of 63 keywords that JavaScript provides to programmers.

#### Link
https://www.w3schools.in/javascript-tutorial/keywords/#:~:text=ECMAScript5%20New%20Keywords-,What%20Are%20JavaScript%20Keywords%3F,that%20JavaScript%20provides%20to%20programmers.

## what is a variable?
### answer:
- Variable means anything that can vary. JavaScript includes variables which hold the data value and it can be changed anytime.

- Variables are containers for carrying values

#### Link
https://www.tutorialsteacher.com/javascript/javascript-variable#:~:text=Variable%20means%20anything%20that%20can,must%20have%20a%20unique%20name.

## what is an operator? (unary, binary, ternary)
### answer:
A binary operator requires two operands, one before the operator and one after the operator:

operand1 operator operand2

A unary operator requires a single operand, either before or after the operator:

operator operand
or
operand operator

The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition

#### 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#:~:text=JavaScript%20has%20both%20binary%20and,%2B4%20or%20x*y%20.

## what does the `=` sign mean in js?
### answer:
it's an assignment operator

#### 
https://www.freecodecamp.org/news/a-visual-guide-to-understanding-the-sign-in-javascript-3de8495ab3f/

## what is ternary?
### answer:
The ternary operator is the only operator in JavaScript that works with 3 operands, and it’s a short way to express conditionals.

<condition> ? <expression> : <expression>

#### Link
https://flaviocopes.com/javascript-ternary-operator/

## give some examples of operators
### answer:
+, -, /, *, %,++,--

#### Link
https://www.w3schools.com/jsref/jsref_operators.asp

## what is a primitive value? List all of them
a primitive (primitive value, primitive data type) is data that is not an object and has no methods. 

There are 6 primitive data types: 
string, 
number, 
bigint, 
boolean, 
undefined, 
and symbol. 

#### Link
https://developer.mozilla.org/en-US/docs/Glossary/Primitive#:~:text=In%20JavaScript%2C%20a%20primitive%20(primitive,boolean%2C%20undefined%2C%20and%20symbol.&text=It%20is%20important%20not%20to,variable%20assigned%20a%20primitive%20value.

## what is a string?
### answer:
Strings are useful for holding data that can be represented in text form. 

Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## what is a boolean?
### answer:
The Boolean object is an object wrapper for a boolean value.

The value passed as the first parameter is converted to a boolean value, if necessary. 

If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true.

Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

## what is a "truthy" or "falsey" value?
### answer:
Truthy:

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

Falsey:

A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.


#### Link
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
https://levelup.gitconnected.com/which-are-the-truthy-and-falsy-values-in-javascript-and-how-does-it-matter-1a9eabdce600
https://levelup.gitconnected.com/which-are-the-truthy-and-falsy-values-in-javascript-and-how-does-it-matter-1a9eabdce600

## name all falsey values
### answer:

false, 0, -0, null, undefined, nan, ""

#### Link
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
https://levelup.gitconnected.com/which-are-the-truthy-and-falsy-values-in-javascript-and-how-does-it-matter-1a9eabdce600

## what is the `!` operator?
### answer:
The ! is a logical operator that will convert a value to its opposite boolean. 

Since JavaScript will coerce values, it will “convert” a value to its truthy/falsey form and return the opposite boolean value.

#### Link
https://levelup.gitconnected.com/understanding-weirdness-of-operator-in-javascript-b7609fcab810

## what is an object?
### answer:
The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

## what is an array?
### answer:
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## what is a block?
### answer:
A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets").

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#:~:text=The%20block%20statement%20is%20often,a%20common%20practice%20in%20JavaScript.

## what is a conditional statement?
### answer:
Conditional statements allow us to represent such decision making in JavaScript, from the choice that must be made (for example, "one cookie or two"), to the resulting outcome of those choices (perhaps the outcome of "ate one cookie" might be "still felt hungry", and the outcome of "ate two cookies" might be "felt full, but mom scolded me for eating all the cookies".)

#### Link
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

## what are some ways to debug your js?
### answer:
console.log()
chrome tools

#### Link
https://stackify.com/a-practical-guide-to-javascript-debugging/

## what is a method?
A method is a function which is a property of an object. There are two kind of methods: Instance Methods which are built-in tasks performed by an object instance, or Static Methods which are tasks that are called directly on an object constructor.

#### Link
https://developer.mozilla.org/en-US/docs/Glossary/Method#:~:text=A%20method%20is%20a%20function%20which%20is%20a%20property%20of%20an%20object.&text=Note%3A%20In%20JavaScript%20functions%20themselves,object%20reference%20to%20a%20function.

## what is a loop?
### answer:
There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

## what is a function?
### answer:
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

## what are some functional array methods?
### answer:
`Look at link for examples`

#### Link
https://www.w3schools.com/jsref/jsref_obj_array.asp

## what is a template string?
### answer:
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

They were called "template strings" in prior editions of the ES2015 specification.

Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

#### Link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#:~:text=Template%20literals%20are%20string%20literals,editions%20of%20the%20ES2015%20specification.

