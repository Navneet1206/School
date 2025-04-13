const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dateOfBirth: String,
  gender: String,
  class: String,
  previousSchool: String,
  parentName: String,
  parentPhone: String,
  parentEmail: String,
  address: String,
  message: String,
  religion: String,
  caste: String,
  nationality: String,
  bloodGroup: String,
  motherTongue: String,
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Admission", admissionSchema);