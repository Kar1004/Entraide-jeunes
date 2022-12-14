const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({

  type:{
    type:String,
    require:true
  },
  
  users:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required:true
},
  message: {
    type: String,
    require: true,
    maxlenght: 1000,
    trim: true,
  },
  picture: {
    type: String,
  },
  video: {
    type: String,
  },
  liker: {
    type: [String],
  },
  comment: {
    type: [
      {
        commentId: String,
        commenterSpeudo: String,
        text: String,
        timestamps: Number,
      },
    ],
    require: true,
  },

},{
    timestamps:true,
});

const messageModels = mongoose.model("messages", messageSchema,"messages");

module.exports = messageModels;
