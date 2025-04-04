"use client";

import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  LineChart, 
  DollarSign, 
  Package, 
  ShoppingCart, 
  TrendingUp 
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="flex items-center space-x-2">
          <select className="border rounded-md px-3 py-2">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">₹45,231</h3>
              <p className="text-sm text-green-500">+20.1% from last month</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold">1,234</h3>
              <p className="text-sm text-green-500">+12.5% from last month</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Products Sold</p>
              <h3 className="text-2xl font-bold">3,456</h3>
              <p className="text-sm text-green-500">+8.2% from last month</p>
            </div>
            <Package className="w-8 h-8 text-purple-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Order Value</p>
              <h3 className="text-2xl font-bold">₹367</h3>
              <p className="text-sm text-red-500">-2.3% from last month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-500" />
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
            <LineChart className="w-12 h-12 text-gray-400" />
            <p className="text-gray-500">Revenue chart will be displayed here</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Selling Categories</h3>
          <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
            <BarChart className="w-12 h-12 text-gray-400" />
            <p className="text-gray-500">Category distribution chart will be displayed here</p>
          </div>
        </Card>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded"></div>
                  <div>
                    <p className="font-medium">Product {item}</p>
                    <p className="text-sm text-gray-500">Category {item}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{Math.floor(Math.random() * 1000)}</p>
                  <p className="text-sm text-green-500">+{Math.floor(Math.random() * 20)}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sales by Time of Day</h3>
          <div className="space-y-4">
            {[
              { time: "Morning (6AM-12PM)", percentage: 35 },
              { time: "Afternoon (12PM-5PM)", percentage: 25 },
              { time: "Evening (5PM-9PM)", percentage: 30 },
              { time: "Night (9PM-6AM)", percentage: 10 },
            ].map((item) => (
              <div key={item.time} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.time}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 