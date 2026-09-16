import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              About Tirupati Digital
            </span>

            <span className="h-[3px] w-10 bg-[#FF6B00]" />
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Connecting You to a
            <span className="text-[#FF6B00]"> Better Digital Life</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Reliable broadband and digital entertainment services designed
            to keep homes and businesses connected.
          </p>

        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div className="relative">

              <div className="rounded-3xl bg-[#062B63] p-8 sm:p-10 lg:p-12">

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF6B00] text-white">
                  <Wifi size={30} />
                </div>

                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Your Connection,
                  <br />
                  Our Commitment
                </h2>

                <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                  At Tirupati Digital, we believe that a good digital
                  connection is an essential part of modern life. Our focus
                  is to provide dependable connectivity and entertainment
                  services with a customer-first approach.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-white/10 p-5">
                    <p className="text-2xl font-bold text-[#FF6B00]">
                      Fast
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      Connectivity
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
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

            {/* Right */}
            <div>

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-10 bg-[#FF6B00]" />

                <span className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#062B63] sm:text-4xl">
                A Digital Connectivity Partner You Can Count On
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Tirupati Digital is focused on delivering broadband and
                digital entertainment services that make everyday
                connectivity easier and more convenient.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Whether you are working from home, studying, streaming your
                favourite content or simply staying connected with family
                and friends, our goal is to provide a dependable digital
                experience.
              </p>

              {/* Points */}
              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#FF6B00]"
                  />

                  <div>
                    <h3 className="font-semibold text-[#062B63]">
                      Reliable Connectivity
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Services designed for consistent everyday use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#FF6B00]"
                  />

                  <div>
                    <h3 className="font-semibold text-[#062B63]">
                      Customer Focused
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      We keep customer needs at the centre of our services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#FF6B00]"
                  />

                  <div>
                    <h3 className="font-semibold text-[#062B63]">
                      Digital Entertainment
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Broadband and entertainment services under one roof.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="bg-[#F1F7FF] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#062B63] sm:text-4xl">
              What We Stand For
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our services are built around reliability, performance and
              customer satisfaction.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Reliability */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#062B63] text-white">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#062B63]">
                Reliability
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We aim to provide dependable services that our customers can
                rely on every day.
              </p>

            </div>

            {/* Performance */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#062B63] text-white">
                <Zap size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#062B63]">
                Performance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We focus on delivering a smooth and efficient digital
                experience for everyday connectivity.
              </p>

            </div>

            {/* Support */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#062B63] text-white">
                <Headphones size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#062B63]">
                Customer Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We are committed to helping customers with their service
                needs and enquiries.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      {/* <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-[#062B63] px-6 py-12 text-center sm:px-10">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let's Get You Connected
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Looking for a reliable broadband connection? Explore our
              available plans or get in touch with our team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/broadband"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
              >
                View Broadband Plans
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section> */}

    </main>
  );
};

export default About;