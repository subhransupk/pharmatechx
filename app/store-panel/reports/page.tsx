"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  Calendar, 
  TrendingUp,
  FileText,
  Download
} from "lucide-react";

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("last30");

  const reportCards = [
    {
      title: "Sales Reports",
      description: "View detailed sales analytics and trends",
      icon: BarChart3,
      href: "/store-panel/reports/sales",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Inventory Reports",
      description: "Track stock levels, movements and expiry",
      icon: ShoppingBag,
      href: "/store-panel/reports/inventory",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Expenses & Profit",
      description: "Analyze expenses and profit margins",
      icon: DollarSign,
      href: "/store-panel/reports/finances",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Staff Performance",
      description: "Monitor staff productivity and sales",
      icon: Users,
      href: "/store-panel/reports/staff",
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Customer Orders",
      description: "Analyze customer ordering patterns",
      icon: LineChart,
      href: "/store-panel/reports/customers",
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Delivery Reports",
      description: "Track delivery performance and times",
      icon: TrendingUp,
      href: "/store-panel/reports/delivery",
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
          <p className="text-gray-500 mt-1">
            Generate and analyze detailed reports for your pharmacy
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7">Last 7 Days</option>
            <option value="last30">Last 30 Days</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-100 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <p className="text-2xl font-bold text-gray-800">₹24,500</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+12.5%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold text-gray-800">156</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <ShoppingBag className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+8.2%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Net Profit</p>
              <p className="text-2xl font-bold text-gray-800">₹8,320</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+5.3%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <FileText className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-red-600 font-medium">+3</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportCards.map((card, index) => (
          <Link 
            key={index} 
            href={card.href}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className={`h-12 w-12 rounded-lg ${card.color} flex items-center justify-center`}>
                <card.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Recently Generated Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated On</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated By</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-800">Monthly Sales Report</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Sales</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Mar 12, 2025</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Admin User</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="text-primary-600 hover:text-primary-800">View</button>
                      <button className="text-gray-600 hover:text-gray-800">Download</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 