const transporter = require("../Config/mailer.js");
const Enquiry = require("../model/enquirySchema")

const createEnquiry = async (req, res) => {
  try {
    const { fullName, mobile, email, service, plan, message } = req.body;

    // Required fields check
    if (!fullName || !mobile || !email || !service) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

      // Create enquiry
      // 1. Save enquiry in MongoDB
    const enquiry = await Enquiry.create({
      fullName,
      mobile,
      email,
      service,
      plan: plan || "",
      message,
    });

     // 2. Email to Tirupati Digital
     await transporter.sendMail({
      from: `"Tirupati Digital Website" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      subject: `New Enquiry from ${fullName}`,

      html: `
        <h2>New Customer Enquiry</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobile}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Plan:</strong> ${plan || "Not Selected"}</p>
        <p><strong>Message:</strong> ${message || "No Message"}</p>

        <hr />

        <p>
          Please contact the customer regarding this enquiry.
        </p>
      `,
    });

     // 3. Confirmation Email to Customer
    await transporter.sendMail({
      from: `"Tirupati Digital" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "Your Enquiry Has Been Received - Tirupati Digital",

      html: `
        <h2>Thank You for Contacting Tirupati Digital!</h2>

        <p>Hi <strong>${fullName}</strong>,</p>

        <p>
          Your enquiry has been submitted successfully.
        </p>

        <p>
          Our team will review your request and contact you within
          <strong>24 hours</strong>.
        </p>

        <h3>Your Enquiry Details:</h3>

        <p><strong>Service:</strong> ${service}</p>

        ${
          plan
            ? `<p><strong>Selected Plan:</strong> ${plan}</p>`
            : ""
        }

        <p>
          Thank you for choosing Tirupati Digital.
        </p>

        <br />

        <p>
          <strong>Tirupati Digital</strong><br />
          Fast Connectivity. Better Entertainment.<br />
          📞 9316044022
        </p>
      `,
    });

    // Success response to frontend
    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    });

  } catch (error) {
     console.error("Create Enquiry Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
    createEnquiry
}


