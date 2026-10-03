import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  Wifi,
} from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "/api/admin/login",
        formData
      );

      if (response.data.success) {
        const { token, admin } = response.data;

        // Save JWT token
        localStorage.setItem("adminToken", token);

        // Save admin information
        localStorage.setItem(
          "admin",
          JSON.stringify(admin)
        );

        toast.success("Admin login successful");

        // Go to dashboard
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Admin Login Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F7FF]">

      {/* Header */}
      <header className="border-b border-blue-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#062B63]">
              <Wifi
                size={22}
                className="text-[#FF6B00]"
              />
            </div>

            <div>
              <h1 className="text-lg font-bold text-[#062B63]">
                Tirupati Digital
              </h1>

              <p className="text-xs text-gray-500">
                Admin Panel
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="text-sm font-semibold text-[#062B63] transition hover:text-[#FF6B00]"
          >
            Back to Website
          </Link>

        </div>
      </header>

      {/* Login Section */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-12">

        <div className="w-full max-w-md">

          {/* Login Card */}
          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">

            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#062B63]">
              <LockKeyhole
                size={30}
                className="text-[#FF6B00]"
              />
            </div>

            {/* Heading */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-[#062B63] sm:text-3xl">
                Admin Login
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Login to manage Tirupati Digital services
                and broadband plans.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#062B63]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter admin email"
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#062B63]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter admin password"
                    autoComplete="current-password"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 text-sm text-gray-800 outline-none transition focus:border-[#FF6B00] focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#062B63]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e85d00] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <>
                    Login to Admin Panel
                    <ArrowRight size={19} />
                  </>
                )}
              </button>

            </form>

            {/* Security Message */}
            <div className="mt-6 rounded-lg bg-blue-50 p-4">
              <div className="flex gap-3">
                <LockKeyhole
                  size={18}
                  className="mt-0.5 shrink-0 text-[#062B63]"
                />

                <p className="text-xs leading-5 text-gray-600">
                  Your admin credentials are securely
                  authenticated using password hashing and
                  JWT-based authentication.
                </p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Tirupati Digital.
            All rights reserved.
          </p>

        </div>

      </main>
    </div>
  );
};

export default AdminLogin;