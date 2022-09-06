const express = require('express')

const router = express.Router()

router.get =("/private", (res,req) =>{ 
    
 res.json({
    message:'tu es sur ton compte',
    user:req.user,
    token:req.query.token
 })
})

module.exports =  router