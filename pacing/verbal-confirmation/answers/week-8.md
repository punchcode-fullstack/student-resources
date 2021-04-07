# node / express

## What is node?

### answer:

javascript outside of the browser, a fork of the chromium js engine

#### Link

https://www.codecademy.com/articles/what-is-node

## What is express?

### answer:

Express is a library for building web applications - we use it for making rest apis

## What is CRUD?

### answer:

It is an acronym for Create Read Update and Delete

## What is REST?

### answer:

Rest is representational state transfer

#### link

https://en.wikipedia.org/wiki/Representational_state_transfer

## what is an API?

### answer:

Application programming interface

#### link

https://dev.to/yanns1/what-s-an-api-5hb2

## How can I debug a backend?

### answer:

console.log and node debugger

#### link

https://nodejs.org/en/docs/guides/debugging-getting-started/

- what is middleware

### answer:

Middleware functions as the name implies, are in the middle of the client's request and the server's response, they are executed in the middle of the request-response cycle.

#### link

https://dev.to/ghvstcode/understanding-express-middleware-a-beginners-guide-g73#:~:text=The%20middleware%20has%20access%20to,js%20applications.

## what is a route?

### answer:

a url you can go to to perform CRUD on a resource

#### link

https://developer.wordpress.org/rest-api/extending-the-rest-api/routes-and-endpoints/

## what is req in express route functions?

### answer

incoming request (object)

## what is res in express route functions?

### answer

response (object)

## what is next in express route functions?

### answer

a function that will advance to the next middleware function if one exists

#### link

https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/

# db

## what is a database?

### answer

A database is a system to manage data

## what are some database relationships?

### answer

One to One, many to many, one to many

#### link

https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl

# SQL

## what is SQL?

### answer

Structured query language - a programming language for interacting with a database

## provide examples of some data types and what they are for

### answer

integer - stores numbers
varchar - stores characters up to a limit (255)
text - stores larger blocks of text
enum - (enumeration) stores a set of restricted values

## how do I create data in SQL?

### answer

insert into

## how do I get read data?

### answer

select from

## how do I update data?

### answer

update

## how do I delete data?

### answer

delete

## how do I combine tables of data

### answer

JOINS

## what is a primary key

### answer

uniquely identifies row

## what is a foreign key

### answer

relationship between two tables

#### link

https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl

## what is an aggregate function

### answer

a function in sql which preforms an aggregate (preforms calculation and produces a single value)

#### link

https://www.sqlservertutorial.net/sql-server-aggregate-functions/

## what is cascade deletion

### answer

CASCADE specifies that when a referenced row is deleted, row(s) referencing it should be automatically deleted as well.

#### link

https://www.postgresql.org/docs/8.2/ddl-constraints.html

# tools

## what is beekeeper studio

### answer

an open source tool to query a database

# authentication

## what is jwt?

### answer

javascript web token

## what does it mean to sign a jwt?

https://dev.to/loige/what-is-a-jwt-token-302k

#### link

https://jwt.io/introduction

## what is a salt?

### answer

a random string (often used to add to a password and hashed to avoid security issues)

## what is a hash?

### answer

a scrambled string (in passwords - obfuscating the password and salt combo)

## how are passwords stored?

### answer

passwords are stored as a varchar - which is salted and hashed

## what is authentication

### answer

Authentication is the process of verifying who you are.

## how can we protect a route?

### answer

You can prevent a route from being accessed (stopping non-authenticated users) by a jwt middleware.

#### link

https://stackoverflow.com/questions/47670921/express-jwt-exclude-certain-routes/47672166
