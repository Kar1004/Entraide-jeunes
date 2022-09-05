const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const exphbs= require('express-handlebars')
const router = require('./router/router')
const path = require('path')

require("./auth/passport")
require("dotenv").config()

PORT = process.env.PORT || 8000 

mongoose.connect('mongodb://localhost:27017/database')
app.use(express.json())
app.use(router)
app.set('view engine','handlebars')
app.engine('handlebars',exphbs.engine())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join('public')))


app.listen(PORT , ()=>{
    console.log(`le port marche au port ${PORT}`);
})
