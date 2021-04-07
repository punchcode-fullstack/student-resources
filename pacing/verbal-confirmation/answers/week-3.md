# DOM

## what is the dom?
### answer:
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

#### Link
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#:~:text=The%20Document%20Object%20Model%20(DOM)%20is%20a%20programming%20interface%20for,structure%2C%20style%2C%20and%20content.&text=The%20DOM%20is%20an%20object,scripting%20language%20such%20as%20JavaScript.

## what is classList?
### answer:
The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.

The classList property is read-only, however, you can modify it by using the add() and remove() methods.

#### Link
https://www.w3schools.com/jsref/prop_element_classlist.asp

## what are data attributes?
### answer:
 data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, extra properties on DOM, or Node.setUserData().

#### Link
https://css-tricks.com/a-complete-guide-to-data-attributes/

## how do I get the value of an input?
### answer:
The value property sets or returns the value of the value attribute of a text field.

The value property contains the default value OR the value a user types in (or a value set by a script).

#### Link
https://www.w3schools.com/jsref/prop_text_value.asp

# JS

## what is scope?
### answer:
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 

The two types of scope are local and global:

Global variables are those declared outside of a block

Local variables are those declared inside of a block

#### Link
https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript#:~:text=Scope%20in%20JavaScript%20refers%20to,declared%20inside%20of%20a%20block

## what is a closure?
### answer:
a closure gives you access to an outer function’s scope from an inner function.

#### Link
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36/#85cc

## what is a callback?
### answer:
In JavaScript, a callback is a function passed into another function as an argument to be executed later.

#### Link
https://www.javascripttutorial.net/javascript-callback/#:~:text=In%20JavaScript%2C%20a%20callback%20is,argument%20to%20be%20executed%20later.&text=In%20this%20example%2C%20the%20isOddNumber,name%20without%20the%20parentheses%20()%20.


## what is the difference between synchronous and asynchronous code?
### answer:
So to recap, synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.

#### Link
https://rowanmanning.com/posts/javascript-for-beginners-async/#:~:text=So%20to%20recap%2C%20synchronous%20code,waiting%20time%20for%20the%20user.


## what are some ways to debug your js
### answer:
    - console.log
    - debugger

#### Link
https://raygun.com/learn/javascript-debugging-tips

## what is a promise?
### answer:
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

#### Link
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#:~:text=A%20promise%20is%20an%20object,%2C%20a%20network%20error%20occurred).&text=Promise%20users%20can%20attach%20callbacks,or%20the%20reason%20for%20rejection.

## what are come of the different types methods?
### answer:
String methods, boolean methods, number methods, String HTML wrappers, Array Methods, Date Methods, Date Static Methods, Math Methods, Math Methods

#### Link
https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

## what does it mean to pass a function as a reference?
### answer:
Passing by reference means that the memory address of the variable (a pointer to the memory location) is passed to the function. This is unlike passing by value, where the value of a variable is passed on.

#### Link
https://blog.penjee.com/passing-by-value-vs-by-reference-java-graphical/#:~:text=on%20the%20right).-,Pass%20by%20reference,a%20variable%20is%20passed%20on.

# Events:

## what is an event?
### answer:
Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

#### Link
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

# BE

## what is a get request?
### answer:
GET method is used to retreive data from a server at the specified resource. For example, say you have an API with a /users endpoint. Making a GET request to that endpoint should return a list of all available users.

#### Link
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://www.w3schools.com/tags/ref_httpmethods.asp
