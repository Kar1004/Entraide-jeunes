const bcrypt = require('bcrypt')
const {isEmail } = require('validator')
const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
     pseudo:{
        type:String,
        maxlenght:20,
        minlenght:2,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        validate:[isEmail]
    },
    password:{
        type:String,
        require:true,
        maxlenght:100,
        minlenght:6,
      
    },
    picture:{
        type:String,
    },
    bio:{
        type:String,
        maxlenght:1200,
        minlenght:100
    },

    followers:{
        type:[String]
    },
    following:{
        type:[String]
    },
    like:{
        type: [String]
    }},
    {
        timeStamps:true,
    }

)


const UserModel = mongoose.model("User",UserSchema)



module.exports = UserModel