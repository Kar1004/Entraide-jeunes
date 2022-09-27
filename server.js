const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./model/UserModels.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = require("./router/router.js");



const cors = require("cors");
const auth = require("./auth/auth");

require("./auth/auth");
require("dotenv").config();

PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.DB, {

  })
  .then(() => {
    console.log("Welcome to my world");
  })
  .catch((error) => {
    console.log("La route risque d'étre longue ...!");
    console.error(error);
  });

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//verify middleware
// free endpoint
app.get("/user/CheckUser", (req, res) => {
  res.json({ message: "tu as accés"});
});

// authentication endpoint
app.get("/user/refresh", auth ,(req, res) => {
  res.json({ message: "tu as accés" })
});

app.listen(PORT, () => {
  console.log(`le port marche au port ${PORT}`);
});
