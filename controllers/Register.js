const UserModel = require("../model/UserModels")
const jwt = require('jsonwebtoken')

exports.Signup=(_,res)=>{
    res.render("signup")
}


//login

exports.Login=(_,res)=>{
    res.render("Login")
}


