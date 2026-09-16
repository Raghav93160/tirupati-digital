import { ArrowRight, Gauge, Tv, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* HERO / BANNER */}
      <section className="relative min-h-[650px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/public/Banner.png')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[95%] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-1 w-14 bg-[#FF6B00]"></span>

              <p className="text-sm font-bold tracking-[0.2em] text-white sm:text-base">
                WELCOME TO TIRUPATI DIGITAL
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Fast Connectivity.
              <br />
              <span className="text-[#FF6B00]">Better Entertainment.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Reliable broadband, cable TV and OTT services for your home and
              business — all from one trusted connection.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e85d00] sm:text-base"
              >
                Explore Services
                <ArrowRight size={20} />
              </a>

              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#062B63] sm:text-base"
              >
                Get Connected
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Features */}
            <div className="mt-12 flex flex-wrap gap-y-6">
              {/* Broadband */}
              <div className="flex items-center gap-3 pr-6 sm:pr-8">
                <Gauge size={38} strokeWidth={2} className="text-[#FF6B00]" />

                <div>
                  <p className="text-sm font-semibold text-white">High Speed</p>

                  <p className="text-sm text-white/90">Broadband</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-12 w-px bg-white/40 sm:block"></div>

              {/* Cable TV */}
              <div className="flex items-center gap-3 px-0 sm:px-6">
                <Tv size={38} strokeWidth={2} className="text-[#FF6B00]" />

                <div>
                  <p className="text-sm font-semibold text-white">Cable TV</p>

                  <p className="text-sm text-white/90">Entertainment</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-12 w-px bg-white/40 sm:block"></div>

              {/* OTT */}
              <div className="flex items-center gap-3 pl-0 sm:pl-6">
                <PlayCircle
                  size={38}
                  strokeWidth={2}
                  className="text-[#FF6B00]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">OTT</p>

                  <p className="text-sm text-white/90">Entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curved effect */}
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)]"></div>
      </section>
    </div>
  );
};

export default Banner;
