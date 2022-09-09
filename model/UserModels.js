const bcrypt = require('bcrypt')
const {isEmail } = require('validator')
const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    
    
    name:{
        type:String,
        maxlenght:20,
        minlenght:2,
        unique:true,
        trim:true,
    }, speudo:{
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
        minlenght:10,
      
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
// bcrypt password

UserSchema.pre('save' , async function (next){
    const user = this

    const hash =  await bcrypt.hash(user.password,10)

    user.password =hash

    next()
})

//compare password

UserSchema.methods.isValidPassword = async function(password){
    const user= this

    const isSame = await bcrypt.compare(password,user.pasword)

    return isSame // retour faux ou vrai
}

const UserModel = mongoose.model("User",UserSchema)



module.exports = UserModel