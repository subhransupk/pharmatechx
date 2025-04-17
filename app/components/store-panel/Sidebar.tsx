"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Settings,
  ShoppingCart,
  BarChart,
  Bell,
  HelpCircle,
  LogOut,
  Pill,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/store-panel",
    icon: LayoutDashboard,
  },
  {
    name: "Inventory",
    href: "/store-panel/inventory",
    icon: Package,
    subItems: [
      { name: "Stock Management", href: "/store-panel/inventory/stock" },
      { name: "Low Stock Alerts", href: "/store-panel/inventory/alerts" },
      { name: "Stock History", href: "/store-panel/inventory/history" },
      { name: "Stock Reports", href: "/store-panel/inventory/reports" },
    ],
  },
  {
    name: "Prescriptions",
    href: "/store-panel/prescriptions",
    icon: FileText,
    subItems: [
      { name: "New Prescriptions", href: "/store-panel/prescriptions/new" },
      { name: "Pending", href: "/store-panel/prescriptions/pending" },
      { name: "Ready for Pickup", href: "/store-panel/prescriptions/ready" },
      { name: "Completed", href: "/store-panel/prescriptions/completed" },
      { name: "Search", href: "/store-panel/prescriptions/search" },
      { name: "Reports", href: "/store-panel/prescriptions/reports" },
    ],
  },
  {
    name: "Patients",
    href: "/store-panel/patients",
    icon: Users,
    subItems: [
      { name: "Patient List", href: "/store-panel/patients/list" },
      { name: "Patient Records", href: "/store-panel/patients/records" },
      { name: "Patient History", href: "/store-panel/patients/history" },
      { name: "Patient Reports", href: "/store-panel/patients/reports" },
    ],
  },
  {
    name: "Sales",
    href: "/store-panel/sales",
    icon: ShoppingCart,
    subItems: [
      { name: "New Sale", href: "/store-panel/sales/new" },
      { name: "Sales History", href: "/store-panel/sales/history" },
      { name: "Sales Reports", href: "/store-panel/sales/reports" },
      { name: "Refunds", href: "/store-panel/sales/refunds" },
    ],
  },
  {
    name: "Analytics",
    href: "/store-panel/analytics",
    icon: BarChart,
    subItems: [
      { name: "Sales Analytics", href: "/store-panel/analytics/sales" },
      { name: "Inventory Analytics", href: "/store-panel/analytics/inventory" },
      { name: "Customer Analytics", href: "/store-panel/analytics/customers" },
      { name: "Financial Reports", href: "/store-panel/analytics/financial" },
    ],
  },
  {
    name: "Notifications",
    href: "/store-panel/notifications",
    icon: Bell,
  },
  {
    name: "Support",
    href: "/store-panel/support",
    icon: HelpCircle,
  },
  {
    name: "Settings",
    href: "/store-panel/settings",
    icon: Settings,
    subItems: [
      { name: "General Settings", href: "/store-panel/settings/general" },
      { name: "User Management", href: "/store-panel/settings/users" },
      { name: "Security", href: "/store-panel/settings/security" },
      { name: "Backup & Restore", href: "/store-panel/settings/backup" },
      { name: "Printing", href: "/store-panel/settings/printing" },
      { name: "Email Settings", href: "/store-panel/settings/email" },
      { name: "Phone Settings", href: "/store-panel/settings/phone" },
      { name: "Messaging", href: "/store-panel/settings/messaging" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 shrink-0 items-center border-b border-gray-200 px-6">
        <Link href="/store-panel" className="flex items-center">
          <div className="relative h-8 w-32">
            <Image
              src="/images/logo/final-logo.png"
              alt="ShelfCure Logo"
              fill
              sizes="128px"
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navigation.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                pathname === item.href
                  ? "bg-primary-50 text-primary-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  pathname === item.href
                    ? "text-primary-600"
                    : "text-gray-400 group-hover:text-gray-500"
                )}
              />
              {item.name}
            </Link>
            {item.subItems && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                      pathname === subItem.href
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <button
          className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          <LogOut className="mr-3 h-5 w-5 text-gray-400" />
          Sign Out
        </button>
      </div>
    </div>
  );
} 