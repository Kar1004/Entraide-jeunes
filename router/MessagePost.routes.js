const express = require('express')
const { readAllPost, createPost, UpdateMessagePost, deleteMessageUser } = require('../controllers/messageController')

const router = express.Router()


//Avoir tous les messages 
router.get('/', readAllPost)



//Obtenir un message
router.post('/',createPost)


//udpate le message

router.put('/:id', UpdateMessagePost)


//Delete Message

router.delete('/:id', deleteMessageUser)


// LIke Message

router.patch('/likeMessage/:id', LikeMessage)
//Unlike Message

router.patch('/UnlikeMessage/:id', UnLikeMessage)