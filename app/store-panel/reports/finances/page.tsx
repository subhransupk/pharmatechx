"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  Filter, 
  Calendar, 
  Search,
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  LineChart
} from "lucide-react";

export default function FinancesReportsPage() {
  const [dateRange, setDateRange] = useState("last30");
  const [activeTab, setActiveTab] = useState("overview");
  const [expenseFilter, setExpenseFilter] = useState("all");

  // Mock data for expense categories
  const expenseCategories = [
    { id: 1, category: "Inventory Purchases", amount: "₹85,000", percentage: 68 },
    { id: 2, category: "Staff Salaries", amount: "₹25,000", percentage: 20 },
    { id: 3, category: "Rent & Utilities", amount: "₹8,500", percentage: 6.8 },
    { id: 4, category: "Marketing", amount: "₹3,500", percentage: 2.8 },
    { id: 5, category: "Equipment", amount: "₹1,800", percentage: 1.4 },
    { id: 6, category: "Miscellaneous", amount: "₹1,200", percentage: 1 },
  ];

  // Mock data for monthly expenses
  const monthlyExpenses = [
    { month: "Jan", expenses: 110000, revenue: 145000, profit: 35000, displayExpenses: "₹1,10,000", displayRevenue: "₹1,45,000", displayProfit: "₹35,000" },
    { month: "Feb", expenses: 105000, revenue: 138000, profit: 33000, displayExpenses: "₹1,05,000", displayRevenue: "₹1,38,000", displayProfit: "₹33,000" },
    { month: "Mar", expenses: 125000, revenue: 165000, profit: 40000, displayExpenses: "₹1,25,000", displayRevenue: "₹1,65,000", displayProfit: "₹40,000" },
    { month: "Apr", expenses: 118000, revenue: 158000, profit: 40000, displayExpenses: "₹1,18,000", displayRevenue: "₹1,58,000", displayProfit: "₹40,000" },
    { month: "May", expenses: 122000, revenue: 162000, profit: 40000, displayExpenses: "₹1,22,000", displayRevenue: "₹1,62,000", displayProfit: "₹40,000" },
    { month: "Jun", expenses: 130000, revenue: 175000, profit: 45000, displayExpenses: "₹1,30,000", displayRevenue: "₹1,75,000", displayProfit: "₹45,000" },
  ];

  // Mock data for recent expenses
  const recentExpenses = [
    { id: 1, date: "2025-03-12", category: "Inventory Purchases", vendor: "MediSupply Inc.", amount: "₹12,500", status: "paid" },
    { id: 2, date: "2025-03-10", category: "Staff Salaries", vendor: "Payroll", amount: "₹25,000", status: "paid" },
    { id: 3, date: "2025-03-08", category: "Rent", vendor: "Property Management", amount: "₹5,500", status: "paid" },
    { id: 4, date: "2025-03-05", category: "Utilities", vendor: "Electric Company", amount: "₹1,800", status: "paid" },
    { id: 5, date: "2025-03-03", category: "Marketing", vendor: "Digital Ads Agency", amount: "₹2,500", status: "pending" },
    { id: 6, date: "2025-03-01", category: "Equipment", vendor: "MedTech Solutions", amount: "₹1,800", status: "paid" },
  ];

  // Filter expenses based on status
  const filteredExpenses = expenseFilter === "all" 
    ? recentExpenses 
    : recentExpenses.filter(expense => expense.status === expenseFilter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/store-panel/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Expenses & Profit Reports</h1>
            <p className="text-gray-500 mt-1">
              Analyze your expenses, revenue, and profit margins
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
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">₹1,65,000</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+8.2%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-800">₹1,25,000</p>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center text-red-600">
              <TrendingDown className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-red-600 font-medium">+5.3%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Net Profit</p>
              <p className="text-2xl font-bold text-gray-800">₹40,000</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+11.8%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Profit Margin</p>
              <p className="text-2xl font-bold text-gray-800">24.2%</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <PieChart className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 font-medium">+2.5%</span>
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
            onClick={() => setActiveTab("expenses")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "expenses"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => setActiveTab("profit")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "profit"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Profit Analysis
          </button>
          <button
            onClick={() => setActiveTab("tax")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "tax"
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Tax Reports
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Revenue, Expenses & Profit Trend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-800">Revenue, Expenses & Profit Trend</h3>
              <div className="flex items-center space-x-2">
                <button className="text-xs bg-primary-50 text-primary-600 px-3 py-1 rounded-full">Monthly</button>
                <button className="text-xs text-gray-500 px-3 py-1 rounded-full hover:bg-gray-50">Quarterly</button>
                <button className="text-xs text-gray-500 px-3 py-1 rounded-full hover:bg-gray-50">Yearly</button>
              </div>
            </div>
            <div className="h-80 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Revenue, Expenses & Profit Trend Chart</p>
              </div>
            </div>
          </div>

          {/* Expense Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Expense Breakdown</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Expense Categories Pie Chart</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Expense Categories</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {expenseCategories.map((category) => (
                      <tr key={category.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-800">{category.category}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{category.amount}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-[100px]">
                              <div 
                                className="bg-primary-600 h-2.5 rounded-full" 
                                style={{ width: `${category.percentage}%` }}
                              ></div>
                            </div>
                            <span>{category.percentage}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Profit Margin Trend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Profit Margin Trend</h3>
            <div className="h-64 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Profit Margin Trend Chart</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "expenses" && (
        <div className="space-y-6">
          {/* Recent Expenses */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Recent Expenses</h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search expenses..."
                    className="border border-gray-300 rounded-md pl-10 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <select
                  value={expenseFilter}
                  onChange={(e) => setExpenseFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Expenses</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredExpenses.map((expense) => (
                    <tr key={expense.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-800">{expense.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{expense.category}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{expense.vendor}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">{expense.amount}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          expense.status === "paid" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {expense.status === "paid" ? "Paid" : "Pending"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <button className="text-primary-600 hover:text-primary-800">View</button>
                          <button className="text-gray-600 hover:text-gray-800">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredExpenses.length}</span> of <span className="font-medium">{recentExpenses.length}</span> expenses
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-primary-50 text-primary-600 border border-primary-100 rounded-md text-sm hover:bg-primary-100">Next</button>
              </div>
            </div>
          </div>

          {/* Monthly Expense Trend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Monthly Expense Trend</h3>
            <div className="h-64 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Monthly Expense Trend Chart</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "profit" && (
        <div className="space-y-6">
          {/* Monthly Profit Analysis */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">Monthly Profit Analysis</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expenses</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {monthlyExpenses.map((month, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-800">{month.month} 2025</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{month.displayRevenue}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{month.displayExpenses}</td>
                      <td className="px-4 py-3 text-sm text-gray-800">{month.displayProfit}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {Math.round((month.profit / month.revenue) * 100)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Profit Comparison Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Revenue vs Expenses</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Revenue vs Expenses Chart</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-6">Profit Growth</h3>
              <div className="h-64 w-full">
                {/* This would be replaced with an actual chart component */}
                <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Profit Growth Chart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profit by Product Category */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Profit by Product Category</h3>
            <div className="h-64 w-full">
              {/* This would be replaced with an actual chart component */}
              <div className="h-full w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Profit by Product Category Chart</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "tax" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Tax Reports</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Tax reports and GST filing information would go here.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">GST Summary</h4>
                <p className="text-sm text-gray-500">Monthly GST filing summary and reports</p>
                <button className="mt-3 text-primary-600 text-sm font-medium">View Report</button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">Income Tax</h4>
                <p className="text-sm text-gray-500">Annual income tax calculation and reports</p>
                <button className="mt-3 text-primary-600 text-sm font-medium">View Report</button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">TDS Reports</h4>
                <p className="text-sm text-gray-500">Tax deducted at source reports</p>
                <button className="mt-3 text-primary-600 text-sm font-medium">View Report</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 