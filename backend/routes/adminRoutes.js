const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Admission = require("../models/Admission");
const { sendEmail } = require("../utils/email"); // Import email utility
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
console.log("JWT_SECRET used:", JWT_SECRET);

// Existing login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Login attempt:", { username, password });
    const admin = await Admin.findOne({ username });
    console.log("Admin found:", admin);
    if (!admin) {
      console.log("No admin found for username:", username);
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (admin.password !== password) {
      console.log("Password mismatch for username:", username);
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ adminId: admin._id }, JWT_SECRET, {
      expiresIn: "24h",
    });
    console.log("Generated token:", token);
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

// Existing admissions GET route
router.get("/admissions", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    console.log("Received token:", token);
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("Decoded token:", decoded);
      const admissions = await Admission.find().sort({ createdAt: -1 });
      res.json(admissions);
    } catch (error) {
      console.error("Token verification error:", error.message);
      return res.status(403).json({ 
        message: "Invalid token", 
        error: error.message 
      });
    }
  } catch (error) {
    console.error("Error fetching admissions:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// New PATCH route for updating admission status
router.patch("/admissions/:id", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify JWT
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      console.error("Token verification error:", error.message);
      return res.status(403).json({ 
        message: "Invalid token", 
        error: error.message 
      });
    }

    const { status } = req.body;
    const { id } = req.params;

    // Validate status
    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    // Update admission
    const admission = await Admission.findById(id);
    if (!admission) {
      return res.status(404).json({ message: "Admission not found" });
    }

    admission.status = status;
    await admission.save();

    // Send email to applicant
    try {
      await sendEmail({
        to: admission.email,
        subject: `Admission Status Update: ${status}`,
        text: `Dear ${admission.name},\n\nYour admission application has been updated to "${status}".\n\nThank you,\nSchool Administration`,
        html: `
          <p>Dear ${admission.name},</p>
          <p>Your admission application has been updated to <strong>${status}</strong>.</p>
          <p>Thank you,<br>School Administration</p>
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed, but status updated:", emailError);
      // Don't fail the request if email fails
    }

    // Optionally notify admins (uncomment if needed)
    /*
    const admins = await Admin.find({}, "email");
    for (const admin of admins) {
      try {
        await sendEmail({
          to: admin.email,
          subject: `Admission Status Update Notification: ${admission.name}`,
          text: `The admission status for ${admission.name} has been updated to "${status}".`,
          html: `
            <p>The admission status for ${admission.name} has been updated to <strong>${status}</strong>.</p>
          `,
        });
      } catch (emailError) {
        console.error(`Failed to send email to admin ${admin.email}:`, emailError);
      }
    }
    */

    res.json({ message: "Status updated successfully", admission });
  } catch (error) {
    console.error("Error updating admission status:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;