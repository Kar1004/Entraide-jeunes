const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  posterId: {
    type: String,
    require: true,
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

const messageModels = mongoose.model("Message", messageSchema);

module.exports = messageModels;
