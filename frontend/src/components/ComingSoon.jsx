import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = ({ title, description }) => {
  return (
    <section className="min-h-[70vh] bg-[#F1F7FF] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center">
        <div className="w-full rounded-[30px] bg-[#062B63] px-6 py-16 text-center shadow-xl sm:px-10 lg:px-16">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B00] text-white">
            <Clock3 size={30} />
          </div>

          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#FF6B00]">
            COMING SOON
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg bg-[#FF6B00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e85d00] sm:text-base"
            >
              Back to Home
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComingSoon;