const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verify } = require("../Middleware/Verify");
const router = require("express").Router();

// REGISTER

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).send({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).send("Wrong password");
    if (validPassword) {
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "3d" }
      );
      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, accessToken });
    }
  } catch (error) {
    console.log(error);
  }
});

// get user

router.get("/find/:id", verify, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
