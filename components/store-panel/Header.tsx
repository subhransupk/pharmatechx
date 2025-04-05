import React, { useState } from 'react';
import { Bell, Search, User, LogOut, Settings, HelpCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: 'Low Stock Alert',
      message: 'Paracetamol is running low on stock',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      title: 'New Order',
      message: 'Order #1234 has been placed',
      time: '15 minutes ago',
      read: false
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'Payment of ₹500 received for Order #1233',
      time: '1 hour ago',
      read: true
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link href="/store-panel" className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="PharmaTechX Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-green-600">PharmaTechX</span>
            </Link>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-5 h-5 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                          !notification.read ? 'bg-green-50' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{notification.title}</h4>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                          </div>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <Link href="/store-panel/notifications" className="text-green-600 text-sm hover:underline">
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Support Button */}
            <Link 
              href="/store-panel/support" 
              className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Support</span>
            </Link>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full flex items-center space-x-2"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/store-panel/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-5 h-5 mr-3" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/store-panel/settings"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-5 h-5 mr-3" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      href="/store-panel/help"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <HelpCircle className="w-5 h-5 mr-3" />
                      <span>Help & Support</span>
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <button
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                      onClick={() => {/* Add logout logic */}}
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 