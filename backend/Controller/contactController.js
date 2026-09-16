const Contact = require("../model/contactSchema");
const transporter = require("../Config/mailer");

const createContact = async (req, res) => {
  try {
    const {
      fullName,
      mobile,
      email,
      subject,
      message,
    } = req.body;

    // Validation
    if (!fullName || !mobile || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Save contact message in MongoDB
    const newContact = await Contact.create({
      fullName,
      mobile,
      email,
      subject,
      message,
    });

    // =====================================
    // EMAIL TO TIRUPATI DIGITAL
    // =====================================

    await transporter.sendMail({
      from: `"Tirupati Digital Website" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      subject: `New Contact Message - ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif;">

          <h2>New Contact Message</h2>

          <p>
            <strong>Name:</strong> ${fullName}
          </p>

          <p>
            <strong>Mobile:</strong> ${mobile}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

          <hr />

          <p>
            Please contact the customer regarding this message.
          </p>

        </div>
      `,
    });

    // =====================================
    // CONFIRMATION EMAIL TO CUSTOMER
    // =====================================

    await transporter.sendMail({
      from: `"Tirupati Digital" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "Thank You for Contacting Tirupati Digital",

      html: `
        <div style="font-family: Arial, sans-serif;">

          <h2>Thank You for Contacting Tirupati Digital!</h2>

          <p>
            Hi <strong>${fullName}</strong>,
          </p>

          <p>
            Your message has been submitted successfully.
          </p>

          <p>
            Our team will review your message and contact you
            within <strong>24 hours</strong>.
          </p>

          <h3>Your Message Details</h3>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <p>
            <strong>Message:</strong> ${message}
          </p>

          <br />

          <p>
            Thank you for contacting <strong>Tirupati Digital</strong>.
          </p>

          <br />

          <p>
            <strong>Tirupati Digital</strong><br />
            Fast Connectivity. Better Entertainment.<br />
            📞 9316044022<br />
            📧 tirupatidigitalservices@gmail.com
          </p>

        </div>
      `,
    });

    // Success response
    return res.status(201).json({
      success: true,
      message:
        "Your message has been submitted successfully. Tirupati Digital will contact you within 24 hours.",
      contact: newContact,
    });

  } catch (error) {
    console.error("Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  createContact,
};