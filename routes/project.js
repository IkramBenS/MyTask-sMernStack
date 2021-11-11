const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const { authenticatateJWT } = require('../middlware/authenticator');


router.post('/', projectController.create);
router.get('/',  projectController.readAll);
router.get("/:projectId", projectController.read);
router.post("/:projectId", projectController.update);
router.delete("/:projectId", projectController.delete);


module.exports = router;
