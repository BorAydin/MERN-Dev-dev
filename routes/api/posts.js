const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route  POST api/posts
// @desc   Create a post
// @access Private
router.post(
  "/",
  auth,
  [check("text", "Yorum gereklidir.").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).send("Sunucu hatası.");
    }
  }
);

// @route  GET api/posts
// @desc   Get all posts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send("Sunucu hatası.");
  }
});

// @route  GET api/posts/:id
// @desc   Get post by ID
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post bulunamadı." });
    }
    res.json(post);
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post bulunamadı." });
    }
    res.status(500).send("Sunucu hatası.");
  }
});

// @route  DELETE api/posts/:id
// @desc   Delete a post
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post bulunamadı." });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Kullanıcı yetkili değil." });
    }

    await post.remove();

    res.json({ msg: "Post kaldırıldı." });
  } catch (err) {
    console.log(err);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post bulunamadı." });
    }
    res.status(500).send("Sunucu hatası.");
  }
});

module.exports = router;
