const express = require("express");
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Models
const Admission = require("../models/Admission");
const Admin = require("../models/Admin");

// Email Configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Validation Middleware for Admission
const validateAdmission = [
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("dateOfBirth").notEmpty().withMessage("Date of birth is required"),
  body("bloodGroup").notEmpty().withMessage("Blood group is required"),
  body("religion").notEmpty().withMessage("Religion is required"),
  body("caste").notEmpty().withMessage("Caste is required"),
  body("nationality").notEmpty().withMessage("Nationality is required"),
  body("motherTongue").notEmpty().withMessage("Mother tongue is required"),
  body("class").notEmpty().withMessage("Class selection is required"),
  body("previousSchool")
    .trim()
    .notEmpty()
    .withMessage("Previous school is required"),
  body("parentName").trim().notEmpty().withMessage("Parent name is required"),
  body("parentPhone").notEmpty().withMessage("Parent phone is required"),
  body("parentEmail").isEmail().withMessage("Valid parent email is required"),
  body("address").trim().notEmpty().withMessage("Address is required"),
  body("message").trim().notEmpty().withMessage("Message is required"),
];

const router = express.Router();

/*-------------------------------------------
  Admission Submission Route
---------------------------------------------*/
router.post("/", validateAdmission, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Save admission data to database
    const admission = new Admission(req.body);
    await admission.save();

    // Send email notifications if configuration is available
    if (
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS &&
      process.env.SCHOOL_EMAIL
    ) {
      try {
        // Send email to parent
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: req.body.parentEmail,
          subject: "Admission Application Received - School Name",
          html: generateParentEmailTemplate(req.body),
        });

        // Send email to admin
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.SCHOOL_EMAIL,
          subject: "New Admission Application Received",
          html: generateAdminEmailTemplate(req.body),
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

    res.status(201).json({ message: "Admission inquiry submitted successfully" });
  } catch (error) {
    console.error("Error processing admission:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

/*-------------------------------------------
  Admin Login Route
---------------------------------------------*/
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password using bcrypt
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

// Helper function to generate parent email template
function generateParentEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Admission Application Received</title>
      <style>
        /* CSS styles here */
      </style>
    </head>
    <body>
      <div class="header">
        <img src="https://via.placeholder.com/150x50/4f46e5/ffffff?text=School+Logo" alt="School Logo" class="logo">
        <h1>Admission Application Received</h1>
      </div>
      <div class="content">
        <p>Dear ${data.parentName},</p>
        <p>Thank you for submitting an admission application for <strong>${data.fullName}</strong>. We have received your application and our admissions team will review it shortly.</p>
        
        <div class="details">
          <h3>Application Details</h3>
          <p><strong>Student Name:</strong> ${data.fullName}</p>
          <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
          <p><strong>Class Applied:</strong> ${data.class}</p>
          <p><strong>Previous School:</strong> ${data.previousSchool}</p>
        </div>
        
        <div class="details">
          <h3>Next Steps</h3>
          <p>Our admissions team will review your application within 3-5 business days. You will receive a follow-up email with information about:</p>
          <ul>
            <li>Application status</li>
            <li>Required documents (if any)</li>
            <li>Interview/assessment details (if applicable)</li>
          </ul>
        </div>
        
        <p>If you have any questions in the meantime, please don't hesitate to contact our admissions office.</p>
        
        <a href="https://schoolwebsite.com/contact" class="button">Contact Admissions Office</a>
      </div>
      <div class="footer">
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>&copy; ${new Date().getFullYear()} School Name. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}

// Helper function to generate admin email template
function generateAdminEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Admission Application</title>
      <style>
        /* CSS styles here */
      </style>
    </head>
    <body>
      <div class="header">
        <img src="https://via.placeholder.com/150x50/4f46e5/ffffff?text=School+Logo" alt="School Logo" class="logo">
        <h1>New Admission Application Received</h1>
        <span class="priority priority-high">New Application</span>
      </div>
      <div class="content">
        <p>A new admission application has been submitted. Please review the details below.</p>
        
        <div class="details">
          <h3>Student Information</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
          <p><strong>Blood Group:</strong> ${data.bloodGroup}</p>
          <p><strong>Religion:</strong> ${data.religion}</p>
          <p><strong>Caste:</strong> ${data.caste}</p>
          <p><strong>Nationality:</strong> ${data.nationality}</p>
          <p><strong>Mother Tongue:</strong> ${data.motherTongue}</p>
          <p><strong>Class Applied:</strong> ${data.class}</p>
          <p><strong>Previous School:</strong> ${data.previousSchool}</p>
        </div>
        
        <div class="details">
          <h3>Parent/Guardian Information</h3>
          <p><strong>Name:</strong> ${data.parentName}</p>
          <p><strong>Email:</strong> ${data.parentEmail}</p>
          <p><strong>Phone:</strong> ${data.parentPhone}</p>
          <p><strong>Address:</strong> ${data.address}</p>
        </div>
        
        <div class="details">
          <h3>Additional Information</h3>
          <p>${data.message}</p>
        </div>
        
        <a href="https://schooladmin.com/admissions" class="button">View in Admin Portal</a>
      </div>
      <div class="footer">
        <p>This is an automated message from the School Admission System.</p>
        <p>&copy; ${new Date().getFullYear()} School Name. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}


module.exports = router;