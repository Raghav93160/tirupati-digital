import { useState } from "react";
import {
  Wifi,
  MessageSquareText,
  Mail,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    {
      title: "Broadband Plans",
      value: "6",
      description: "Available plans",
      icon: Wifi,
      path: "/admin/broadband-plans",
    },
    {
      title: "Enquiries",
      value: "0",
      description: "Customer enquiries",
      icon: MessageSquareText,
      path: "/admin/enquiries",
    },
    {
      title: "Contact Messages",
      value: "0",
      description: "Customer messages",
      icon: Mail,
      path: "/admin/contacts",
    },
    {
      title: "Customers",
      value: "0",
      description: "Registered customers",
      icon: Users,
      path: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1F7FF]">

      {/* Sidebar */}
      <AdminSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main */}
      <div className="lg:pl-72">

        <AdminHeader setIsOpen={setIsOpen} />

        <main className="px-4 py-6 sm:px-6 lg:px-8">

          {/* Welcome */}
          <section className="rounded-2xl bg-[#062B63] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-[#FF6B00]">
              WELCOME BACK
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Manage Tirupati Digital
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              Manage broadband plans, customer enquiries and
              contact messages from your admin panel.
            </p>
          </section>

          {/* Statistics */}
          <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Link
                  key={stat.title}
                  to={stat.path}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#062B63]">
                      <Icon size={23} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#FF6B00]"
                    />

                  </div>

                  <p className="mt-5 text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-3xl font-bold text-[#062B63]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {stat.description}
                  </p>
                </Link>
              );
            })}

          </section>

          {/* Quick Actions */}
          <section className="mt-8">

            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#062B63]">
                Quick Actions
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Quickly access the main admin functions.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <Link
                to="/admin/broadband-plans"
                className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B00]">
                      <Wifi size={23} />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#062B63]">
                        Manage Broadband Plans
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        Add, edit or delete broadband plans.
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#FF6B00]"
                  />

                </div>
              </Link>

              <Link
                to="/admin/enquiries"
                className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#062B63]">
                      <MessageSquareText size={23} />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#062B63]">
                        View Enquiries
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        Check and manage customer enquiries.
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#FF6B00]"
                  />

                </div>
              </Link>

            </div>

          </section>

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;