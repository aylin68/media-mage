const router = require("express").Router();
const User = require("../models/User");
// brcypt used to hash the password
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // checking if user exists
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    console.log(user);
    // checking if password match
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
      function (err, result) {
        if (!result) {
          return res.status(420).json("wrong password");
        } else {
          res.status(200).json(user);
        }
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
