const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 50,
    },
    img: {
      type: String,
    },
    likes: {
      type: String,
      default: [],
    },
  },
  { timestamps: true }
);

module.export = mongoose.model("Post", PostSchema);
