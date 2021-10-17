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
  signinadminController,
  adduserController,
} = require("../controllers/auth");

router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signinuser", signinValidator, validatorResult, signinController);
router.post("/signinadmin", signinValidator, validatorResult, signinadminController);
router.post("/adduser", adduserValidator, validatorResult, adduserController);

module.exports = router;
