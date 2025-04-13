const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

const router = express.Router();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

/*-------------------------------------------
  Admin Login Route
---------------------------------------------*/
// Admin Login Route
// Admin Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password using bcrypt
    const bcrypt = require("bcrypt");
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token valid for 24 hours
    const token = jwt.sign({ adminId: admin._id }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// GET all admissions (protected route)
router.get("/admissions", async (req, res) => {
  try {
    // Check for valid JWT token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      // Fetch admissions from the database
      const admissions = await Admission.find().sort({ createdAt: -1 });
      res.json(admissions);
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  } catch (error) {
    console.error("Error fetching admissions:", error);
    res.status(500).json({ message: "Failed to fetch admissions" });
  }
});
module.exports = router;