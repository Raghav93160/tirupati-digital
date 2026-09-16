import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src="\public\TirupatiDigital.png"
            alt="Tirupati Digital"
            className="h-23 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/broadband"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            Broadband
          </NavLink>

          <NavLink
            to="/cable-tv"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            Cable TV
          </NavLink>

          <NavLink
            to="/ott"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            OTT
          </NavLink>

          <NavLink
            to="/offers"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            Offers
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg font-semibold transition ${
                isActive
                  ? "text-[#FF6B00]"
                  : "text-[#062B63] hover:text-[#FF6B00]"
              }`
            }
          >
            Contact Us
          </NavLink>

        </nav>

        {/* Desktop CTA */}
        <Link
          to="/enquiry"
          className="hidden rounded-md bg-[#FF6B00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e85d00] lg:block"
        >
          Get Connection
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#062B63] hover:bg-slate-100 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <nav className="flex flex-col px-4 py-4 sm:px-6">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/broadband"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              Broadband
            </NavLink>

            <NavLink
              to="/cable-tv"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              Cable TV
            </NavLink>

            <NavLink
              to="/ott"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              OTT
            </NavLink>

            <NavLink
              to="/offers"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              Offers
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold ${
                  isActive
                    ? "text-[#FF6B00]"
                    : "text-[#062B63]"
                }`
              }
            >
              Contact Us
            </NavLink>

            {/* Mobile CTA */}
            <Link
              to="/enquiry"
              onClick={closeMenu}
              className="mt-5 rounded-md bg-[#FF6B00] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Connection
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;