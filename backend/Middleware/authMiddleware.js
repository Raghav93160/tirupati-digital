const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // 1. Authorization header get karo
    const authHeader = req.headers.authorization;

      console.log("Authorization Header:", authHeader);

    // 2. Token check karo
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required",
      });
    }

    // 3. Bearer Token check karo
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format",
      });
    }

    // 4. Bearer ke baad actual token nikalo
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "JWT token is missing",
      });
    }

    // 5. JWT verify karo
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // 6. Admin information request mein attach karo
    req.admin = decoded;

    // 7. Next controller par jao
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;