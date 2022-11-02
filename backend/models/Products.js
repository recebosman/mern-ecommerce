const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
