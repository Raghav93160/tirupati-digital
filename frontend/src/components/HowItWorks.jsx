import {
  ClipboardList,
  Headphones,
  Router,
  Wifi,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Choose Your Service",
      description:
        "Select broadband or another service according to your requirements.",
    },
    {
      number: "02",
      icon: Headphones,
      title: "Send an Enquiry",
      description:
        "Submit your details and our team will get in touch with you.",
    },
    {
      number: "03",
      icon: Router,
      title: "Get Connected",
      description:
        "Our team will guide you through the connection process.",
    },
    {
      number: "04",
      icon: Wifi,
      title: "Stay Connected",
      description:
        "Enjoy reliable connectivity and digital entertainment services.",
    },
  ];

  return (
    <section className="w-full bg-[#F1F7FF] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 bg-[#FF6B00]" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              How It Works
            </span>

            <span className="h-[3px] w-10 bg-[#FF6B00]" />
          </div>

          <h2 className="text-3xl font-bold text-[#062B63] sm:text-4xl">
            Get Connected in Simple Steps
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Getting started with Tirupati Digital is simple and hassle-free.
          </p>

        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">

                {/* Number */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#062B63] text-white shadow-lg">
                  <Icon size={27} />
                </div>

                <span className="mt-4 block text-xs font-bold tracking-widest text-[#FF6B00]">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 text-lg font-bold text-[#062B63]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;