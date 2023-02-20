const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "Bu kullanıcı için profil yok." });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Sunucu Hatası");
  }
});

module.exports = router;
