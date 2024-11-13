const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
  const { task } = req.body;
  try {
    const newTodo = new Todo({
      userId: req.user.userId,  
      task
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.userId });
    res.json(todos);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task, completed }, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Server error');
  }
};
