const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./model/adminSchema");

const createAdmin = async () => {
  try {
    // MongoDB connect
    await mongoose.connect("mongodb://localhost:27017/tirupati-digital");

    console.log("MongoDB Connected");

    // Admin details
    const name = process.env.ADMIN_NAME;
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    // console.log(name);
    

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    console.log("Admin ID:", admin._id);
    console.log("Email:", email);

    process.exit(0);
  } catch (error) {
    console.error("Create Admin Error:", error);
    process.exit(1);
  }
};

// Run function
createAdmin();
