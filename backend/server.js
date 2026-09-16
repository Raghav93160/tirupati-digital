const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const enquiryRoute = require("./Routes/enquiryRoutes");
const contactRoute = require("./Routes/contactRoutes");

// Database
mongoose
  .connect("mongodb://localhost:27017/tirupati-digital")
  .then(() => {
    console.log("Successfully Connected DB");
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", enquiryRoute);
app.use("/api", contactRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
