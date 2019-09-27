const jwt = require('jsonwebtoken');
const jwtSecret = "mysuperdupersecret"; // Use env for secrets
//...

// Auth middleware
module.exports.checkAuth = (req, res, next) => {
  console.log('PATH', req.path, req.path === '/api/login');
  // login does not require jwt verification
  if (req.path === '/api/login') {
    // next middleware
    return next()
  }

  // get token from request header Authorization
  const token = req.headers.authorization

  // Token verification
  try {
    var decoded = jwt.verify(token, jwtSecret);
    console.log("decoded", decoded)
  } catch (err) {
    // Catch the JWT Expired or Invalid errors
    return res.status(401).json({ "msg": err.message })
  }

  // next middleware
  next()
};