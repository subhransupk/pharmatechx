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
  Search,
  Users,
  ShoppingBag,
  Clock,
  TrendingUp
} from "lucide-react";

export default function CustomerOrdersPage() {
  const [dateRange, setDateRange] = useState("last30");
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for customer orders
  const customerOrders = [
    { 
      id: "ORD-2023-001", 
      customer: "Rahul Sharma", 
      date: "Mar 12, 2023", 
      items: 5, 
      total: 1250, 
      status: "Completed",
      paymentMethod: "Credit Card" 
    },
    { 
      id: "ORD-2023-002", 
      customer: "Priya Patel", 
      date: "Mar 11, 2023", 
      items: 3, 
      total: 850, 
      status: "Completed",
      paymentMethod: "Cash" 
    },
    { 
      id: "ORD-2023-003", 
      customer: "Amit Singh", 
      date: "Mar 10, 2023", 
      items: 7, 
      total: 1800, 
      status: "Completed",
      paymentMethod: "UPI" 
    },
    { 
      id: "ORD-2023-004", 
      customer: "Neha Gupta", 
      date: "Mar 10, 2023", 
      items: 2, 
      total: 450, 
      status: "Completed",
      paymentMethod: "Credit Card" 
    },
    { 
      id: "ORD-2023-005", 
      customer: "Vikram Reddy", 
      date: "Mar 9, 2023", 
      items: 4, 
      total: 1100, 
      status: "Completed",
      paymentMethod: "UPI" 
    },
    { 
      id: "ORD-2023-006", 
      customer: "Ananya Desai", 
      date: "Mar 8, 2023", 
      items: 6, 
      total: 1550, 
      status: "Completed",
      paymentMethod: "Cash" 
    },
    { 
      id: "ORD-2023-007", 
      customer: "Rajesh Kumar", 
      date: "Mar 7, 2023", 
      items: 3, 
      total: 780, 
      status: "Completed",
      paymentMethod: "Credit Card" 
    },
    { 
      id: "ORD-2023-008", 
      customer: "Meera Joshi", 
      date: "Mar 6, 2023", 
      items: 5, 
      total: 1350, 
      status: "Completed",
      paymentMethod: "UPI" 
    },
  ];

  // Mock data for top customers
  const topCustomers = [
    { id: 1, name: "Rahul Sharma", orders: 12, totalSpent: 15250 },
    { id: 2, name: "Priya Patel", orders: 10, totalSpent: 12800 },
    { id: 3, name: "Amit Singh", orders: 8, totalSpent: 10500 },
    { id: 4, name: "Neha Gupta", orders: 7, totalSpent: 8900 },
    { id: 5, name: "Vikram Reddy", orders: 6, totalSpent: 7600 },
  ];

  // Mock data for order frequency
  const orderFrequencyData = [
    { day: "Monday", orders: 45 },
    { day: "Tuesday", orders: 38 },
    { day: "Wednesday", orders: 52 },
    { day: "Thursday", orders: 41 },
    { day: "Friday", orders: 58 },
    { day: "Saturday", orders: 68 },
    { day: "Sunday", orders: 35 },
  ];

  // Filter orders based on search query
  const filteredOrders = customerOrders.filter(order => 
    order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/store-panel/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Customer Orders</h1>
            <p className="text-gray-500 mt-1">
              Analyze customer ordering patterns and behaviors
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
              <p className="text-sm text-gray-500">Active Customers</p>
              <p className="text-2xl font-bold text-gray-800">78</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+5.7%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Order Value</p>
              <p className="text-2xl font-bold text-gray-800">₹1,140</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+3.2%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Repeat Customers</p>
              <p className="text-2xl font-bold text-gray-800">62%</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+2.5%</span>
            <span className="text-gray-500 ml-1">from last period</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
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
            onClick={() => setActiveTab("orders")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "orders"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Order List
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "customers"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Top Customers
          </button>
          <button
            onClick={() => setActiveTab("frequency")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "frequency"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Order Frequency
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Order Trends Chart */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Order Trends</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <LineChart className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2">Order trend visualization would appear here</p>
                    <p className="text-sm">Showing data for the selected time period</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods Chart */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Payment Methods</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <PieChart className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2">Payment method distribution would appear here</p>
                    <p className="text-sm">Showing data for the selected time period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Time Distribution */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Order Time Distribution</h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-2">Order time distribution would appear here</p>
                  <p className="text-sm">Showing data for the selected time period</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Order List</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders or customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-primary-600">{order.id}</td>
                        <td className="px-4 py-3 text-sm text-gray-800">{order.customer}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{order.items}</td>
                        <td className="px-4 py-3 text-sm text-gray-800">₹{order.total}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{order.paymentMethod}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-50 text-green-600">
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {filteredOrders.length === 0 && (
                <div className="py-8 text-center text-gray-500">
                  No orders found matching your search criteria
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Top Customers</h3>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Order Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {topCustomers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-800">{customer.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{customer.orders}</td>
                        <td className="px-4 py-3 text-sm text-gray-800">₹{customer.totalSpent}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">₹{Math.round(customer.totalSpent / customer.orders)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "frequency" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Order Frequency Chart */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Order Frequency by Day</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2">Order frequency by day would appear here</p>
                    <p className="text-sm">Showing data for the selected time period</p>
                  </div>
                </div>
              </div>

              {/* Order Time Chart */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Order Time of Day</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Clock className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2">Order time of day distribution would appear here</p>
                    <p className="text-sm">Showing data for the selected time period</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frequency Data */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Order Frequency Data</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orderFrequencyData.map((item) => {
                      const totalOrders = orderFrequencyData.reduce((sum, day) => sum + day.orders, 0);
                      const percentage = ((item.orders / totalOrders) * 100).toFixed(1);
                      
                      return (
                        <tr key={item.day} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.day}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{item.orders}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{percentage}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 