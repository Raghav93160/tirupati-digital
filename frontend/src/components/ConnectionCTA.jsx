import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ConnectionCTA = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-[#062B63] px-6 py-14 text-center sm:px-10 lg:px-16">

          {/* Background Shapes */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#FF6B00]/20 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B00] text-white">
              <Phone size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Connected?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Choose the service that fits your needs and send us an enquiry.
              Our team will help you get started.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              {/* <Link
                to="/broadband"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF6B00] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
              >
                View Broadband Plans
                <ArrowRight size={18} />
              </Link> */}

              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF6B00] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
              >
                Get Connection
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionCTA;