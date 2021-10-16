const mongoose = require("mongoose");

const AdminuserSchema = new mongoose.Schema( 
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

const Adminuser = mongoose.model("Adminuser", AdminuserSchema);
module.exports = Adminuser;
