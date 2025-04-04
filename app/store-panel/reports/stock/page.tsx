"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Package, 
  TrendingDown, 
  TrendingUp, 
  Filter,
  Download,
  Search
} from "lucide-react";

export default function StockReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [stockStatus, setStockStatus] = useState("all");

  // Mock data for stock items
  const stockItems = [
    { id: 1, name: "Paracetamol 500mg", category: "Tablets", currentStock: 150, minStock: 50, expiryDate: "2024-12-31", status: "healthy" },
    { id: 2, name: "Amoxicillin 250mg", category: "Antibiotics", currentStock: 30, minStock: 40, expiryDate: "2024-10-15", status: "low" },
    { id: 3, name: "Aspirin 100mg", category: "Tablets", currentStock: 200, minStock: 30, expiryDate: "2025-03-20", status: "healthy" },
    { id: 4, name: "Cetirizine 10mg", category: "Antihistamines", currentStock: 10, minStock: 25, expiryDate: "2024-09-30", status: "critical" },
    { id: 5, name: "Metformin 500mg", category: "Diabetes", currentStock: 75, minStock: 40, expiryDate: "2024-11-10", status: "healthy" },
    { id: 6, name: "Omeprazole 20mg", category: "Antacids", currentStock: 5, minStock: 20, expiryDate: "2024-08-25", status: "critical" },
    { id: 7, name: "Vitamin C 500mg", category: "Vitamins", currentStock: 120, minStock: 30, expiryDate: "2025-01-15", status: "healthy" },
    { id: 8, name: "Ibuprofen 400mg", category: "Painkillers", currentStock: 25, minStock: 35, expiryDate: "2024-10-30", status: "low" },
  ];

  // Filter stock items based on selected filters
  const filteredItems = stockItems.filter(item => {
    const categoryMatch = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory;
    const statusMatch = stockStatus === "all" || item.status === stockStatus;
    return categoryMatch && statusMatch;
  });

  // Get unique categories for filter dropdown
  const categories = ["all", ...new Set(stockItems.map(item => item.category.toLowerCase()))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Stock Reports</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Stock Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h3 className="text-2xl font-bold">{stockItems.length}</h3>
            </div>
            <Package className="w-8 h-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <h3 className="text-2xl font-bold">{stockItems.filter(item => item.status === "low").length}</h3>
              <p className="text-sm text-orange-500">Needs attention</p>
            </div>
            <TrendingDown className="w-8 h-8 text-orange-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Critical Stock</p>
              <h3 className="text-2xl font-bold">{stockItems.filter(item => item.status === "critical").length}</h3>
              <p className="text-sm text-red-500">Urgent action required</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Healthy Stock</p>
              <h3 className="text-2xl font-bold">{stockItems.filter(item => item.status === "healthy").length}</h3>
              <p className="text-sm text-green-500">Well maintained</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium">Filters:</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="category" className="text-sm">Category:</label>
              <select 
                id="category" 
                className="border rounded-md px-3 py-1"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="status" className="text-sm">Stock Status:</label>
              <select 
                id="status" 
                className="border rounded-md px-3 py-1"
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value)}
              >
                <option value="all">All</option>
                <option value="healthy">Healthy</option>
                <option value="low">Low</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="border rounded-md pl-10 pr-3 py-1 w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Stock Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.currentStock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.minStock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.expiryDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.status === 'healthy' ? 'bg-green-100 text-green-800' : 
                        item.status === 'low' ? 'bg-orange-100 text-orange-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Expiring Soon Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Products Expiring Soon</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Until Expiry</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stockItems
                .filter(item => {
                  const expiryDate = new Date(item.expiryDate);
                  const today = new Date();
                  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                  return daysUntilExpiry <= 90 && daysUntilExpiry > 0;
                })
                .sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime())
                .map((item) => {
                  const expiryDate = new Date(item.expiryDate);
                  const today = new Date();
                  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                  
                  return (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.currentStock}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item.expiryDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${daysUntilExpiry <= 30 ? 'bg-red-100 text-red-800' : 
                            daysUntilExpiry <= 60 ? 'bg-orange-100 text-orange-800' : 
                            'bg-yellow-100 text-yellow-800'}`}>
                          {daysUntilExpiry} days
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
} 