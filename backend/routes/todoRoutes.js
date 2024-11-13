const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const { authenticateToken } = require('../controllers/authController');

const router = express.Router();
router.post('/todos', authenticateToken, createTodo);
router.get('/todos', authenticateToken, getTodos);
router.put('/todos/:id', authenticateToken, updateTodo);
router.delete('/todos/:id', authenticateToken, deleteTodo);

module.exports = router;
