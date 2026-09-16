import {
  Headphones,
  Router,
  ShieldCheck,
  Zap,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "High-Speed Internet",
      description:
        "Enjoy fast and smooth internet connectivity for browsing, streaming, work and entertainment.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Connection",
      description:
        "Stay connected with a stable broadband connection designed for your everyday needs.",
    },
    {
      icon: Router,
      title: "Modern Connectivity",
      description:
        "Experience seamless connectivity across your devices with dependable digital services.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Our support team is here to assist you whenever you need help with your connection.",
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
              Why Choose Us
            </span>

            <span className="h-[3px] w-10 bg-[#FF6B00]" />
          </div>

          <h2 className="text-3xl font-bold text-[#062B63] sm:text-4xl">
            Why Choose Tirupati Digital?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            We focus on providing reliable connectivity and digital
            entertainment services with a simple and customer-friendly
            experience.
          </p>

        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#062B63] text-white transition duration-300 group-hover:bg-[#FF6B00]">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#062B63]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;