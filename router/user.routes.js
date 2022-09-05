const express = require('express')
const { AllUser, UserInfo } = require('../controllers/UserController')
const router = express.Router()



//Général

router.get('/', AllUser)

//Info of user
router.get('/:id',UserInfo)

//udapte a User

router.put('/:id',udapteUser)

//delete User

router.delete('/:id',DeleteUser)

//patch for followers

