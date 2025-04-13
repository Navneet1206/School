const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String, // This will now store the Cloudinary URL
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notice", noticeSchema);
