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
  SendIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  CheckIcon,
  AlertTriangleIcon
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for WhatsApp bills
const whatsappBillData = [
  {
    id: "WB-2023-001",
    invoiceId: "INV-2023-001",
    customer: "John Doe",
    phone: "+91 98765 43210",
    date: "2023-06-15",
    amount: "₹1,250.00",
    status: "sent",
    sentAt: "2023-06-15 10:30 AM",
    readAt: "2023-06-15 10:35 AM",
  },
  {
    id: "WB-2023-002",
    invoiceId: "INV-2023-002",
    customer: "Jane Smith",
    phone: "+91 87654 32109",
    date: "2023-06-14",
    amount: "₹850.50",
    status: "sent",
    sentAt: "2023-06-14 09:15 AM",
    readAt: "2023-06-14 09:20 AM",
  },
  {
    id: "WB-2023-003",
    invoiceId: "INV-2023-003",
    customer: "Robert Johnson",
    phone: "+91 76543 21098",
    date: "2023-06-13",
    amount: "₹2,100.75",
    status: "pending",
    sentAt: null,
    readAt: null,
  },
  {
    id: "WB-2023-004",
    invoiceId: "INV-2023-004",
    customer: "Emily Davis",
    phone: "+91 65432 10987",
    date: "2023-06-12",
    amount: "₹750.25",
    status: "failed",
    sentAt: "2023-06-12 05:30 PM",
    readAt: null,
    error: "Invalid phone number",
  },
  {
    id: "WB-2023-005",
    invoiceId: "INV-2023-005",
    customer: "Michael Wilson",
    phone: "+91 54321 09876",
    date: "2023-06-11",
    amount: "₹1,500.00",
    status: "sent",
    sentAt: "2023-06-11 03:15 PM",
    readAt: "2023-06-11 03:30 PM",
  },
  {
    id: "WB-2023-006",
    invoiceId: "INV-2023-006",
    customer: "Sarah Brown",
    phone: "+91 43210 98765",
    date: "2023-06-10",
    amount: "₹950.00",
    status: "sent",
    sentAt: "2023-06-10 01:45 PM",
    readAt: null,
  },
  {
    id: "WB-2023-007",
    invoiceId: "INV-2023-007",
    customer: "David Miller",
    phone: "+91 32109 87654",
    date: "2023-06-09",
    amount: "₹1,800.50",
    status: "sent",
    sentAt: "2023-06-09 11:30 AM",
    readAt: "2023-06-09 11:45 AM",
  },
  {
    id: "WB-2023-008",
    invoiceId: "INV-2023-008",
    customer: "Lisa Anderson",
    phone: "+91 21098 76543",
    date: "2023-06-08",
    amount: "₹650.75",
    status: "sent",
    sentAt: "2023-06-08 10:15 AM",
    readAt: "2023-06-08 10:30 AM",
  },
  {
    id: "WB-2023-009",
    invoiceId: "INV-2023-009",
    customer: "James Taylor",
    phone: "+91 10987 65432",
    date: "2023-06-07",
    amount: "₹1,350.25",
    status: "sent",
    sentAt: "2023-06-07 04:30 PM",
    readAt: "2023-06-07 04:45 PM",
  },
  {
    id: "WB-2023-010",
    invoiceId: "INV-2023-010",
    customer: "Patricia Martinez",
    phone: "+91 09876 54321",
    date: "2023-06-06",
    amount: "₹2,250.00",
    status: "sent",
    sentAt: "2023-06-06 02:45 PM",
    readAt: "2023-06-06 03:00 PM",
  },
];

