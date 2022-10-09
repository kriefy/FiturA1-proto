const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const routes = require("./routes/api/routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

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

app.use("/", routes);

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
