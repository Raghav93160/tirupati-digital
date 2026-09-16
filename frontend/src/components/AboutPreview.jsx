import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Visual */}
          <div className="relative">

            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#FF6B00]/10" />

            <div className="relative overflow-hidden rounded-3xl bg-[#062B63] p-8 sm:p-12">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
                  Tirupati Digital
                </p>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Connecting Homes,
                  <br />
                  Businesses & Entertainment
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">
                  Tirupati Digital provides broadband, cable TV and digital
                  entertainment services to help you stay connected with
                  everything that matters.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5">

                  <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                    <p className="text-2xl font-bold text-[#FF6B00]">
                      Fast
                    </p>
                    <p className="mt-1 text-sm text-blue-100">
                      Connectivity
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                    <p className="text-2xl font-bold text-[#FF6B00]">
                      Reliable
                    </p>
                    <p className="mt-1 text-sm text-blue-100">
                      Services
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#FF6B00]" />

              <span className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
                About Us
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#062B63] sm:text-4xl">
              Your Trusted Digital Connectivity Partner
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              At Tirupati Digital, we aim to make connectivity simple,
              reliable and accessible. Whether you need broadband for work
              and daily use or digital entertainment for your home, we are
              here to keep you connected.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">

              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#FF6B00]"
                  size={20}
                />

                <p className="text-sm font-medium text-slate-700">
                  Reliable broadband connectivity
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#FF6B00]"
                  size={20}
                />

                <p className="text-sm font-medium text-slate-700">
                  Digital entertainment services
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#FF6B00]"
                  size={20}
                />

                <p className="text-sm font-medium text-slate-700">
                  Customer-focused support
                </p>
              </div>

            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#062B63] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF6B00]"
            >
              Know More

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;