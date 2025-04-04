"use client";

import { useState } from "react";
import { 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon,
  EyeIcon,
  PrinterIcon,
  MessageSquareIcon,
  RefreshCwIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  TruckIcon,
  PackageIcon
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for orders
const orderData = [
  {
    id: "ORD-2023-001",
    customer: "John Doe",
    date: "2023-06-15",
    total: "₹1,250.00",
    status: "completed",
    items: 5,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2023-002",
    customer: "Jane Smith",
    date: "2023-06-14",
    total: "₹850.50",
    status: "processing",
    items: 3,
    paymentMethod: "UPI",
  },
  {
    id: "ORD-2023-003",
    customer: "Robert Johnson",
    date: "2023-06-13",
    total: "₹2,100.75",
    status: "shipped",
    items: 7,
    paymentMethod: "Cash",
  },
  {
    id: "ORD-2023-004",
    customer: "Emily Davis",
    date: "2023-06-12",
    total: "₹750.25",
    status: "cancelled",
    items: 2,
    paymentMethod: "Debit Card",
  },
  {
    id: "ORD-2023-005",
    customer: "Michael Wilson",
    date: "2023-06-11",
    total: "₹1,500.00",
    status: "completed",
    items: 4,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2023-006",
    customer: "Sarah Brown",
    date: "2023-06-10",
    total: "₹950.00",
    status: "processing",
    items: 3,
    paymentMethod: "UPI",
  },
  {
    id: "ORD-2023-007",
    customer: "David Miller",
    date: "2023-06-09",
    total: "₹1,800.50",
    status: "shipped",
    items: 6,
    paymentMethod: "Cash",
  },
  {
    id: "ORD-2023-008",
    customer: "Lisa Anderson",
    date: "2023-06-08",
    total: "₹650.75",
    status: "completed",
    items: 2,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-2023-009",
    customer: "James Taylor",
    date: "2023-06-07",
    total: "₹1,350.25",
    status: "processing",
    items: 5,
    paymentMethod: "UPI",
  },
  {
    id: "ORD-2023-010",
    customer: "Patricia Martinez",
    date: "2023-06-06",
    total: "₹2,250.00",
    status: "shipped",
    items: 8,
    paymentMethod: "Cash",
  },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("");
  
  // Filter orders based on search term and status
  const filteredOrders = orderData.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });
  
  // Get unique statuses for filter dropdown
  const statuses = [...new Set(orderData.map(order => order.status))];
  
  // Get status icon and color
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "completed":
        return {
          icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
          label: "Completed",
          color: "bg-green-100 text-green-800"
        };
      case "processing":
        return {
          icon: <ClockIcon className="w-5 h-5 text-blue-500" />,
          label: "Processing",
          color: "bg-blue-100 text-blue-800"
        };
      case "shipped":
        return {
          icon: <TruckIcon className="w-5 h-5 text-purple-500" />,
          label: "Shipped",
          color: "bg-purple-100 text-purple-800"
        };
      case "cancelled":
        return {
          icon: <XCircleIcon className="w-5 h-5 text-red-500" />,
          label: "Cancelled",
          color: "bg-red-100 text-red-800"
        };
      default:
        return {
          icon: <PackageIcon className="w-5 h-5 text-gray-500" />,
          label: "Unknown",
          color: "bg-gray-100 text-gray-800"
        };
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <Link href="/store-panel/billing/new-sale" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
          <PackageIcon className="h-5 w-5 mr-2" />
          New Order
        </Link>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
              placeholder="Search orders by ID or customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <div className="w-48">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">All Statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {getStatusInfo(status).label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-48">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
              >
                <option value="">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50">
              <FilterIcon className="h-4 w-4 mr-2" />
              More Filters
            </button>
            
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const statusInfo = getStatusInfo(order.status);
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.paymentMethod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-primary-600 hover:text-primary-900">
                                <EyeIcon className="h-5 w-5" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-gray-600 hover:text-gray-900">
                                <PrinterIcon className="h-5 w-5" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Print Invoice</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-green-600 hover:text-green-900">
                                <MessageSquareIcon className="h-5 w-5" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Send WhatsApp</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 