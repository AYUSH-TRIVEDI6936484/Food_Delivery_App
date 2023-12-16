const express = require("express");
const router = express.Router();
const user = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    await user.create({
      name: "Ayush",
      password: "Ayush123",
      email: "ayush123@gmail.com",
      location: "Lucknow",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
module.exports = router;
