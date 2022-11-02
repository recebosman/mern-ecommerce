const { isAdmin } = require("../Middleware/Verify");
const Products = require("../models/Products");
const router = require("express").Router();

// CREATE

router.post("/create-product", isAdmin, async function (req, res) {
  const newProduct = new Products(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    console.log(err);
  }
});

// UPDATE

router.put("/update-product/:id", isAdmin, async function (req, res) {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    console.log(err);
  }
});

// DELETE

router.delete("/delete-product/:id", isAdmin, async function (req, res) {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).send("Product deleted");
  } catch (err) {
    console.log(err);
  }
});

// GET PRODUCT

router.get("/find-product/:id", async function (req, res) {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
  }
});

// GET ALL PRODUCTS

router.get("/all-products", async function (req, res) {
  try {
    const products = await Products.find();
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
