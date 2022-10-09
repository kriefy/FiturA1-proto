const Mitra = require("../models/schemaMitra");

// GET
exports.getMitra = async (req, res) => {
  try {
    const dataMitra = await Mitra.find();
    if (!dataMitra) throw new Error("Mitra tidak ditemukan");
    res.status(200).json(dataMitra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST
exports.createNewMitra = async (req, res) => {
  const newMitra = new Mitra(req.body);
  try {
    const mitra = await newMitra.save();
    if (!mitra) throw new Error("Pendaftaran mitra gagal");
    res.status(200).json(mitra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteMitra = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await Mitra.findByIdAndDelete(id);
    if (!removed) throw Error("Gagal menghapus mitra");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateMitra = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Mitra.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Gagal mengupdate mitra");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
