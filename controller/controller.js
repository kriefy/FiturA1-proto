const Restoran = require("../models/schemaRestoran");

// POST
exports.addRestoran = async (req, res) => {
  const data = {
    logo_restoran: req.file ? req.file.path : undefined,
    alamat_restoran: req.body.alamat_restoran,
    rating_restoran: req.body.rating_restoran,
    // nama_restoran: req.body.nama_restoran,
    kategori_restoran: req.body.kategori_restoran,
    berkas_restoran: req.file ? req.file.path : undefined,
    fasilitas_restoran: req.body.fasilitas_restoran,
    status_restoran: req.body.status_restoran,
    jam_buka_restoran: req.body.jam_buka_restoran,
    jam_tutup_restoran: req.body.jam_tutup_restoran
  };

  const newRestoran = new Restoran(data);
  try {
    const restoran = await newRestoran.save();
    if (!restoran) throw new Error("Pendaftaran restoran gagal");
    res.status(200).json(restoran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET
exports.getRestoran = async (req, res) => {
  try {
    const dataRestoran = await Restoran.find();
    if (!dataRestoran) throw new Error("Restoran tidak ditemukan");
    res.status(200).json(dataRestoran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteRestoran = async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await Restoran.findByIdAndDelete(id);
    if (!removed) throw Error("Gagal menghapus restoran");
    res.status(200).json(removed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateRestoran = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Restoran.findByIdAndUpdate(id, req.body);
    if (!response) throw Error("Gagal mengupdate restoran");
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
