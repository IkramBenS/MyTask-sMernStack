const express = require("express");
const router = express.Router();

const {
  signupValidator,
  signinValidator,
  validatorResult,
  adduserValidator,

} = require("../middlware/validator");

const {
  signupController,
  signinController,
  adduserController,
} = require("../controllers/auth");

router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);
router.post("/adduser", adduserValidator, validatorResult, adduserController);


module.exports = router;
