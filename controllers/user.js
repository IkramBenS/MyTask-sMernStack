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

/* delte user controller */
exports.delete = async (req, res) => {              
  try { 
       const userId = req.params.userId;
       const deletedUser = await User.findByIdAndDelete(userId);

       /* fs.unlink(`uploads/${deletedProduct.fileName}`, (err) => {
           if (err) throw err;
           console.log(
              'Image successfuly deleted from filesystem: ',
              deletedProduct.fileName
               );
       });
       */
       res.json(deletedUser);
  } catch (err) {
      console.log (err, 'userController.delete error');
      res.status(500).json({
      errorMessage: 'please try again later'
          });
      }                   
  };
/* read user controller */
  exports.read = async (req, res) => {              
    try {
        const userId = req.params.userId

        const user = await User.findById(userId);
            
        res.json(user);

    } catch (err) {
        console.log (err, 'userController.read error');
        res.status(500).json({
        errorMessage: 'please try again later'
                    });
                }                   
            };

/* update user controller */
exports.update = async (req, res) => {
  const userId = req.params.userId;
  console.log('req.body', req.body);
  console.log('userId', userId);

  const {username,email,title,tel}= req.body;
  console.log(username)
  const oldUser = await User.findByIdAndUpdate(userId,req.body);
  
  res.json({
    successMessage: 'User successfully updated',
  });
};