const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema(
  {

    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      validate: [isEmail],
    },
    password: {
      type: String,
      require: true,
      maxlenght: 100,
      minlenght: 6,
    },
      messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required:true
    }],
    bio: {
      type: [
        {
          pseudo: {
            type: String,
            maxlenght: 20,
            minlenght: 2,
            trim: true,
          },
          bio: {
            type: String,
            maxlenght: 4000,
          },
          picture: {
            type: String,
          },
          timestamp: {
            type: Number,
            default: Date.now,
            immutable: true,
            required: true,
          },
        },
      ],
      required: true,
    },

    followers: {
      type: [String],
    },
    following: {
      type: [String],
    },
    like: {
      type: [String],
    },
    blogs: {
      type: [
        {
          title: {
            type: String,
            maxlenght: 20,
            minlenght: 2,
            trim: true,
          },
          blog: {
            type: String,
            maxlenght: 4000,
          },
          picture: {
            type: String,
          },
          timestamp: {
            type: Number,
            default: Date.now,
            immutable: true,
            required: true,
          },
          like: {
            type: [String],
          },
        },
      ],
      required: true,
    },
    contact: {
      type: [
        {
          age: {
            type: String,
            maxlenght: 2,
            minlenght: 1,
          },
          city: {
            type: String,
            maxlenght: 400,
          },
        },
      ],
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
