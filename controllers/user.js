const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
      successMessage: `${username} added with success.`,
      newUser,
    });
  } catch (err) {
    console.log("aadduserController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

/* readall users controller */
exports.readAll = async (req, res) => {              
  try { 
    const users = await User.find({});
    res.json({users});

  } catch (err) {
      console.log (err, 'adduserController.readAll error');
      res.status(500).json({
      errorMessage: 'please try again later'
                  });
              }                   
          };





