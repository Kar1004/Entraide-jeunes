
const express = require('express')
const { Home} = require ('../controllers/Home.js')
const {  Signup , Login } = require('../controllers/Register.js')
const { AllUser, UserInfo, udapteUser, DeleteUser, Unfollow, Follow } = require('../controllers/UserController.js')
const jwtn = require('jsonwebtoken')
const passport = require("passport")
const router = express.Router()


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
        return console.log(error);
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
                const token = jwt.sign({User : body},'my deep mind')
                res.json({token,body})
            })
        }catch(error){
            return next(error)
        }
    })(req,res,next)
})


//logout

router.get('/logout',Logout)


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


module.exports = router;