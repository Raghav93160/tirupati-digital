const express = require("express");

const router = express.Router();

const {
  createContact,
} = require("../Controller/contactController");

router.post("/contact", createContact);

module.exports = router;
