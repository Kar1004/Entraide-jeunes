
const express = require('express')
const { Home} = require ('../controllers/Home.js')
const { AllUser, UserInfo, udapteUser, DeleteUser, Unfollow, Follow } = require('../controllers/UserController.js')
const { readAllPost, createPost, UpdateMessagePost, deleteMessageUser, LikeMessage, UnLikeMessage, commentMessage, editCommentMessage, deleteCommentMessage } = require('../controllers/messageController')
const passport = require("passport")
const router = express.Router()
require('dotenv').config()
const jwt = require('jsonwebtoken')




//jwt
const maxAge =3*24*60*1000
const createToken = (id) =>{
    return jwt.sign({id},process.env.TOKEN_KEY,{
        expiresIn:maxAge
    })
}


// Home 

router.get('/Home', Home)

//authentification

router.post('/signup', passport.authenticate('signup',{session:false}),
async(req,res,next)=>{
       
        next()  
})

router.post('/login',(req,res,next)=>{
    passport.authenticate(('login'),async(_,User)=>{
        try{

            req.login(User,{session :false},async (error) => {
                if (error) return next(error)
                const token = createToken(User._id);
                res.cookie('jwt',token,{httpOnly:true},maxAge)
                res.status(200).json({user: User._id})
             
            })
        }catch(error){
            return res.send(error)
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