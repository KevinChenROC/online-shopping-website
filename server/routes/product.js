const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");

//POST - create a new product
//   title: String,
//   description: String,
//   photo: String,
//   stockQuantity: Number

router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();

    res.json({
      status: true,
      message: "successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//GET - get all products

//GET - get a product

//PUT - update a product

//DELETE - delete a product

module.exports = router;
