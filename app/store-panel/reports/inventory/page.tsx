"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Filter, 
  Calendar, 
  Search,
  AlertTriangle,
  BarChart3,
  TrendingDown,
  TrendingUp,
  Package
} from "lucide-react";

export default function InventoryReportsPage() {
  const [dateRange, setDateRange] = useState("last30");
  const [activeTab, setActiveTab] = useState("overview");
  const [stockFilter, setStockFilter] = useState("all");

  // Mock data for inventory items
  const inventoryItems = [
    { id: 1, name: "Paracetamol 500mg", category: "Tablets", stock: 120, reorderLevel: 50, expiryDate: "2025-12-15", status: "normal", value: "₹6,000" },
    { id: 2, name: "Amoxicillin 250mg", category: "Antibiotics", stock: 35, reorderLevel: 40, expiryDate: "2025-06-30", status: "low", value: "₹4,375" },
    { id: 3, name: "Vitamin C 1000mg", category: "Supplements", stock: 200, reorderLevel: 50, expiryDate: "2026-01-15", status: "normal", value: "₹10,000" },
    { id: 4, name: "Omeprazole 20mg", category: "Tablets", stock: 15, reorderLevel: 30, expiryDate: "2025-05-10", status: "critical", value: "₹2,250" },
    { id: 5, name: "Cetirizine 10mg", category: "Tablets", stock: 80, reorderLevel: 40, expiryDate: "2025-08-22", status: "normal", value: "₹4,000" },
    { id: 6, name: "Ibuprofen 400mg", category: "Tablets", stock: 25, reorderLevel: 40, expiryDate: "2025-04-18", status: "low", value: "₹1,625" },
    { id: 7, name: "Metformin 500mg", category: "Tablets", stock: 5, reorderLevel: 30, expiryDate: "2025-07-05", status: "critical", value: "₹750" },
    { id: 8, name: "Aspirin 75mg", category: "Tablets", stock: 150, reorderLevel: 50, expiryDate: "2025-11-30", status: "normal", value: "₹7,500" },
  ];

  // Mock data for expiring medicines
  const expiringMedicines = [
    { id: 1, name: "Omeprazole 20mg", category: "Tablets", stock: 45, expiryDate: "2025-04-15", daysLeft: 30 },
    { id: 2, name: "Ibuprofen 400mg", category: "Tablets", stock: 60, expiryDate: "2025-04-30", daysLeft: 45 },
    { id: 3, name: "Metformin 500mg", category: "Tablets", stock: 35, expiryDate: "2025-05-10", daysLeft: 55 },
    { id: 4, name: "Diclofenac 50mg", category: "Tablets", stock: 25, expiryDate: "2025-05-15", daysLeft: 60 },
    { id: 5, name: "Azithromycin 500mg", category: "Antibiotics", stock: 15, expiryDate: "2025-05-20", daysLeft: 65 },
  ];

  // Filter inventory items based on stock status
  const filteredInventory = stockFilter === "all" 
    ? inventoryItems 
    : inventoryItems.filter(item => item.status === stockFilter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/store-panel/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Inventory Reports</h1>
            <p className="text-gray-500 mt-1">
              Track stock levels, movements and expiry dates
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
              <p className="text-sm text-gray-500">Total Products</p>
              <p className="text-2xl font-bold text-gray-800">248</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <Package className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+5</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <TrendingDown className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-red-600 font-medium">+3</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Expiring Soon</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-red-600 font-medium">+2</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Stock Value</p>
              <p className="text-2xl font-bold text-gray-800">₹1,24,500</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+8.5%</span>
            <span className="text-gray-500 ml-1">from last month</span>
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
            onClick={() => setActiveTab("stock")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "stock"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Stock Levels
          </button>
          <button
            onClick={() => setActiveTab("expiry")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "expiry"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Expiry Tracking
          </button>
          <button
            onClick={() => setActiveTab("movement")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "movement"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Stock Movement
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Stock Level Distribution Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-800">Stock Level Distribution</h3>
              <div className="flex items-center space-x-2">
                <button className="text-xs bg-primary-50 text-primary-600 px-3 py-1 rounded-full">By Category</button>
                <button className="text-xs text-gray-500 px-3 py-1 rounded-full hover:bg-gray-50">By Value</button>
              </div>
            </div>
            <div className="h-80 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Stock Level Distribution Chart</p>
              </div>
            </div>
          </div>

          {/* Low Stock & Expiring Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Low Stock Items</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Level</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {inventoryItems.filter(item => item.status !== "normal").map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-800">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.stock}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.reorderLevel}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === "critical" 
                              ? "bg-red-100 text-red-800" 
                              : "bg-amber-100 text-amber-800"
                          }`}>
                            {item.status === "critical" ? "Critical" : "Low"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Expiring Soon</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Left</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {expiringMedicines.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-800">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.expiryDate}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.daysLeft <= 30 
                              ? "bg-red-100 text-red-800" 
                              : item.daysLeft <= 60 
                                ? "bg-amber-100 text-amber-800"
                                : "bg-green-100 text-green-800"
                          }`}>
                            {item.daysLeft} days
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{item.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Stock Value Trend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Stock Value Trend</h3>
            <div className="h-64 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Stock Value Trend Chart</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "stock" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Stock Level Analysis</h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-md pl-10 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <select
                  value={stockFilter}
                  onChange={(e) => setStockFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Items</option>
                  <option value="normal">Normal Stock</option>
                  <option value="low">Low Stock</option>
                  <option value="critical">Critical Stock</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Level</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInventory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-800">{item.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.category}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.stock}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.reorderLevel}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.expiryDate}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === "critical" 
                            ? "bg-red-100 text-red-800" 
                            : item.status === "low"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-green-100 text-green-800"
                        }`}>
                          {item.status === "critical" 
                            ? "Critical" 
                            : item.status === "low" 
                              ? "Low" 
                              : "Normal"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredInventory.length}</span> of <span className="font-medium">248</span> items
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-primary-50 text-primary-600 border border-primary-100 rounded-md text-sm hover:bg-primary-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "expiry" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Expiry Tracking</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed expiry tracking content would go here.</p>
          </div>
        </div>
      )}

      {activeTab === "movement" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Stock Movement Analysis</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed stock movement analysis content would go here.</p>
          </div>
        </div>
      )}
    </div>
  );
} 