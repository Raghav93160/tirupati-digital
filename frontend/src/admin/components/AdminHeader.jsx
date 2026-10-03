import { Menu, Bell } from "lucide-react";

const AdminHeader = ({ setIsOpen }) => {
  const adminData = JSON.parse(
    localStorage.getItem("admin") || "{}"
  );

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 text-[#062B63] hover:bg-blue-50 lg:hidden"
          >
            <Menu size={24} />
          </button>

          <div>
            <h1 className="text-lg font-bold text-[#062B63] sm:text-xl">
              Admin Dashboard
            </h1>

            <p className="hidden text-sm text-gray-500 sm:block">
              Manage your Tirupati Digital website
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button
            type="button"
            className="relative rounded-lg p-2.5 text-gray-500 transition hover:bg-blue-50 hover:text-[#062B63]"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF6B00]" />
          </button>

          <div className="hidden h-8 w-px bg-gray-200 sm:block" />

          <div className="text-right">
            <p className="text-sm font-bold text-[#062B63]">
              {adminData.name || "Admin"}
            </p>

            <p className="hidden text-xs text-gray-500 sm:block">
              {adminData.email || ""}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#062B63] text-sm font-bold text-white">
            {adminData.name
              ? adminData.name.charAt(0).toUpperCase()
              : "A"}
          </div>

        </div>
      </div>
    </header>
  );
};

export default AdminHeader;