const mongoose = require("mongoose");

const schemaTodoList = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TodoList", schemaTodoList);
