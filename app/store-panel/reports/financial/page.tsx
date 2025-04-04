"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Filter,
  Download,
  Search,
  BarChart,
  PieChart,
  Receipt,
  CreditCard,
  Wallet
} from "lucide-react";

export default function FinancialReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

  // Mock data for financial reports
  const financialData = {
    summary: {
      totalRevenue: 125000,
      totalExpenses: 45000,
      netProfit: 80000,
      profitMargin: 64,
      revenueGrowth: 12.5,
      expenseGrowth: 8.3
    },
    monthlyRevenue: [
      { month: "Jan", revenue: 95000, expenses: 35000, profit: 60000 },
      { month: "Feb", revenue: 105000, expenses: 38000, profit: 67000 },
      { month: "Mar", revenue: 115000, expenses: 40000, profit: 75000 },
      { month: "Apr", revenue: 125000, expenses: 45000, profit: 80000 },
      { month: "May", revenue: 135000, expenses: 48000, profit: 87000 },
      { month: "Jun", revenue: 145000, expenses: 52000, profit: 93000 },
    ],
    expenseCategories: [
      { category: "Inventory", amount: 25000, percentage: 55.6 },
      { category: "Staff Salaries", amount: 12000, percentage: 26.7 },
      { category: "Utilities", amount: 3500, percentage: 7.8 },
      { category: "Marketing", amount: 2000, percentage: 4.4 },
      { category: "Other", amount: 1500, percentage: 3.3 },
    ],
    topProducts: [
      { name: "Paracetamol 500mg", revenue: 25000, quantity: 5000, profit: 12500 },
      { name: "Amoxicillin 250mg", revenue: 22000, quantity: 2200, profit: 11000 },
      { name: "Aspirin 100mg", revenue: 18000, quantity: 6000, profit: 9000 },
      { name: "Cetirizine 10mg", revenue: 15000, quantity: 3000, profit: 7500 },
      { name: "Metformin 500mg", revenue: 12000, quantity: 2400, profit: 6000 },
    ],
    recentTransactions: [
      { id: 1, date: "2024-04-01", description: "Sale #1234", amount: 2500, type: "revenue" },
      { id: 2, date: "2024-04-01", description: "Inventory Purchase", amount: -1500, type: "expense" },
      { id: 3, date: "2024-03-31", description: "Sale #1233", amount: 1800, type: "revenue" },
      { id: 4, date: "2024-03-31", description: "Utility Bill", amount: -500, type: "expense" },
      { id: 5, date: "2024-03-30", description: "Sale #1232", amount: 3200, type: "revenue" },
      { id: 6, date: "2024-03-30", description: "Staff Salary", amount: -8000, type: "expense" },
    ]
  };

  // Get current year and previous years for dropdown
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Financial Reports</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">₹{financialData.summary.totalRevenue.toLocaleString()}</h3>
              <p className="text-sm text-green-500">+{financialData.summary.revenueGrowth}% from last period</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Expenses</p>
              <h3 className="text-2xl font-bold">₹{financialData.summary.totalExpenses.toLocaleString()}</h3>
              <p className="text-sm text-red-500">+{financialData.summary.expenseGrowth}% from last period</p>
            </div>
            <TrendingDown className="w-8 h-8 text-red-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Net Profit</p>
              <h3 className="text-2xl font-bold">₹{financialData.summary.netProfit.toLocaleString()}</h3>
              <p className="text-sm text-green-500">+{((financialData.summary.netProfit / financialData.summary.totalRevenue) * 100).toFixed(1)}% margin</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Profit Margin</p>
              <h3 className="text-2xl font-bold">{financialData.summary.profitMargin}%</h3>
              <p className="text-sm text-green-500">+2.3% from last period</p>
            </div>
            <PieChart className="w-8 h-8 text-purple-500" />
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
              <label htmlFor="period" className="text-sm">Period:</label>
              <select 
                id="period" 
                className="border rounded-md px-3 py-1"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="year" className="text-sm">Year:</label>
              <select 
                id="year" 
                className="border rounded-md px-3 py-1"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="border rounded-md pl-10 pr-3 py-1 w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Revenue & Expenses Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Revenue & Expenses Trend</h3>
        <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
          <BarChart className="w-12 h-12 text-gray-400" />
          <p className="text-gray-500">Revenue and expenses chart will be displayed here</p>
        </div>
      </Card>

      {/* Expense Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
          <div className="space-y-4">
            {financialData.expenseCategories.map((category) => (
              <div key={category.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{category.category}</span>
                  <span>₹{category.amount.toLocaleString()} ({category.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {financialData.topProducts.map((product) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{product.revenue.toLocaleString()}</p>
                  <p className="text-sm text-green-500">Profit: ₹{product.profit.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {financialData.recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ₹{Math.abs(transaction.amount).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${transaction.type === 'revenue' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Financial Insights */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Financial Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h4 className="font-medium">Revenue Growth</h4>
            </div>
            <p className="text-sm text-gray-600">
              Your revenue has grown by {financialData.summary.revenueGrowth}% compared to the previous period. 
              This is primarily driven by increased sales in painkillers and antibiotics.
            </p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingDown className="w-5 h-5 text-orange-500" />
              <h4 className="font-medium">Expense Management</h4>
            </div>
            <p className="text-sm text-gray-600">
              Expenses have increased by {financialData.summary.expenseGrowth}%. 
              Consider reviewing your inventory management to reduce costs.
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <PieChart className="w-5 h-5 text-green-500" />
              <h4 className="font-medium">Profitability</h4>
            </div>
            <p className="text-sm text-gray-600">
              Your profit margin is {financialData.summary.profitMargin}%, which is above the industry average. 
              Focus on high-margin products to further improve profitability.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
} 