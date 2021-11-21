const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const { authenticatateJWT } = require('../middlware/authenticator');


router.post('/', taskController.create);

module.exports = router;
