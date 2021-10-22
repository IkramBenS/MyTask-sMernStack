const express = require("express");
const router = express.Router();
const { autenticatateJWT } = require('../middlware/authenticator');

const userController = require('../controllers/user');


router.get("/", userController.readAll);
router.delete("/:userId",autenticatateJWT, userController.delete);
router.get("/:userId", userController.read);
router.put("/:userId",autenticatateJWT, userController.update);

module.exports = router;
