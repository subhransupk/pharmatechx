"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Filter, 
  Calendar, 
  Search,
  Users,
  Clock,
  TrendingUp,
  Award,
  Star
} from "lucide-react";

export default function StaffReportsPage() {
  const [dateRange, setDateRange] = useState("last30");
  const [activeTab, setActiveTab] = useState("overview");
  const [staffFilter, setStaffFilter] = useState("all");

  // Mock data for staff members
  const staffMembers = [
    { 
      id: 1, 
      name: "Rahul Sharma", 
      role: "Pharmacist", 
      sales: 45600, 
      orders: 124, 
      attendance: 98, 
      rating: 4.8,
      performance: "excellent"
    },
    { 
      id: 2, 
      name: "Priya Patel", 
      role: "Cashier", 
      sales: 38200, 
      orders: 156, 
      attendance: 95, 
      rating: 4.5,
      performance: "good"
    },
    { 
      id: 3, 
      name: "Amit Kumar", 
      role: "Pharmacist", 
      sales: 52300, 
      orders: 145, 
      attendance: 100, 
      rating: 4.9,
      performance: "excellent"
    },
    { 
      id: 4, 
      name: "Neha Singh", 
      role: "Manager", 
      sales: 28500, 
      orders: 78, 
      attendance: 100, 
      rating: 4.7,
      performance: "good"
    },
    { 
      id: 5, 
      name: "Vikram Reddy", 
      role: "Delivery Boy", 
      sales: 0, 
      orders: 210, 
      attendance: 92, 
      rating: 4.3,
      performance: "average"
    },
    { 
      id: 6, 
      name: "Sanjay Gupta", 
      role: "Cashier", 
      sales: 32100, 
      orders: 132, 
      attendance: 88, 
      rating: 4.0,
      performance: "average"
    },
  ];

  // Mock data for attendance records
  const attendanceRecords = [
    { date: "2025-03-01", present: 5, absent: 1, late: 0 },
    { date: "2025-03-02", present: 6, absent: 0, late: 0 },
    { date: "2025-03-03", present: 4, absent: 1, late: 1 },
    { date: "2025-03-04", present: 5, absent: 0, late: 1 },
    { date: "2025-03-05", present: 6, absent: 0, late: 0 },
    { date: "2025-03-06", present: 5, absent: 1, late: 0 },
    { date: "2025-03-07", present: 4, absent: 2, late: 0 },
  ];

  // Filter staff members based on performance
  const filteredStaff = staffFilter === "all" 
    ? staffMembers 
    : staffMembers.filter(staff => staff.performance === staffFilter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/store-panel/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Staff Performance Reports</h1>
            <p className="text-gray-500 mt-1">
              Monitor staff productivity, attendance and sales performance
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
              <p className="text-sm text-gray-500">Total Staff</p>
              <p className="text-2xl font-bold text-gray-800">6</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-gray-500">Active employees</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Attendance Rate</p>
              <p className="text-2xl font-bold text-gray-800">95.5%</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <Clock className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+2.3%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Sales per Staff</p>
              <p className="text-2xl font-bold text-gray-800">₹32,783</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+5.7%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Top Performer</p>
              <p className="text-2xl font-bold text-gray-800">Amit Kumar</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
              <Award className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-gray-500">₹52,300 in sales</span>
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
            onClick={() => setActiveTab("sales")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "sales"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Sales Performance
          </button>
          <button
            onClick={() => setActiveTab("attendance")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "attendance"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Attendance
          </button>
          <button
            onClick={() => setActiveTab("ratings")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "ratings"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Customer Ratings
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Staff Performance Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Staff Performance Overview</h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search staff..."
                    className="border border-gray-300 rounded-md pl-10 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <select
                  value={staffFilter}
                  onChange={(e) => setStaffFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Staff</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredStaff.map((staff) => (
                    <tr key={staff.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-800">{staff.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{staff.role}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">₹{staff.sales.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{staff.orders}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{staff.attendance}%</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <span className="mr-1">{staff.rating}</span>
                          <Star className="h-4 w-4 text-amber-400 fill-current" />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          staff.performance === "excellent" 
                            ? "bg-green-100 text-green-800" 
                            : staff.performance === "good"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                        }`}>
                          {staff.performance.charAt(0).toUpperCase() + staff.performance.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Sales Performance by Staff</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Sales Performance Chart</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Attendance Trend</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Attendance Trend Chart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "sales" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Detailed Sales Performance</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed sales performance content would go here.</p>
          </div>
        </div>
      )}

      {activeTab === "attendance" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Daily Attendance Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {attendanceRecords.map((record, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-800">{record.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{record.present}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{record.absent}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{record.late}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {Math.round((record.present / (record.present + record.absent + record.late)) * 100)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Attendance Visualization</h3>
            <div className="h-64 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Attendance Visualization Chart</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "ratings" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Customer Ratings Analysis</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Detailed customer ratings analysis content would go here.</p>
          </div>
        </div>
      )}
    </div>
  );
} 