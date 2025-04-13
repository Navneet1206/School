require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// Import routes
const noticeRoutes = require("./routes/noticeRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Navnee:pass2@cluster0.gjlty.mongodb.net/school?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Optional: If you need to serve any static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/notices", noticeRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});