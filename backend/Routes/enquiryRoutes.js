const express = require("express");
const { createEnquiry } = require("../Controller/enquiryController");

const enquiry = express.Router();

enquiry.post("/enquiry", createEnquiry);

module.exports = enquiry;
