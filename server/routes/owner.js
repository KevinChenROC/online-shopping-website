const router = require("express").Router();
const Owner = require("../models/owner");
const upload = require("../middlewares/upload-photo");

// POST
//   title: String,
//   about: String,
//   photo: String,

router.post("/owners", upload.single("photo"), async (req, res) => {
  try {
    const owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.file.location;

    await owner.save();

    res.json({
      success: true,
      message: "Successfully created a owner",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET all owners
router.get("/owners", async (req, res) => {
  try {
    let owners = await Owner.find();
    res.json({
      success: true,
      owners: owners,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
