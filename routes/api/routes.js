const { Router } = require("express");
const controller = require("../../controller/controller");

const router = Router();

// GET
router.get("/", controller.getTodos);

// POST
router.post("/", controller.createTodo);

// DELETE
router.delete("/:id", controller.deleteTodo);

// UPDATE
router.patch("/:id", controller.updateTodo);

module.exports = router;
