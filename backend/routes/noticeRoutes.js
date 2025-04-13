const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Notice = require("../models/Notice");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET all notices
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notices" });
  }
});

// POST a new notice with Cloudinary image upload
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  let imageUrl = "";

  if (req.file) {
    try {
      // Upload file buffer to Cloudinary using upload_stream
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "notice_board" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });
      imageUrl = result.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(500).json({ error: "Image upload failed" });
    }
  }

  try {
    const notice = new Notice({ title, description, imageUrl });
    await notice.save();
    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ error: "Failed to create notice" });
  }
});

module.exports = router;
