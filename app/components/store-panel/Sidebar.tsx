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
  LogOut,
  Scan,
  Upload,
  Database,
  Receipt,
  CreditCard,
  Printer,
  MessageSquare,
  Calendar,
  Wallet,
  ClipboardList,
} from "lucide-react";

const menuItems = [
  {
    section: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/store-panel' },
      { icon: Bell, label: 'Notifications', href: '/store-panel/notifications' },
    ]
  },
  {
    section: 'Medicine Management',
    items: [
      { icon: Package, label: 'Medicine List', href: '/store-panel/medicines' },
      { icon: Scan, label: 'Barcode Scanner', href: '/store-panel/barcode-scanner' },
      { icon: Upload, label: 'Bulk Upload', href: '/store-panel/bulk-upload' },
      { icon: Database, label: 'Inventory', href: '/store-panel/inventory' },
    ]
  },
  {
    section: 'Sales & Billing',
    items: [
      { icon: Receipt, label: 'New Sale', href: '/store-panel/billing/new-sale' },
      { icon: ShoppingCart, label: 'Orders', href: '/store-panel/orders' },
      { icon: CreditCard, label: 'Payments', href: '/store-panel/payments' },
      { icon: Printer, label: 'Invoices', href: '/store-panel/billing/invoices' },
      { icon: MessageSquare, label: 'WhatsApp Bills', href: '/store-panel/whatsapp-bills' },
    ]
  },
  {
    section: 'Staff & Management',
    items: [
      { icon: Users, label: 'Staff Management', href: '/store-panel/staff' },
      { icon: Calendar, label: 'Attendance', href: '/store-panel/staff/attendance' },
      { icon: Wallet, label: 'Payroll', href: '/store-panel/staff/salary' },
      { icon: ClipboardList, label: 'Performance', href: '/store-panel/staff/performance' },
    ]
  },
  {
    section: 'Reports & Analytics',
    items: [
      { icon: FileText, label: 'Sales Reports', href: '/store-panel/reports/sales' },
      { icon: BarChart, label: 'Analytics', href: '/store-panel/analytics' },
      { icon: Database, label: 'Stock Reports', href: '/store-panel/reports/stock' },
      { icon: Receipt, label: 'Financial Reports', href: '/store-panel/reports/financial' },
    ]
  },
  {
    section: 'Settings',
    items: [
      { icon: Settings, label: 'Store Settings', href: '/store-panel/settings' },
      { icon: LogOut, label: 'Logout', href: '/store-panel/logout' },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 shrink-0 items-center justify-center border-b border-gray-200 px-6">
        <Link href="/store-panel" className="flex items-center">
          <div className="relative h-10 w-32">
            <Image
              src="/images/logo/final-logo.png"
              alt="PharmaTechX Logo"
              width={120}
              height={40}
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto p-4">
        {menuItems.map((section) => (
          <div key={section.section}>
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.section}
            </h3>
            <div className="mt-2 space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
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
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
} 