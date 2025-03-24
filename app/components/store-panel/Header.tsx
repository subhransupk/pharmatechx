"use client";

import { useState } from "react";
import { BellIcon, SearchIcon, UserIcon, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Low Stock Alert",
      message: "Paracetamol 500mg is running low on stock.",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Expiry Alert",
      message: "5 medicines will expire in the next 30 days.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "New Order",
      message: "New order #1234 has been placed.",
      time: "3 hours ago",
      read: true,
    },
  ];

  return (
    <header className="bg-white border-b border-gray-100 py-4 px-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 transition-colors"
              placeholder="Search medicines, orders..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
              className="relative p-2 text-gray-700 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            >
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-primary-500 rounded-full">
                2
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg py-2 z-10 border border-gray-100 overflow-hidden">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors",
                        !notification.read && "bg-primary-50"
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 mt-1">
                        {notification.message}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                VA
              </div>
              <span className="text-sm font-medium text-gray-900 hidden md:block">
                Volter Anderson
              </span>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-10 border border-gray-100 overflow-hidden">
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Settings
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 