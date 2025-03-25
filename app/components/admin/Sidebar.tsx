"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  StoreIcon,
  PackageIcon,
  CreditCardIcon,
  UsersIcon,
  SettingsIcon,
  FileTextIcon,
  BarChartIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Stores",
    href: "/admin/stores",
    icon: StoreIcon,
  },
  {
    name: "Subscriptions",
    href: "/admin/subscriptions",
    icon: PackageIcon,
  },
  {
    name: "Payments",
    href: "/admin/payments",
    icon: CreditCardIcon,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: UsersIcon,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: BarChartIcon,
  },
  {
    name: "Documents",
    href: "/admin/documents",
    icon: FileTextIcon,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: SettingsIcon,
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-900">PharmaTechX</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <ChevronLeftIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg transition-colors group relative",
                  isCollapsed ? "justify-center px-2" : "px-3",
                  "py-2 text-sm font-medium",
                  isActive
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5",
                    !isCollapsed && "mr-3",
                    isActive ? "text-primary-700" : "text-gray-700"
                  )}
                />
                {!isCollapsed && <span>{item.name}</span>}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {!isCollapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <BellIcon className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Admin Support</p>
                <p className="text-xs text-gray-500">Need help?</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
} 