import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings,
  FileText,
  BarChart,
  Receipt,
  Calendar,
  CreditCard,
  Bell,
  Scan,
  Upload,
  Database,
  ClipboardList,
  Wallet,
  Printer,
  MessageSquare,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
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

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">Store Panel</h1>
      </div>
      <nav>
        {menuItems.map((section) => (
          <div key={section.section} className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
              {section.section}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 