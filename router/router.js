
const express = require('express')
const { Home} = require ('../controllers/Home.js')
const {  Signup , Login, Logout } = require('../controllers/Register.js')
const { AllUser, UserInfo, udapteUser, DeleteUser, Unfollow, Follow } = require('../controllers/UserController.js')
const { readAllPost, createPost, UpdateMessagePost, deleteMessageUser, LikeMessage, UnLikeMessage, commentMessage, editCommentMessage, deleteCommentMessage } = require('../controllers/messageController')
const passport = require("passport")
const router = express.Router()
require('dotenv').config()


const jwt = require('jsonwebtoken')
const { signupErr, loginErrors } = require('../utils/error.utils.js')
const maxAge =3*24*60*1000
const createToken = (id) =>{
    return jwt.sign({id},"deep",{
        expiresIn:maxAge
    })
}


// Home 

router.get('/Home', Home)


//Signup
router.get('/signup', Signup)

//login
router.get('/login', Login)

//authentification

router.post('/signup', passport.authenticate('signup',{session:false}),
async(req,res,next)=>{
    try{
        res.redirect("login")
    }catch(error){
        const errors = signupErr(error)
        return console.log({errors});
    }
})

router.post('/login',(req,res,next)=>{
    passport.authenticate(('login'),async(err,User)=>{
        try{
            if(err || !User){
                const error = new Error('une erreur est survenue')
                 return next(error)
            }
            req.login(User,{session :false},async error => {
                if (error) return next(error)

                const body = {_id: User._id , email:User.email}
                const token = createToken(User._id);
                res.cookie('jwt',token,{httpOnly:true},maxAge)
                res.status(200).json({user: User._id})
            })
        }catch(error){
            const errors = loginErrors(error)
            return res.json({errors})
        }
    })(req,res,next)
})


//logout
// utilise les cookies pour déconnecté l'utilisateur
router.get('/logout',(req,res)=>{
    res.cookie('jwt','',{maxAge:1}),
    res.redirect('/')
})

//Général

router.get('/', AllUser)

//Info of user
router.get('/:id',UserInfo)

//udapte a User

router.put('/:id',udapteUser)

//delete User

router.delete('/:id',DeleteUser)

//patch for followers

router.patch('/follow/:id', Follow)
router.patch('/unfollow/:id', Unfollow)

//Avoir tous les messages 
router.get('/message/allMessage', readAllPost)



//Obtenir un message
router.post('/message/createMessage',createPost)


//udpate le message

router.put('/message/:id', UpdateMessagePost)


//Delete Message

router.delete('/message/:id', deleteMessageUser)


// LIke Message

router.patch('/likeMessage/:id', LikeMessage)
//Unlike Message

router.patch('/UnlikeMessage/:id', UnLikeMessage)

//patch

// router.patch('/comments/:id',commentMessage)
// router.patch('/edit-comments/:id',editCommentMessage)
// router.patch('/deletecomments/:id',deleteCommentMessage)


module.exports = router;