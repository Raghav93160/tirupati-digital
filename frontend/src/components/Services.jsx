import {
  ArrowRight,
  Cable,
  MonitorPlay,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Broadband",
      description:
        "Enjoy fast, stable and reliable broadband connectivity for your home and business.",
      button: "Explore Broadband",
      link: "/broadband",
    },
    {
      icon: Cable,
      title: "Cable TV",
      description:
        "Stay entertained with a wide range of television channels and digital entertainment.",
      button: "Explore Cable TV",
      link: "/cable-tv",
    },
    {
      icon: MonitorPlay,
      title: "OTT",
      description:
        "Enjoy your favourite movies, shows and digital entertainment through OTT services.",
      button: "Explore OTT",
      link: "/ott",
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 bg-[#FF6B00]"></span>

            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#FF6B00]">
              Our Services
            </span>

            <span className="h-[3px] w-10 bg-[#FF6B00]"></span>
          </div>

          <h2 className="text-3xl font-bold text-[#062B63] sm:text-4xl">
            Everything You Need to Stay Connected
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            From high-speed broadband to digital entertainment, Tirupati
            Digital keeps your home and business connected.
          </p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#FF6B00]/30 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#062B63] text-white transition duration-300 group-hover:bg-[#FF6B00]">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-[#062B63]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  to={service.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] transition hover:text-[#062B63]"
                >
                  {service.button}

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;