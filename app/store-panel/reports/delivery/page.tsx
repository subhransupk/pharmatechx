"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar,
  Truck,
  Clock,
  AlertCircle
} from "lucide-react";

export default function DeliveryReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/store-panel/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Delivery Reports</h1>
            <p className="text-gray-500 mt-1">
              Track delivery performance and times
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="bg-white rounded-lg shadow-sm p-12 border border-gray-100">
        <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
          <div className="h-20 w-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-6">
            <Truck className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Coming Soon</h2>
          <p className="text-gray-500 mb-6">
            We're working hard to bring you comprehensive delivery analytics and reports. 
            This feature will be available in the next update.
          </p>
          <div className="flex items-center space-x-2 text-amber-600 bg-amber-50 px-4 py-3 rounded-md">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">Expected release: Q2 2023</p>
          </div>
        </div>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 opacity-70">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-800">Delivery Performance</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Track on-time delivery rates, average delivery times, and performance by delivery personnel.
          </p>
          <div className="h-40 flex items-center justify-center border border-dashed border-gray-200 rounded-md">
            <p className="text-gray-400 text-sm">Performance metrics visualization coming soon</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 opacity-70">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-800">Delivery Time Analysis</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Analyze delivery times by location, time of day, and order size to optimize your delivery operations.
          </p>
          <div className="h-40 flex items-center justify-center border border-dashed border-gray-200 rounded-md">
            <p className="text-gray-400 text-sm">Time analysis charts coming soon</p>
          </div>
        </div>
      </div>

      {/* Additional Features Preview */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 opacity-70">
        <h3 className="font-semibold text-gray-800 mb-4">Upcoming Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-100 rounded-md">
            <h4 className="font-medium text-gray-700 mb-2">Route Optimization</h4>
            <p className="text-gray-500 text-sm">
              Analyze delivery routes and suggest optimizations to reduce delivery times and costs.
            </p>
          </div>
          <div className="p-4 border border-gray-100 rounded-md">
            <h4 className="font-medium text-gray-700 mb-2">Customer Satisfaction</h4>
            <p className="text-gray-500 text-sm">
              Track delivery-related customer feedback and satisfaction metrics.
            </p>
          </div>
          <div className="p-4 border border-gray-100 rounded-md">
            <h4 className="font-medium text-gray-700 mb-2">Cost Analysis</h4>
            <p className="text-gray-500 text-sm">
              Analyze delivery costs by location, time, and delivery personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 