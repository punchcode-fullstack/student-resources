## Backend libraries needed for this implementation

```bash
yarn add js-sha512 jsonwebtoken express-jwt
```

## User regisration and login

- in routes/auth.js

```js
const express = require('express')
const router = express.Router()
const conn = require('../db')
const sha512 = require('js-sha512')
const jwt = require('jsonwebtoken')

// could also use a library this is just an example
function createSalt(len) {
  const vals = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str = ''
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * vals.length)
    str += vals.charAt(randomIndex)
  }
  return str
}

router.post('/registration', async (req, res) => {
  const { username, password } = req.body
  const salt = createSalt(20)
  const hashedPassword = sha512(password + salt)
  const checkIfUserExistsSql = `SELECT * FROM users WHERE username = ?;`
  const hasAUser = await conn.raw(checkIfUserExistsSql, [username])
  const userExists = hasAUser.rows.length
  if (userExists) {
    res.status(400).json({ message: 'username already exists' })
  } else {
    const addUserSql = `
                INSERT INTO users (username, password, salt)
                VALUES (?, ?, ?);
            `
    const insertedUser = await conn.raw(addUserSql, [
      username,
      hashedPassword,
      salt,
    ])
    res.status(201).json({ message: 'user successfully created' })
  }
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  const checkIfUserExistsSql = `SELECT * FROM users WHERE username = ?;`
  const hasAUser = await conn.raw(checkIfUserExistsSql, [username])
  const userExists = hasAUser.rows.length
  if (!userExists) {
    res.status(400).json({ message: 'invalid username or password' })
  } else {
    const user = hasAUser.rows[0]
    const hashedPassword = sha512(password + user.salt)
    if (hashedPassword === user.password) {
      // generate a token based on server secret for client to use to authenticate
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.SECRET
      )
      res.status(200).json({ token: token })
    } else {
      res.status(400).json({ message: 'invalid username or password' })
    }
  }
})

module.exports = router
```

## creating a protected route (note the /api/dashboard get)

```js
const express = require('express')
const app = express()
const PORT = 3001
const authRoutes = require('./routes/auth')
const jwtMiddleware = require('express-jwt')
const jwtToken = require('jsonwebtoken')
// load the env file // process.env.<NAME_OF_KEY>
require('dotenv').config()

function attachUser(req, res, next) {
  const authorizationHeader = req.headers.authorization
  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1]
    const decoded = jwtToken.decode(token)
    req.user = { id: decoded.id, username: decoded.username }
  }
  next()
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(attachUser)
app.get('/api', (req, res) => {
  res.json({ example: true })
})
app.use('/api', authRoutes)
app.get(
  '/api/dashboard',
  jwtMiddleware({ secret: process.env.SECRET, algorithms: ['HS256'] }),
  (req, res) => {
    // req.user will have the user based on the token signed from login
    res.json()
  }
)

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})
```

## register reducer in store (authentication folder attached)

import authReducer from '../features/authentication/auth'

```js
reducer: {
  authState: authReducer
}
```

## utilize authState to compute if the route is allowed to be visited (note protected routes are an AuthRoute - see attached folder)

```js
<Router>
  <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
    <AuthRoute path="/dashboard">
      <Dashboard />
    </AuthRoute>
  </Switch>
</Router>
```
