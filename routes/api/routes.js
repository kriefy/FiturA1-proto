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
router.get("/", controller.getRestoran);

// POST
router.post("/", uploads.single("logo_restoran"), controller.addRestoran);

// DELETE
router.delete("/:id", controller.deleteRestoran);

// UPDATE
router.patch("/:id", controller.updateRestoran);

module.exports = router;
