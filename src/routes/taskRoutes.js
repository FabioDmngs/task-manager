const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const {  requireAuth } = require('../middleware/auth');

router.use(requireAuth);

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.post('/tasks/:id/toggle', taskController.toggleTask);
router.post('/tasks/:id/delete', taskController.deleteTask);

module.exports = router;