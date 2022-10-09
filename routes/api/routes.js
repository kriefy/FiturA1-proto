const { Router } = require("express");
const TodoTasks = require("../../models/schema");

const router = Router();

// GET
router.get("/", async (req, res) => {
  try {
    const Todo = await TodoTasks.find();
    if (!Todo) throw new Error("No Todo");
    const sorted = Todo.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    res.status(200).json(sorted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST
router.post("/", async (req, res) => {
  const newTodo = new TodoTasks(req.body);
  try {
    const Todo = await newTodo.save();
    if (!Todo) throw new Error("Something went wrong saving Todo");
    res.status(200).json(Todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await TodoTasks.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await TodoTasks.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Something went wrong ");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
