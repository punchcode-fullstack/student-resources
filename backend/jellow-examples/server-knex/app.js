const express = require('express')
const app = express()
require('dotenv').config()
const authRoutes = require('./routes/auth')
const projectRoutes = require('./routes/projects')
const cardRoutes = require('./routes/cards')
const columnRoutes = require('./routes/columns')
const userRoutes = require('./routes/users')
const jwtToken = require('jsonwebtoken')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
function attachUser(req, res, next) {
const authorizationHeader = req.headers.authorization
    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwtToken.decode(token)
        req.user = { id: decoded.id, username: decoded.username }
    }
    next()
    }
app.use(attachUser)
app.use('/api', authRoutes)
app.use('/api', cardRoutes)
app.use('/api', projectRoutes)
app.use('/api', columnRoutes)
app.use('/api', userRoutes)
app.use('/api/test', (req, res) => {
    res.send(req.user)
})
app.listen(3001, (req, res) => {
    console.log("listening on port 3001")
})