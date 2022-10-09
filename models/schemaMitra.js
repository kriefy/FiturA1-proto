const mongoose = require("mongoose");

const schemaMitra = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  nama_mitra: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  logo_mitra: {
    type: String,
    required: false,
  },
  alamat_mitra: {
    type: String,
    required: false,
  },
  berkas_mitra: {
    type: String,
    required: false,
  },
  nama_usaha: {
    type: Array,
    required: false,
  },
  status_mitra: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Mitra", schemaMitra);
