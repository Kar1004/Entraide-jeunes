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
  editBlog,
  DeleteBlog,
  createBlog,
  editPseudo,
  editBio,
  editContact,
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
  messageInfo,
  readAllPostWitchNopopulate,
  deleteUser,
} = require("../controllers/messageController");
const passport = require("passport");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../model/UserModels.js");
const messageModels = require("../model/messagePostModel.js");

//jwt
const maxAge = 3 * 24 * 60 * 1000;
// Home

router.get("/Home", Home);

//authentification

// SIGNUP
router.post("/user/signup", (req, res) => {
  //hashé le password

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
            message: "l'utilisateur a bien été crée",
            result,
          });
        })
    

        .catch((error) => {
          res.status(500).send({
            message: "l'utilisateur n'a pas été crée",
            error,
          });
        });
    })
    //
    .catch((e) => {
      res.status(500).send({
        message: "le mdp n''est pas hashé correctement",
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
            process.env.TOKEN_KEY,
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

//Info de l' user
router.get("/:id", UserInfo);

//créer un profil

router.patch("/user/create/:id", createProfil)

//éditer un profil

router.patch("/user/editProfil/:id", editProfil)

// éditer son pseudo ou sa bio
router.put("/user/editPseudo/:id", editPseudo)

router.put("/user/editBio/:id", editBio)

// éditer la page contact

router.patch("/user/editContact/:id", editContact)
//udapte a User

router.put("/:id", udapteUser);

//delete User

router.delete("/deleteUser/:id", DeleteUser);

//
router.delete("/deleteUserId/:id", deleteUser);

//populate

// findAll
// router.get('/user/userInformation', (req,res)=>{
//   UserModel.find().populate('messages').exec()
//   .then(docs => {
//      res.status(200).json({
//       users : docs
//      })
//     })
//   .catch((e)=>{
//     res.status(500).json({error: e})
//   })
// })


router.get('/message/userInformation', (req,res)=>{
  messageModels.findOne().populate('users').exec()
  .then(docs => {
     res.status(200).json({
     users: docs
     })
    })
  .catch((e)=>{
    res.status(500).json({error: e})
  })
})


//create blog

router.patch("/user/create/:id", createBlog)

//blog edit

router.patch("/user/edit/:id", editBlog)


//delete blog

router.delete("/:id", DeleteBlog);

//patch for followers

router.patch("/follow/:id", Follow);
router.patch("/unfollow/:id", Unfollow);






//Avoir tous les messages
router.get("/message/allMessage", readAllPost);

//avoir tous les messages sans populate
router.get("/message/nopopulate",readAllPostWitchNopopulate)
//creer un message
router.post("/message/createMessage/:id", createPost);

//Obtenir un message
router.get("/message/infoUser/:id", messageInfo);

//udpate le message

router.put("/message/updateMessage/:users", UpdateMessagePost);

//Delete Message

router.delete("/message/deleteMessage/:users", deleteMessageUser);

// LIke Message

router.patch("/likeMessage/:id", LikeMessage);
//Unlike Message

router.patch("/UnlikeMessage/:id", UnLikeMessage);

//patch

//  router.patch('/comments/:id',commentMessage)
// router.patch('/edit-comments/:id',editCommentMessage)
// router.patch('/deletecomments/:id',deleteCommentMessage)

module.exports = router;
