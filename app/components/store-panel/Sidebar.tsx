"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  PillIcon,
  BarChartIcon,
  UsersIcon,
  SettingsIcon,
  FileTextIcon,
  ShoppingCartIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/store-panel",
    icon: HomeIcon,
  },
  {
    name: "Medicine Management",
    href: "/store-panel/medicines",
    icon: PillIcon,
  },
  {
    name: "Inventory",
    href: "/store-panel/inventory",
    icon: ShoppingCartIcon,
  },
  {
    name: "Billing",
    href: "/store-panel/billing",
    icon: FileTextIcon,
  },
  {
    name: "Staff",
    href: "/store-panel/staff",
    icon: UsersIcon,
  },
  {
    name: "Reports",
    href: "/store-panel/reports",
    icon: BarChartIcon,
  },
  {
    name: "Settings",
    href: "/store-panel/settings",
    icon: SettingsIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-100 flex flex-col transition-all duration-300 shadow-sm",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <Link href="/store-panel" className="flex items-center">
          {!collapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-transparent bg-clip-text">PharmaTechX</span>
          )}
          {collapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-transparent bg-clip-text">P</span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50 transition-colors"
        >
          {collapsed ? (
            <ChevronRightIcon className="h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-1.5 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "sidebar-item group",
                    isActive && "active"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary-600" : "text-gray-500 group-hover:text-primary-600"
                  )} />
                  {!collapsed && <span>{item.name}</span>}
                  {collapsed && isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-primary-600 rounded-r-full"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center">
          <div className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
            VS
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">Volter Store</p>
              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
} 