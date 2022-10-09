const TodoTasks = require("../models/schemaTodoList");

// GET
exports.getTodos = async (req, res) => {
  try {
    const todos = await TodoTasks.find();
    if (!todos) throw new Error("No items");
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST
exports.createTodo = async (req, res) => {
  const newTodo = new TodoTasks(req.body);
  try {
    const Todo = await newTodo.save();
    if (!Todo) throw new Error("Something went wrong saving Todo");
    res.status(200).json(Todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await TodoTasks.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await TodoTasks.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Something went wrong ");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
