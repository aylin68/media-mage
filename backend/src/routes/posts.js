const router = require("express").Router();
const Post = require("../models/Post2");
const User = require("../models/User");

// create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can only update your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// comment on a post
router.patch("/comment/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.updateOne({ $push: {comments: req.body }});
    res.status(200).json("the comment has been added");
  } catch (error) {
    res.status(500).json(error);
  }
});

// like or unlike a post
router.patch("/likes/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)){
      await post.updateOne({ $push: {likes: req.body.userId }});
      res.status(200).json("the like has been added");
    } else if (post.likes.includes(req.body.userId)){
      await post.updateOne({ $pull: {likes: req.body.userId }});
      res.status(200).json("the like has been removed");
    } else {
      res.status(403).json("like could not be handled");
    }    
  } catch (error) {
    res.status(500).json(error);
  }
});

// dislike or undislike a post
router.patch("/dislikes/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.dislikes.includes(req.body.userId)){
      await post.updateOne({ $push: {dislikes: req.body.userId }});
      res.status(200).json("the dislike has been added");
    } else if (post.dislikes.includes(req.body.userId)){
      await post.updateOne({ $pull: {dislikes: req.body.userId }});
      res.status(200).json("the dislike has been removed");
    } else {
      res.status(403).json("dislike could not be handled");
    }    
  } catch (error) {
    res.status(500).json(error);
  }
});



// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can only update your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
