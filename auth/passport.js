const passport = require("passport")
const { Strategy } = require('passport-local').Strategy
const { signupErr ,loginErrors } = require("../utils/error.utils")
const UserModel = require('../model/UserModels.js')

passport.use('signup', new Strategy({
    pseudoField:'pseudo',
    usernameField : 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const User = await  UserModel.create({ email,password })
        User.save().then(user =>console.log(user))
        return done(null, User)
    } catch (error) {
         const err = signupErr(error)
        return done (err)
    }

}))

//login

passport.use('login', new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const User = await UserModel.findOne({ email })
        if (!User) {
            return done(null, false, { message: "L'email n'est pas valide " })
        }
        return done(null, User, { message: "l'utilisateur est valide" })
    } catch (error) {
        const err = loginErrors(error)
        return done (err)
    }

}))


module.exports = passport