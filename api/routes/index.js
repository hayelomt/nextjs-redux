const app = require('express')();

app.post('/users', (req, res) => {
  const body = req.body;

  res.json({
    body
  })
})

app.post('/login', (req, res) => {

  res.json({
    auth: true
  })
})

app.get("/login", (req, res) => {
  // generate a constant token, no need to be fancy here
  const token = jwt.sign({ "username": "Mike" }, jwtSecret, { expiresIn: 60 }) // 1 min token
  // return it back
  res.json({ "token": token })
});

app.get("/token/ping", (req, res) => {
  // Middleware will already catch if token is invalid
  // so if he can get this far, that means token is valid
  res.json({ "msg": "all good mate" })
})

app.get("/ping", (req, res) => {
  // random endpoint so that the client can call something
  res.json({ "msg": "pong" })
});

module.exports = app;