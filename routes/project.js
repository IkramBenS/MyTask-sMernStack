const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');
const { authenticatateJWT } = require('../middlware/authenticator');


router.post('/',authenticatateJWT, projectController.create);
router.get('/', authenticatateJWT, projectController.readAll);
router.get("/:projectId", projectController.read);
router.post("/:projectId",authenticatateJWT, projectController.update);
router.delete("/:projectId", authenticatateJWT, projectController.delete);


module.exports = router;
