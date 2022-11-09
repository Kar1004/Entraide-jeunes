const jwt = require('jsonwebtoken')
const UserModel = require("../model/UserModels.js")


//Vérifie si l'utilisateur existe , sinon ils se  déconnecte
exports.CheckUser =  (req, res, next) => {
    try {
        const token =  req.headers.authorization.split(" ")[1];
        const decodedToken =  jwt.verify(token, process.env.TOKEN_KEY);
        const user =  decodedToken;
        req.user = user;
        next();
        
      } catch (error) {
        res.status(401).json({
          error: new Error("Invalid request!"),
        });
      }
}

exports.RequireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        // Vérrifie si le token existe
        jwt.verify(token, "deep", async (err, decodedToken) => {
            if (err) {
                console.log(err);
            } else {
                console.log(decodedToken.id);
                next();
            }
        })
    } else {
        console.log("no token");
    }
}