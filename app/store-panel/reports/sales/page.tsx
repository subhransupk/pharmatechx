"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  ArrowLeft, 
  Download, 
  Filter, 
  Calendar,
  ChevronDown,
  Search
} from "lucide-react";

export default function SalesReportsPage() {
  const [dateRange, setDateRange] = useState("last30");
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for charts
  const salesData = [
    { date: "Mar 1", amount: 1200 },
    { date: "Mar 2", amount: 1800 },
    { date: "Mar 3", amount: 1400 },
    { date: "Mar 4", amount: 2200 },
    { date: "Mar 5", amount: 1900 },
    { date: "Mar 6", amount: 2400 },
    { date: "Mar 7", amount: 2100 },
    { date: "Mar 8", amount: 1700 },
    { date: "Mar 9", amount: 2300 },
    { date: "Mar 10", amount: 2500 },
  ];

  // Mock data for top selling products
  const topSellingProducts = [
    { id: 1, name: "Paracetamol 500mg", category: "Tablets", quantity: 245, revenue: 12250 },
    { id: 2, name: "Amoxicillin 250mg", category: "Antibiotics", quantity: 180, revenue: 9000 },
    { id: 3, name: "Vitamin C 1000mg", category: "Supplements", quantity: 156, revenue: 7800 },
    { id: 4, name: "Omeprazole 20mg", category: "Tablets", quantity: 132, revenue: 6600 },
    { id: 5, name: "Cetirizine 10mg", category: "Tablets", quantity: 120, revenue: 6000 },
  ];

  // Mock data for sales by category
  const salesByCategory = [
    { category: "Tablets", sales: 45000 },
    { category: "Syrups", sales: 32000 },
    { category: "Injectables", sales: 18000 },
    { category: "Supplements", sales: 25000 },
    { category: "Antibiotics", sales: 30000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/store-panel/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Sales Reports</h1>
            <p className="text-gray-500 mt-1">
              Analyze your sales performance and trends
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last7">Last 7 Days</option>
              <option value="last30">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <button className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4 text-gray-500" />
            <span>Filter</span>
          </button>
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
              <LineChart className="h-6 w-6" />
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
              <p className="text-sm text-gray-500">Average Order Value</p>
              <p className="text-2xl font-bold text-gray-800">₹157</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <PieChart className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+3.7%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-800">68.5%</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+2.1%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "products"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "categories"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "customers"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Customers
          </button>
          <button
            onClick={() => setActiveTab("payment")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "payment"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Payment Methods
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Sales Trend Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-800">Sales Trend</h3>
              <div className="flex items-center space-x-2">
                <button className="text-xs bg-primary-50 text-primary-600 px-3 py-1 rounded-full">Daily</button>
                <button className="text-xs text-gray-500 px-3 py-1 rounded-full hover:bg-gray-50">Weekly</button>
                <button className="text-xs text-gray-500 px-3 py-1 rounded-full hover:bg-gray-50">Monthly</button>
              </div>
            </div>
            <div className="h-80 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Sales Trend Chart Visualization</p>
              </div>
            </div>
          </div>

          {/* Top Selling Products */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Top Selling Products</h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-md pl-10 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity Sold</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topSellingProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-800">{product.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{product.quantity}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">₹{product.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sales by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Sales by Category</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Category Distribution Chart</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Sales by Payment Method</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Payment Method Distribution Chart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "products" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Product Sales Analysis</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed product sales analysis content would go here.</p>
          </div>
        </div>
      )}

      {activeTab === "categories" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Category Sales Analysis</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed category sales analysis content would go here.</p>
          </div>
        </div>
      )}

      {activeTab === "customers" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Customer Sales Analysis</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed customer sales analysis content would go here.</p>
          </div>
        </div>
      )}

      {activeTab === "payment" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Payment Method Analysis</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed payment method analysis content would go here.</p>
          </div>
        </div>
      )}
    </div>
  );
} 