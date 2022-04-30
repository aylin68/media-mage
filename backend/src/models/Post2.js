const mongoose = require("mongoose");

const PostSchema2 = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    postType: {
      type: String,
      required: true,
    },
    postContent: {
      type: String,
      required: true,
    },
    postTitle: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "src/assets/images/icon.png"
    },
    comments: {
      type: Array,
      default: [],
    },
    likes: {
      type: Array,
      default: [],
    },
    dislikes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema2);
