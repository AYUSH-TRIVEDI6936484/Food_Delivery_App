const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await user.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return res
          .status(404)
          .json({ errors: "Try logging with correct credentials" });
      }
      if (req.body.password !== userData.password) {
        return res
          .status(404)
          .json({ errors: "Try logging with correct credentials" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
