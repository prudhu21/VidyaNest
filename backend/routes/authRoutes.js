const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/auth/register", async (req, res) => {
  try {
    const { username, email } = req.body;
    const exists =
      (await User.findOne({ username })) || (await User.findOne({ email }));
    if (exists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = new User(req.body);
    await user.save();

    const { password, ...safe } = user.toObject();
    return res.status(201).json({ message: "Registered", user: safe });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


router.post("/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password }).select("-password -__v");
    if (!user) return res.status(401).json({ message: "Invalid username or password" });

    return res.json({ message: "Login successful", user });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.get("/auth/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select("-password -__v");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.put("/auth/profile/:username", async (req, res) => {
  try {
    const updated = await User.findOneAndUpdate(
      { username: req.params.username },
      { $set: req.body },
      { new: true }
    ).select("-password -__v");

    if (!updated) return res.status(404).json({ message: "User not found" });
    return res.json({ message: "Profile updated", user: updated });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
