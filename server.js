const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./model/UserModels.js')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const exphbs= require('express-handlebars')
const router = require('./router/router.js')
const path = require('path')
const {CheckUser , RequireAuth} = require('./middleware/authMiddleware.js')
const passport = require('passport')

const cors =require('cors')

require("./auth/passport")
require("dotenv").config()

PORT = process.env.PORT || 8000 

mongoose.connect('mongodb://localhost:27017/database')
app.use(cors())
app.use(express.json())
app.set('view engine','handlebars')
app.engine('handlebars',exphbs.engine())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join('public')))
app.use(router)


//verify middleware
app.get('*',CheckUser)
app.get('/jwtId/id',RequireAuth, (_,res)=>{
    res.status(200).send(res.locals.user._id)
})

app.listen(PORT , ()=>{
    console.log(`le port marche au port ${PORT}`);
})
