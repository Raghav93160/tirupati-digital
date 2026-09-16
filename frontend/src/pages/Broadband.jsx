import {
  ArrowRight,
  Check,
  Gauge,
  Headphones,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";

const Broadband = () => {
  const plans = [
    {
      speed: "40 Mbps",
      price: "₹5400",
    },
    {
      speed: "60 Mbps",
      price: "₹6000",
    },
    {
      speed: "80 Mbps",
      price: "₹6500",
    },
    {
      speed: "100 Mbps",
      price: "₹7000",
      popular: true,
    },
    {
      speed: "150 Mbps",
      price: "₹7500",
    },
    {
      speed: "200 Mbps",
      price: "₹8000",
    },
  ];

  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#031B3D]">

        {/* Background Effects */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#FF6B00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 bg-[#FF6B00]" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              Broadband Plans
            </span>

            <span className="h-[3px] w-10 bg-[#FF6B00]" />
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Choose the Right
            <span className="text-[#FF6B00]"> Broadband Plan</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            Experience fast, reliable and seamless internet connectivity
            with Tirupati Digital broadband services.
          </p>

        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section className="w-full bg-[#F1F7FF] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              Our Plans
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#062B63] sm:text-4xl">
              Broadband Plans for Every Need
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Select a plan that suits your everyday browsing, streaming,
              working and entertainment requirements.
            </p>

          </div>

          {/* Plan Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {plans.map((plan) => (
              <div
                key={plan.speed}
                className={`relative rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular
                    ? "border-[#FF6B00] ring-2 ring-[#FF6B00]/10"
                    : "border-slate-200"
                }`}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#FF6B00] px-3 py-1 text-xs font-bold text-white">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#062B63] text-white">
                  <Wifi size={27} />
                </div>

                {/* Speed */}
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Broadband
                </p>

                <h3 className="mt-2 text-3xl font-bold text-[#062B63]">
                  {plan.speed}
                </h3>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#FF6B00]">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-sm text-slate-500">
                    / plan
                  </span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-200" />

                {/* Features */}
                <div className="space-y-3">

                  <div className="flex items-center gap-3">
                    <Check
                      size={17}
                      className="text-[#FF6B00]"
                    />

                    <span className="text-sm text-slate-600">
                      High-speed connectivity
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check
                      size={17}
                      className="text-[#FF6B00]"
                    />

                    <span className="text-sm text-slate-600">
                      Reliable internet service
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check
                      size={17}
                      className="text-[#FF6B00]"
                    />

                    <span className="text-sm text-slate-600">
                      Customer support
                    </span>
                  </div>

                </div>

                {/* CTA */}
                <Link
                  to="/enquiry"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#062B63] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#FF6B00]"
                >
                  Get This Plan

                  <ArrowRight size={17} />
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              Why Our Broadband
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#062B63] sm:text-4xl">
              Internet You Can Rely On
            </h2>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#062B63] text-white">
                <Gauge size={26} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#062B63]">
                Fast Speed
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Smooth browsing, streaming, gaming and work with reliable
                broadband speeds.
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#062B63] text-white">
                <ShieldCheck size={26} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#062B63]">
                Reliable Connection
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Stay connected with a stable internet experience for your
                everyday needs.
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#062B63] text-white">
                <Headphones size={26} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#062B63]">
                Customer Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get assistance from our team whenever you need help with
                your broadband connection.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#F1F7FF] py-16 sm:py-20">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-[#062B63] px-6 py-12 text-center sm:px-10">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Connected?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Choose your preferred broadband plan and send us an enquiry.
              Our team will contact you to help you get started.
            </p>

            <Link
              to="/enquiry"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#FF6B00] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
            >
              Get Connection
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Broadband;