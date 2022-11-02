const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// connect to mongodb
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

// routes
app.use("/api/user", require("./controllers/User"));
app.use("/api/admin", require("./controllers/Product"));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
