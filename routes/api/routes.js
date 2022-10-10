const { Router } = require("express");
const controller = require("../../controller/controller");
const multer = require("multer");

const router = Router();
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const uploads = multer({ storage: fileStorage });

// GET
router.get("/", controller.getMitra);

// POST
router.post("/", uploads.single("logo_mitra"), controller.addMitra);

// DELETE
router.delete("/:id", controller.deleteMitra);

// UPDATE
router.patch("/:id", controller.updateMitra);

module.exports = router;
