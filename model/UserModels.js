const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const mongoose = require("mongoose");

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
  },
  {
    timeStamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
