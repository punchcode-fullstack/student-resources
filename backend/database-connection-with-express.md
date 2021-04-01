# an example of an integration utilizing knex

## documentation here

http://knexjs.org/

## note: we are barely scratching the surface with this an writing raw sql with this (which is weird but a good first step)

```js
const express = require('express')
const app = express()
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '',
    database: 'NAME_OF_THE_DATABASE_YOU_CREATED',
  },
})

app.get('/boxes', async (req, res) => {
  const boxResult = await knex.raw('SELECT * FROM boxes')
  const boxes = boxResult.rows
  res.json(boxes)
})
app.listen(3001, () => {
  console.log('running on port 3001')
})
```
