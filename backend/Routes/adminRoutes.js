const express = require("express");

const router = express.Router();

const { adminLogin } = require("../Controller/adminController");
const authMiddleware = require("../Middleware/authMiddleware");

// Admin Login
router.post("/admin/login", adminLogin);

// Protected test route
router.get("/admin/profile", authMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Protected admin route accessed successfully",
    admin: req.admin,
  });
});

module.exports = router;