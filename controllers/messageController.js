const messageModels = require("../model/messagePostModel")
const UserModel = require("../model/UserModels")
const router = require("../router/router")
const ObjectId = require('mongoose').Types.ObjectId

exports.readAllPost = async (req, res) => {
    messageModels.find().populate('users').exec()
    .then(docs => {
       res.status(200).json({
       users: docs
       })
      })
    .catch((e)=>{
      res.status(500).json({error: e})
    })
}

exports.readAllPostWitchNopopulate = async (req, res) => {
    messageModels.find()
    .then(docs => {
       res.status(200).json({
       users: docs
       })
      })
    .catch((e)=>{
      res.status(500).json({error: e})
    })
}

exports.createPost = async (req, res) => {
    const message = new messageModels({
        type: req.body.type,
        users: req.params.id,
        message: req.body.message,
        video: req.body.video,
        picture:req.body.picture,
        liker: [],
        comment: {},
    })
    await message.save().then(msg =>

        res.status(200).json(msg))
}


exports.messageInfo = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).send("ID UKNOW");
    }
    messageModels.findById(req.params.id, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log("id uknow" + err);
      }
    }) ;
  };
exports.UpdateMessagePost = async (req, res) => {
     
    try {
        const msg = messageModels
        if(msg.users === req.params.user)  {
        messageModels.findOneAndUpdate(req.params.users, {
            $set: {
                message: req.body.message
            }
        }, { new: true }, (_, docs) => {
            return res.send(docs);
        })
    }
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}


exports.deleteMessageUser = async (req, res) => {
    try {
        messageModels.findOneAndDelete(req.params.users).exec();
        return res.status(200).json({ message: " deleted" })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}


exports.LikeMessage = async (req, res) => {

    try {
        await messageModels.findById(req.params.id, {
            $addToSet: {

                Likers: req.body.id,
            }
        }, { nex: true }, (err, docs) => {
            if (!err) {
                return res.send(docs);
            } else {
                return res.status(200).json({ message: err })
            }
        })

        UserModel.findOneAndUpdate(req.body.id, {
            $addToSet:
            {
                Like: req.params.id
            }
        },
            { new: true }, (err, docs) => {
                res.status(400).json(err)
            }
        )
    } catch (err) {
        return res.status(500).json({ message: err })
    }

}


exports.UnLikeMessage = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('ID UKNOW')
    }
    try {
        await messageModels.findById(req.params.id, {
            $pull: {

                Likers: req.body.id,
            }
        }, { nex: true }, (err, docs) => {
            if (!err) {
                return res.send(docs);
            } else {
                return res.status(200).json({ message: err })
            }
        })

        UserModel.findOneAndUpdate(req.body.id, {
            $pull:
            {
                Like: req.params.id
            }
        },
            { new: true }, (err, docs) => {
                res.status(400).json(err)
            }
        )
    } catch (err) {
        return res.status(500).json({ message: err })
    }

}


  

//Comment

// exports.commentMessage = (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send('ID UKNOW : ' + req.params.id)
//     }

//     try {

//         messageModels.findByIdAndUpdate(req.params.id, {
//             $push: {
//                 comments: {
//                     commentId: req.body.commentId,
//                     commenterSpeudo: req.body.speudoId,
//                     text: req.body.text,
//                     timestamps: new Date().getTime()
//                 }

//             },
//             { new: true }, (err, docs) => {
//                 if (err) {
//                     return res.status(400).send(err);
//                 } else {
//                     return res.status(200).json(docs)
//                 }
//             }
//         )
//     } catch (err) {
//         return res.status(400).send(err);
//     }
// }

// //edit comment

// exports.editCommentMessage = (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send('ID UKNOW' + req.params.id)
//     }
// }

// //Dete comment

// exports.deleteCommentMessage = (req, res) => {
//     if (!ObjectId.isValid(req.params.id)) {
//         return res.status(400).send('ID UKNOW' + req.params.id)
//     }

// }