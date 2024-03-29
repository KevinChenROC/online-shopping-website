const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");

//POST - create a new product
router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    console.log(req.body);
    let product = new Product();
    product.owner = req.body.ownerID;
    product.category = req.body.categoryID;
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.stockQuantity = req.body.stockQuantity;
    product.photo = req.file.location;

    await product.save();

    res.json({
      success: true,
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
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find()
      .populate("owner category")
      .populate("reviews", "rating")
      .exec();
    res.json({
      success: true,
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET - get a product
router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id })
      .populate("owner category")
      .populate("reviews", "rating")
      .exec();
    res.json({
      success: true,
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//PUT - update a product
router.put("/products/:id", upload.single("photo"), async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.categoryID,
          photo: req.file.location,
          description: req.body.description,
          owner: req.body.ownerID,
        },
      },
      { upsert: true }
    );
    res.json({
      success: true,
      updatedProduct: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//DELETE - delete a product
router.delete("/products/:id", async (req, res) => {
  try {
    let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

    if (deletedProduct)
      res.json({
        success: true,
        message: "successfully deleted",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
