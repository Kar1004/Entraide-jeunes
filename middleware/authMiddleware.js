const jwt = require('jsonwebtoken')
const UserModel = require("../model/UserModels.js")


//Vérifie si l'utilisateur existe , sinon ils se  déconnecte
exports.CheckUser = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        // Vérrifie si le token existe
        jwt.verify(token, "deep", async (err, decodedToken) => {
            if (err) {
                res.local.user = null,
                    res.cookie('jwt', '', { maxAge: 1 })
                next()
            } else {
                //L'utilisateur trouvé on utilise son id pour vérifier le token
                let User = UserModel.findById(decodedToken.id);
                res.locals.user = User
                console.log(User);
                next()
            }
        })
    } else {
        //l'utilisateur n'existant pas  , il n'ya pas de token
        res.local.user = null,
            next()
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