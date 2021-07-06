const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8000

app.use(express.urlencoded());
app.use(cookieParser())

function cookieMiddleware(req, res, next){
  res.cookie('auth', 'secretAuthToken', {maxAge: 9999999999, path: '/'})
  next()
}
app.use(cookieMiddleware)

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(req.body.name)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})