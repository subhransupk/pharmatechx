"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  BellIcon, 
  SaveIcon,
  SmartphoneIcon,
  MailIcon,
  AlertCircleIcon,
  ShoppingCartIcon,
  UsersIcon,
  PercentIcon,
  ClockIcon,
  InfoIcon
} from "lucide-react";

// Notification type
interface NotificationSetting {
  id: string;
  name: string;
  description: string;
  email: boolean;
  sms: boolean;
  inApp: boolean;
  icon: React.ElementType;
  category: "sales" | "inventory" | "staff" | "system";
}

// Sample notification settings data
const initialNotificationSettings: NotificationSetting[] = [
  {
    id: "new-order",
    name: "New Order",
    description: "When a new order is placed",
    email: true,
    sms: true,
    inApp: true,
    icon: ShoppingCartIcon,
    category: "sales"
  },
  {
    id: "order-status",
    name: "Order Status Updates",
    description: "When an order status changes",
    email: true,
    sms: false,
    inApp: true,
    icon: ShoppingCartIcon,
    category: "sales"
  },
  {
    id: "payment-received",
    name: "Payment Received",
    description: "When a payment is received",
    email: true,
    sms: false,
    inApp: true,
    icon: ShoppingCartIcon,
    category: "sales"
  },
  {
    id: "low-stock",
    name: "Low Stock Alert",
    description: "When a product stock falls below threshold",
    email: true,
    sms: true,
    inApp: true,
    icon: AlertCircleIcon,
    category: "inventory"
  },
  {
    id: "expiry-alert",
    name: "Expiry Alert",
    description: "When medicines are about to expire",
    email: true,
    sms: true,
    inApp: true,
    icon: ClockIcon,
    category: "inventory"
  },
  {
    id: "staff-login",
    name: "Staff Login",
    description: "When staff members log in",
    email: false,
    sms: false,
    inApp: true,
    icon: UsersIcon,
    category: "staff"
  },
  {
    id: "staff-activity",
    name: "Staff Activity",
    description: "Important staff activities like sales, refunds, etc.",
    email: false,
    sms: false,
    inApp: true,
    icon: UsersIcon,
    category: "staff"
  },
  {
    id: "system-updates",
    name: "System Updates",
    description: "Important system updates and maintenance",
    email: true,
    sms: false,
    inApp: true,
    icon: InfoIcon,
    category: "system"
  }
];

export default function NotificationsPage() {
  const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>(initialNotificationSettings);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "sales" | "inventory" | "staff" | "system">("all");

  // Handle notification setting change
  const handleNotificationChange = (id: string, channel: "email" | "sms" | "inApp", value: boolean) => {
    setNotificationSettings(prev => 
      prev.map(setting => 
        setting.id === id 
          ? { ...setting, [channel]: value } 
          : setting
      )
    );
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Show success message (in a real app, you'd use a toast notification)
      alert("Notification settings updated successfully!");
    }, 1000);
  };

  // Filter notifications by category
  const filteredNotifications = activeCategory === "all" 
    ? notificationSettings 
    : notificationSettings.filter(setting => setting.category === activeCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Link 
          href="/store-panel/settings" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Settings
        </Link>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notification Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure how and when you receive notifications
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Category Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8" aria-label="Notification categories">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`
                py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                ${
                  activeCategory === "all"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <BellIcon className="h-5 w-5 mr-2" />
              All Notifications
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("sales")}
              className={`
                py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                ${
                  activeCategory === "sales"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Sales & Orders
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("inventory")}
              className={`
                py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                ${
                  activeCategory === "inventory"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <AlertCircleIcon className="h-5 w-5 mr-2" />
              Inventory Alerts
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("staff")}
              className={`
                py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                ${
                  activeCategory === "staff"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <UsersIcon className="h-5 w-5 mr-2" />
              Staff
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("system")}
              className={`
                py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                ${
                  activeCategory === "system"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <InfoIcon className="h-5 w-5 mr-2" />
              System
            </button>
          </nav>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <BellIcon className="h-5 w-5 mr-2 text-primary-500" />
              {activeCategory === "all" ? "All Notifications" : 
               activeCategory === "sales" ? "Sales & Orders Notifications" :
               activeCategory === "inventory" ? "Inventory Alert Notifications" :
               activeCategory === "staff" ? "Staff Notifications" : "System Notifications"}
            </h2>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <MailIcon className="h-4 w-4 mr-1 text-gray-400" />
                Email
              </div>
              <div className="flex items-center">
                <SmartphoneIcon className="h-4 w-4 mr-1 text-gray-400" />
                SMS
              </div>
              <div className="flex items-center">
                <BellIcon className="h-4 w-4 mr-1 text-gray-400" />
                In-App
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((setting) => {
                const Icon = setting.icon;
                return (
                  <div key={setting.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 p-1 bg-primary-50 rounded-md">
                        <Icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">{setting.name}</h3>
                        <p className="text-xs text-gray-500">{setting.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={setting.email}
                          onChange={(e) => handleNotificationChange(setting.id, "email", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={setting.sms}
                          onChange={(e) => handleNotificationChange(setting.id, "sms", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={setting.inApp}
                          onChange={(e) => handleNotificationChange(setting.id, "inApp", e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500">
                No notification settings found for this category.
              </div>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3">
          <Link
            href="/store-panel/settings"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              <>
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 