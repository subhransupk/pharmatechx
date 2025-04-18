import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Store, 
  CreditCard, 
  Users, 
  Settings,
  FileText,
  BarChart,
  HelpCircle,
  Bell,
  Receipt,
  FileSpreadsheet,
  MessageSquare
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Store, label: 'Stores', href: '/admin/stores' },
    { icon: CreditCard, label: 'Subscriptions', href: '/admin/subscriptions' },
    { icon: Receipt, label: 'Payments', href: '/admin/payments' },
    { icon: FileText, label: 'Documents', href: '/admin/documents' },
    { icon: FileSpreadsheet, label: 'Reports', href: '/admin/reports' },
    { icon: Users, label: 'Users', href: '/admin/users' },
    { icon: MessageSquare, label: 'Support', href: '/admin/support' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
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
      </nav>
    </div>
  );
};

export default Sidebar; 