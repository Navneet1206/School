const mongoose = require("mongoose");
const Admin = require("./models/Admin");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://Navneet:Navneet12@cluster0.gjlty.mongodb.net/school?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));

const seedAdmin = async () => {
  try {
    await Admin.deleteMany({});
    const admin = new Admin({
      username: "admin",
      password: "admin123", // Plaintext, matching backend logic
    });
    await admin.save();
    console.log("Admin user seeded successfully");
  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();