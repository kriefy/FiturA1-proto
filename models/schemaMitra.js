const mongoose = require("mongoose");

const schemaMitra = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  // nama_mitra: {
  //   type: String,
  //   required: true,
  // },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // logo: {
  //   type: String,
  //   required: true,
  // },
  // alamat: {
  //   type: String,
  //   required: true,
  // },
  // berkas: {
  //   type: String,
  //   required: true,
  // },
  // nama_usaha: {
  //   type: Array,
  //   required: true,
  // },
  // status_mitra: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Mitra", schemaMitra);
