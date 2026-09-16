import { ArrowRight, Mail, MapPin, Phone, Share2 } from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#031B3D] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ================= COMPANY ================= */}
          <div>
            {/* Logo */}
            <Link to="/" className="inline-flex rounded-xl bg-white px-3 py-1">
              <img
                src="/public/TirupatiDigital.png"
                alt="Tirupati Digital"
                className="h-25 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-blue-100">
              Tirupati Digital provides reliable broadband, cable TV and digital
              entertainment services to keep your home and business connected.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                to="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
              >
                f
              </Link>

              <Link
                to="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
              >
                ig
              </Link>

              <Link
                to="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
              >
                X
              </Link>

              <Link
                to="#"
                aria-label="Social Media"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
              >
                <Share2 size={18} />
              </Link>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <div className="mt-5 h-[2px] w-10 bg-[#FF6B00]" />

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/broadband"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Broadband
                </Link>
              </li>

              <li>
                <Link
                  to="/cable-tv"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Cable TV
                </Link>
              </li>

              <li>
                <Link
                  to="/ott"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  OTT
                </Link>
              </li>

              <li>
                <Link
                  to="/offers"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY LINKS ================= */}
          <div>
            <h3 className="text-lg font-bold text-white">Company</h3>

            <div className="mt-5 h-[2px] w-10 bg-[#FF6B00]" />

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/enquiry"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Get Connection
                </Link>
              </li>

              <li>
                <Link
                  to="/enquiry"
                  className="text-sm text-blue-100 transition hover:text-[#FF6B00]"
                >
                  Send Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>

            <div className="mt-5 h-[2px] w-10 bg-[#FF6B00]" />

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <Link
                to="tel:9316044022"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FF6B00] transition group-hover:bg-[#FF6B00] group-hover:text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-blue-200">Call Us</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    9316044022
                  </p>
                </div>
              </Link>

              {/* Email */}
              <Link
                to="mailto:tirupatidigitalservices@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FF6B00] transition group-hover:bg-[#FF6B00] group-hover:text-white">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-blue-200">Email Us</p>

                  <p className="mt-1 break-all text-sm font-medium text-white">
                    tirupatidigital@gmail.com
                  </p>
                </div>
              </Link>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FF6B00]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-blue-200">Service Area</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Broadband & Digital Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA BOX ================= */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-white">
              Ready to Get Connected?
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Send us your details and our team will contact you.
            </p>
          </div>

          <Link
            to="/enquiry"
            className="flex shrink-0 items-center gap-2 rounded-md bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
          >
            Get Connection
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-blue-200 sm:text-sm">
            © {new Date().getFullYear()} Tirupati Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-blue-200 transition hover:text-[#FF6B00] sm:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-blue-200 transition hover:text-[#FF6B00] sm:text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
