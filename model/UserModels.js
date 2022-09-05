const bcrypt = require('bcrypt')
const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
})
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