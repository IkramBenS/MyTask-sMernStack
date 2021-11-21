const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const { authenticatateJWT } = require('../middlware/authenticator');


router.post('/', taskController.create);
router.get('/',  taskController.readAll);
router.delete("/:taskId", taskController.delete);
router.get("/:taskId", taskController.read);

router.post("/:taskId", taskController.update);

module.exports = router;
