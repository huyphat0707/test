const express = require('express');
const questionController = require('../controllers/question');
const authMiddleware = require('../middleware/auth');
const router = express.Router();
// router.use(authMiddleware.authenticate);

router.post('/', questionController.create);
router.get('/', questionController.list);
module.exports = router;