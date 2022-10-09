const { Router } = require("express");
const controller = require("../../controller/controller");

const router = Router();

// GET
router.get("/", controller.getMitra);

// POST
router.post("/", controller.createNewMitra);

// DELETE
router.delete("/:id", controller.deleteMitra);

// UPDATE
router.patch("/:id", controller.updateMitra);

module.exports = router;
