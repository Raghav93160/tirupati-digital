import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden bg-[#062B63] text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        
        {/* Contact Information */}
        <div className="flex items-center gap-6">
          <a
            href="tel:9316044022"
            className="flex items-center gap-2 transition hover:text-orange-400"
          >
            <Phone size={15} />
            <span>9316044022</span>
          </a>

          <a
            href="mailto:tirupatidigitalservices@gmail.com"
            className="flex items-center gap-2 transition hover:text-orange-400"
          >
            <Mail size={15} />
            <span>tirupatidigitalservices@gmail.com</span>
          </a>
        </div>

        {/* Right Text */}
        <div className="flex items-center gap-3 text-xs font-medium tracking-wide">
          <span>Fast Internet</span>
          <span className="text-orange-400">•</span>

          <span>Better Entertainment</span>
          <span className="text-orange-400">•</span>

          <span>Connected Always</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;