const router = require("express").Router();
const Category = require("../models/category");

// POST
router.post("/categories", async (req, res) => {
  try {
    const category = new Category();
    category.type = req.body.type;

    await category.save();

    res.json({
      success: true,
      message: "Successfully created a category",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET
router.get("/categories", async (req, res) => {
  try {
    let categories = await Category.find();
    res.json({
      success: true,
      categories: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
