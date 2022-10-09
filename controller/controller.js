const Mitra = require("../models/schemaMitra");

// POST
exports.addMitra = async (req, res) => {
  const data = {
    description: req.body.description,
    nama_mitra: req.body.nama_mitra,
    date: req.body.date,
    logo_mitra: req.file ? req.file.path : undefined,
    alamat_mitra: req.body.alamat_mitra,
    berkas_mitra: req.file ? req.file.path : undefined,
    nama_usaha: req.body.nama_usaha,
    status_mitra: req.body.status_mitra,
  };

  const newMitra = new Mitra(data);
  try {
    const mitra = await newMitra.save();
    if (!mitra) throw new Error("Pendaftaran mitra gagal");
    res.status(200).json(mitra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
