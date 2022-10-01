const express = require("express");
const { Home } = require("../controllers/Home.js");
const {
  AllUser,
  UserInfo,
  udapteUser,
  DeleteUser,
  Unfollow,
  Follow,
  createProfil,
  editProfil,
} = require("../controllers/UserController.js");
const {
  readAllPost,
  createPost,
  UpdateMessagePost,
  deleteMessageUser,
  LikeMessage,
  UnLikeMessage,
  commentMessage,
  editCommentMessage,
  deleteCommentMessage,
} = require("../controllers/messageController");
const passport = require("passport");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../model/UserModels.js");

//jwt
const maxAge = 3 * 24 * 60 * 1000;
// Home

router.get("/Home", Home);

//authentification

// SIGNUP
router.post("/user/signup", (req, res) => {
  // hash the password
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new UserModel({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hashedPassword,
      });

      user
        .save()

        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })

        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    //
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

router.post("/user/login", (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      // compare les mots de passse
      console.log(user);
      bcrypt
        .compare(req.body.password, user.password)
        // si les mots de passe concorde
        .then((passwordCheck) => {
          //   regarde si ils ne matchent pas
          console.log(passwordCheck);
          if (!passwordCheck) {
            return res.status(400).send({
              message: "le mot de passe ne matche PAS",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "TOKEN_KEY",
            { expiresIn: maxAge }
          );

          //   return le succés de la réquéte
          res.status(200).send({
            message: "connecté",
            email: user.email,
            token,
          });
        })
        // crreur lié au mot de passe qui concordent pas
        .catch((error) => {
          res.status(400).send({
            message: "les mots de passent ne concordent pas",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email pas trouvé",
        e,
      });
    });
});

//logout
// utilise les cookies pour déconnecté l'utilisateur
router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 }), res.redirect("/");
});

//Général

router.get("/", AllUser);

//Info of user
router.get("/:id", UserInfo);

//info profil

router.patch("/user/create/:id", createProfil)

//info profil

router.patch("/user/edit/:id", editProfil)

//udapte a User

router.put("/:id", udapteUser);

//delete User

router.delete("/:id", DeleteUser);

//patch for followers

router.patch("/follow/:id", Follow);
router.patch("/unfollow/:id", Unfollow);

//Avoir tous les messages
router.get("/message/allMessage", readAllPost);

//Obtenir un message
router.post("/message/createMessage", createPost);

//udpate le message

router.put("/message/:id", UpdateMessagePost);

//Delete Message

router.delete("/message/:id", deleteMessageUser);

// LIke Message

router.patch("/likeMessage/:id", LikeMessage);
//Unlike Message

router.patch("/UnlikeMessage/:id", UnLikeMessage);

//patch

// router.patch('/comments/:id',commentMessage)
// router.patch('/edit-comments/:id',editCommentMessage)
// router.patch('/deletecomments/:id',deleteCommentMessage)

module.exports = router;
