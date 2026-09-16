import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    service: "",
    plan: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const broadbandPlans = [
    "40 Mbps - ₹5400",
    "60 Mbps - ₹6000",
    "80 Mbps - ₹6500",
    "100 Mbps - ₹7000",
    "150 Mbps - ₹7500",
    "200 Mbps - ₹8000",
  ];

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit enquiry
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post("/api/enquiry", formData);

      console.log("Server Response:", res.data);

      if (res.data.success) {
        toast.success("Enquiry submitted successfully!.", {
          duration: 3000, // 3 seconds
        });

        // Reset form
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          service: "",
          plan: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Enquiry Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        {
          duration: 3000,
        },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Toaster position="bottom-right" reverseOrder={true} />

      {/* ================= HERO ================= */}
      <section className="bg-[#062B63] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#FF6B00]">
            GET CONNECTED
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Send Us Your Enquiry
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Tell us what service you are looking for and our team will get in
            touch with you shortly.
          </p>
        </div>
      </section>

      {/* ================= ENQUIRY SECTION ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#FF6B00]">
              LET&apos;S TALK
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#062B63] sm:text-4xl">
              We&apos;re Here to Help You Get Connected
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Whether you need a broadband connection, cable TV service, or OTT
              entertainment, send us your requirements and our team will assist
              you.
            </p>

            {/* Contact Information */}
            <div className="mt-8 space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F1F7FF] text-[#FF6B00]">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Call Us
                  </p>

                  <Link
                    to="tel:9316044022"
                    className="mt-1 block text-base font-bold text-[#062B63] hover:text-[#FF6B00]"
                  >
                    9316044022
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F1F7FF] text-[#FF6B00]">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Email Us
                  </p>

                  <Link
                    to="mailto:tirupatidigitalservices@gmail.com"
                    className="mt-1 block break-all text-base font-bold text-[#062B63] hover:text-[#FF6B00]"
                  >
                    tirupatidigitalservices@gmail.com
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F1F7FF] text-[#FF6B00]">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Our Services
                  </p>

                  <p className="mt-1 text-base font-bold text-[#062B63]">
                    Broadband • Cable TV • OTT
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-10 rounded-2xl bg-[#F1F7FF] p-6">
              <h3 className="text-lg font-bold text-[#062B63]">
                Why Send an Enquiry?
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={19} className="shrink-0 text-[#FF6B00]" />

                  <span className="text-sm text-slate-600">
                    Get information about available services
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle size={19} className="shrink-0 text-[#FF6B00]" />

                  <span className="text-sm text-slate-600">
                    Choose the right plan for your needs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle size={19} className="shrink-0 text-[#FF6B00]" />

                  <span className="text-sm text-slate-600">
                    Our team can assist with your requirements
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#062B63] sm:text-3xl">
                Enquiry Form
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Please fill in your details below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Mobile */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-[#062B63]"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-semibold text-[#062B63]"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#062B63]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#062B63]"
                >
                  Select Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => {
                    handleChange(e);

                    // Clear plan when service is not Broadband
                    if (e.target.value !== "Broadband") {
                      setFormData((prev) => ({
                        ...prev,
                        plan: "",
                      }));
                    }
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100"
                >
                  <option value="">Select a service</option>
                  <option value="Broadband">Broadband</option>
                  <option value="Cable TV">Cable TV</option>
                  <option value="OTT">OTT</option>
                </select>
              </div>

              {/* Broadband Plan */}
              {formData.service === "Broadband" && (
                <div>
                  <label
                    htmlFor="plan"
                    className="mb-2 block text-sm font-semibold text-[#062B63]"
                  >
                    Select Broadband Plan
                  </label>

                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="">Select a broadband plan</option>

                    {broadbandPlans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#062B63]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FF6B00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#e85d00] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}

                {!loading && <ArrowRight size={20} />}
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Our team will review your enquiry and contact you regarding your
                requirements.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
