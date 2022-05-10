const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  if (req.bosy.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
});

// GET USER BY ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc; // _doc command carry all the users objects
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/search/:username", async (req, res) => {
  let query = {
    username: {
      $regex: req.params.username,
      $options: "i",
    },
  };
  const users = await User.find(query);
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/many", async (req, res) => {
  try {
    const users = await User.find()
      .where("_id")
      .in(req.body)
      .exec((err, records) => {
        res.status(200).json(records);
      });
  } catch (error) {
    res.status(500).json(error);

    //   const users = await User.find(req.params.id);
    //   const { password, updatedAt, ...other } = user._doc; // _doc command carry all the users objects
    //   res.status(200).json(other);
    // }
  }
});

// router.get("/", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try {
//     const user = userId
//       ? await User.findById(userId)
//       : await User.findOne({ username: username });
//     const { password, updatedAt, ...other } = user._doc; // _doc command carry all the users objects
//     res.status(200).json(other);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });

// GET FRIENDS
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FOLLOW A USER
router.patch("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({
          $push: { followings: req.params.id },
        });
        res.status(200).json("User has been followed");
      } else {
        res.status(403).json("You already follow this user!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't follow yourself!");
  }
});

// UNFOLLOW A USER
router.patch("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({
          $pull: { followings: req.params.userId },
        });
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(403).json("You don't follow this user!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't unfollow yourself");
  }
});

module.exports = router;
