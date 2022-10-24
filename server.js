const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/api/routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Terkoneksi ke database");
  })
  .catch((err) => {
    console.log("Koneksi ke database gagal", err);
  });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/", routes);

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
