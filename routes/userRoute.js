const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.send("User registration was successful");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
module.exports = router;
