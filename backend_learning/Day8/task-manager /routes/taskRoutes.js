const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


router.post('/' , taskController.createTask);
router.get('/' , taskController.getAllTasks);
router.get('/' , taskController.getTaskById);
router.get('/' , taskController.updateTaskById);


module.exports = router;