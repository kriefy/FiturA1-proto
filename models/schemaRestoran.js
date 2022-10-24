const mongoose = require("mongoose");

const schemaRestoran = new mongoose.Schema({
  logo_restoran: {
    type: String,
    required: true,
  },
  alamat_restoran: {
    type: String,
    require: true,
  },
  rating_restoran: {
    type: Number,
    required: true,
  },
  kategori_restoran: {
    type: String,
    required: true,
  },
  // Produk: {
  //   type: String,
  //   required: true,
  // },
  berkas_restoran: {
    type: String,
    required: true,
  },
  fasilitas_restoran: {
    type: Array,
    require: true,
  },
  status_restoran: {
    type: Boolean,
    require: true,
  },
  jam_buka_restoran: {
    type: Number,
    require: true,
  },
  jam_tutup_restoran: {
    type: Number,
    require: true,
  }
  // nama_usaha: {
  //   type: Array,
  //   required: true,
  // },
});

module.exports = mongoose.model("Restoran", schemaRestoran);
