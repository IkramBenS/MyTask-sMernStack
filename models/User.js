const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( 
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      default: "",
    },

    role: {
      type: Number,
      default: 0, 
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
