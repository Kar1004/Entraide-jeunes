const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const decodedToken =  jwt.verify(token, "TOKEN_KEY");
    const user =  decodedToken;
    console.log(user);
    req.user = user;
    console.log(req.user);
    next();
    
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid req!"),
    });
  }
};