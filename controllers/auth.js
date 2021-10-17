const User = require("../models/User");
const Adminuser = require("../models/Adminuser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys"); 

exports.signupController = async (req, res) => {
  const { username, email, password} = req.body;

  try {
    const adminuser = await Adminuser.findOne({ email }); 
    if (adminuser) {
      return res.status(400).json({
        errorMessage: "Email already exists",
      });
    }
    const newAdminuser = new Adminuser(); 
    newAdminuser.username = username;
    newAdminuser.email = email;

    const salt = await bcrypt.genSalt(10);
  
    newAdminuser.password = await bcrypt.hash(password, salt);
    await newAdminuser.save(); 

    res.json({
      successMessage: "Registration success . Please signin.",
    });
  } catch (err) {
    console.log("signupController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

/***************adduser controller *********************/
exports.adduserController = async (req, res) => {
  const { username, email, password, title, tel } = req.body;

  try {
    const user = await User.findOne({ email }); 
    if (user) {
      return res.status(400).json({
        errorMessage: "Email already exists",
      });
    }
    const newUser = new User(); 
    newUser.username = username;
    newUser.email = email;
    newUser.title = title;
    newUser.tel = tel;

    const salt = await bcrypt.genSalt(10);
  
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save(); 

    res.json({
      successMessage: "New user added with success.",
    });
  } catch (err) {
    console.log("aadduserController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};
/***************signin controller *********************/
exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errorMessage: "Invalid credentials user",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid credentials user",
      });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    await jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: jwtExpire },
      (err, token) => {
        if (err) console.log("jwt error:", err);
        const { _id, username, email, role } = user;

        res.json({
          token,
          user: { _id, username, email, role },
        });
      }
    );
  } catch (err) {
    console.log("signinController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};
/***************signin admin controller *********************/
exports.signinadminController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminuser = await Adminuser.findOne({ email });
    if (!adminuser) {
      return res.status(400).json({
        errorMessage: "Invalid mail",
      });
    }

    const isMatch = await bcrypt.compare(password, adminuser.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid mdp",
      });
    }

    const payload = {
      adminuser: {
        _id: adminuser._id,
      },
    };

    await jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: jwtExpire },
      (err, token) => {
        if (err) console.log("jwt error:", err);
        const { _id, username, email, role } = adminuser;

        res.json({
          token,
          adminuser: { _id, username, email, role },
        });
      }
    );
  } catch (err) {
    console.log("signinController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};





