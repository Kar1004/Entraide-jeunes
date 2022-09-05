const passport = require("passport")
const { Strategy } = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy;
const  ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../model/UserModels.js')

passport.use('signup', new Strategy({
    usernameField : 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const User = await  UserModel.create({ email,password })
        User.save().then(user =>console.log(user))
        return done(null, User)
    } catch (error) {
        return done(error)
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
            return done(null, false, { message: "veuillez tapez un  utilisateur" })
        }
        return done(null, User, { message: "veuillez tapez un  utilisateur" })
    } catch (error) {
        return done(error)
    }

}))

passport.use(new JwtStrategy,{
    secretOrkey : "my deep mind",
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
},
async (done,token)=>{
    try{
        return done(null,token.user)
    }catch(error){
        return done(error)
    }
});
module.exports = passport