import React, { useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // ================= FORM STATE =================

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post("/api/contact", formData);

      if (res.data.success) {
        toast.success(
          "Your message has been submitted successfully. Tirupati Digital will contact you within 24 hours.",
          {
            duration: 3000, // 3 seconds
          },
        );

        // Clear form
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Contact Error:", error);

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
    <main className="w-full">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#031B3D]">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#FF6B00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 bg-[#FF6B00]" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              Contact Us
            </span>

            <span className="h-[3px] w-10 bg-[#FF6B00]" />
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Let's
            <span className="text-[#FF6B00]"> Get Connected</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Have a question about our services or want to get a broadband
            connection? Our team is here to help.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}

      <section className="bg-[#F1F7FF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* ================= LEFT CONTACT INFO ================= */}

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#062B63] sm:text-4xl">
                We're Here to Help
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Whether you need information about broadband plans, want to
                request a connection, or have any questions, feel free to
                contact us.
              </p>

              {/* ================= CONTACT CARDS ================= */}

              <div className="mt-8 space-y-4">
                {/* Phone */}

                <Link
                  to="tel:9316044022"
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#062B63] text-[#FF6B00] transition group-hover:bg-[#FF6B00] group-hover:text-white">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Call Us
                    </p>

                    <p className="mt-1 text-base font-semibold text-[#062B63]">
                      9316044022
                    </p>
                  </div>
                </Link>

                {/* Email */}

                <Link
                  to="mailto:tirupatidigitalservices@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#062B63] text-[#FF6B00] transition group-hover:bg-[#FF6B00] group-hover:text-white">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Email Us
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-[#062B63]">
                      tirupatidigitalservices@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Service */}

                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#062B63] text-[#FF6B00]">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Service
                    </p>

                    <p className="mt-1 text-base font-semibold text-[#062B63]">
                      Broadband & Digital Services
                    </p>
                  </div>
                </div>

                {/* Support */}

                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#062B63] text-[#FF6B00]">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      Support
                    </p>

                    <p className="mt-1 text-base font-semibold text-[#062B63]">
                      We're here to assist you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT FORM ================= */}

            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#062B63] text-[#FF6B00]">
                    <MessageSquare size={22} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#062B63]">
                      Send Us a Message
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Fill in your details and our team will get back to you.
                    </p>
                  </div>
                </div>

                {/* ================= FORM ================= */}

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  {/* Name + Phone */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#062B63]">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/10"
                      />
                    </div>

                    {/* Mobile */}

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#062B63]">
                        Mobile Number
                      </label>

                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        required
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/10"
                      />
                    </div>
                  </div>

                  {/* Email */}

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#062B63]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/10"
                    />
                  </div>

                  {/* Subject */}

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#062B63]">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What can we help you with?"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/10"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#062B63]">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your message..."
                      required
                      className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-[#FF6B00]/10"
                    />
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85d00] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Send Message"}

                    {!loading && <Send size={18} />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <Toaster position="bottom-right" reverseOrder={true} />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[30px] bg-[#062B63] px-6 py-16 text-center sm:px-10 lg:px-16">
            <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#FF6B00]">
              STAY CONNECTED WITH TIRUPATI DIGITAL
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Your Connection to Better Digital Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Enjoy reliable broadband, cable TV and digital entertainment
              services with Tirupati Digital.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-3 rounded-lg bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e85d00] sm:text-base"
              >
                Get Connected
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
