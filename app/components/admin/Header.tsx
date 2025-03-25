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
      title: "New Store Registration",
      message: "MediCare Plus has requested store registration.",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Subscription Expiry",
      message: "3 stores have subscriptions expiring in 7 days.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "System Update",
      message: "New system update available for deployment.",
      time: "3 hours ago",
      read: true,
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 transition-colors"
              placeholder="Search stores, users, subscriptions..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-sm font-medium text-gray-900">Admin User</span>
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {showNotifications && (
        <div className="absolute right-4 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "p-4 border-b border-gray-200 hover:bg-gray-50",
                  !notification.read && "bg-blue-50"
                )}
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <a href="#" className="text-sm text-primary-600 hover:text-primary-700">View all notifications</a>
          </div>
        </div>
      )}
    </header>
  );
} 