export default function WhatsAppBillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("");
  
  // Filter WhatsApp bills based on search term and status
  const filteredBills = whatsappBillData.filter((bill) => {
    const matchesSearch = 
      bill.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.invoiceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "" || bill.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });
  
  // Get unique statuses for filter dropdown
  const statuses = [...new Set(whatsappBillData.map(bill => bill.status))];
  
  // Get status icon and color
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "sent":
        return {
          icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
          label: "Sent",
          color: "bg-green-100 text-green-800"
        };
      case "pending":
        return {
          icon: <ClockIcon className="w-5 h-5 text-yellow-500" />,
          label: "Pending",
          color: "bg-yellow-100 text-yellow-800"
        };
      case "failed":
        return {
          icon: <XCircleIcon className="w-5 h-5 text-red-500" />,
          label: "Failed",
          color: "bg-red-100 text-red-800"
        };
      default:
        return {
          icon: <MessageSquareIcon className="w-5 h-5 text-gray-500" />,
          label: "Unknown",
          color: "bg-gray-100 text-gray-800"
        };
    }
  };
  
  // Calculate summary statistics
  const totalBills = whatsappBillData.length;
  const sentBills = whatsappBillData.filter(bill => bill.status === "sent").length;
  const pendingBills = whatsappBillData.filter(bill => bill.status === "pending").length;
  const failedBills = whatsappBillData.filter(bill => bill.status === "failed").length;
  
  const totalAmount = whatsappBillData.reduce((sum, bill) => {
    return sum + parseFloat(bill.amount.replace("₹", "").replace(",", ""));
  }, 0);
  
  const sentAmount = whatsappBillData
    .filter(bill => bill.status === "sent")
    .reduce((sum, bill) => {
      return sum + parseFloat(bill.amount.replace("₹", "").replace(",", ""));
    }, 0);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">WhatsApp Bills</h1>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50">
            <RefreshCwIcon className="h-5 w-5 mr-2" />
            Refresh
          </button>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
            <SendIcon className="h-5 w-5 mr-2" />
            Send New Bill
          </button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Total Bills</h3>
            <MessageSquareIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{totalBills}</p>
            <p className="ml-2 text-sm text-gray-500">bills</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Sent</h3>
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{sentBills}</p>
            <p className="ml-2 text-sm text-gray-500">bills</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">₹{sentAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Pending</h3>
            <ClockIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{pendingBills}</p>
            <p className="ml-2 text-sm text-gray-500">bills</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">
              ₹{whatsappBillData
                .filter(bill => bill.status === "pending")
                .reduce((sum, bill) => {
                  return sum + parseFloat(bill.amount.replace("₹", "").replace(",", ""));
                }, 0)
                .toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Failed</h3>
            <XCircleIcon className="h-5 w-5 text-red-500" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{failedBills}</p>
            <p className="ml-2 text-sm text-gray-500">bills</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">
              ₹{whatsappBillData
                .filter(bill => bill.status === "failed")
                .reduce((sum, bill) => {
                  return sum + parseFloat(bill.amount.replace("₹", "").replace(",", ""));
                }, 0)
                .toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
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
              placeholder="Search by ID, invoice ID, customer, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <div className="w-40">
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
            
            <div className="w-40">
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
      
      {/* WhatsApp Bills Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
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
              {filteredBills.map((bill) => {
                const statusInfo = getStatusInfo(bill.status);
                return (
                  <tr key={bill.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{bill.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/store-panel/billing/invoices`} className="text-sm text-primary-600 hover:text-primary-900">
                        {bill.invoiceId}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{bill.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{bill.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {bill.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {bill.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                      {bill.status === "sent" && bill.readAt && (
                        <div className="mt-1 text-xs text-gray-500">
                          Read at {bill.readAt}
                        </div>
                      )}
                      {bill.status === "failed" && bill.error && (
                        <div className="mt-1 text-xs text-red-500">
                          {bill.error}
                        </div>
                      )}
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
                              <p>Print Bill</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        {bill.status === "pending" && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-green-600 hover:text-green-900">
                                  <SendIcon className="h-5 w-5" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Send Now</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                        
                        {bill.status === "failed" && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-blue-600 hover:text-blue-900">
                                  <RefreshCwIcon className="h-5 w-5" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Retry Sending</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
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