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
  CreditCardIcon,
  WalletIcon,
  BanknoteIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  CalendarIcon
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for payments
const paymentData = [
  {
    id: "PAY-2023-001",
    orderId: "ORD-2023-001",
    customer: "John Doe",
    date: "2023-06-15",
    amount: "₹1,250.00",
    status: "completed",
    paymentMethod: "Credit Card",
    transactionId: "TXN123456789",
  },
  {
    id: "PAY-2023-002",
    orderId: "ORD-2023-002",
    customer: "Jane Smith",
    date: "2023-06-14",
    amount: "₹850.50",
    status: "completed",
    paymentMethod: "UPI",
    transactionId: "TXN987654321",
  },
  {
    id: "PAY-2023-003",
    orderId: "ORD-2023-003",
    customer: "Robert Johnson",
    date: "2023-06-13",
    amount: "₹2,100.75",
    status: "completed",
    paymentMethod: "Cash",
    transactionId: "CASH-2023-003",
  },
  {
    id: "PAY-2023-004",
    orderId: "ORD-2023-004",
    customer: "Emily Davis",
    date: "2023-06-12",
    amount: "₹750.25",
    status: "failed",
    paymentMethod: "Debit Card",
    transactionId: "TXN456789123",
  },
  {
    id: "PAY-2023-005",
    orderId: "ORD-2023-005",
    customer: "Michael Wilson",
    date: "2023-06-11",
    amount: "₹1,500.00",
    status: "completed",
    paymentMethod: "Credit Card",
    transactionId: "TXN789123456",
  },
  {
    id: "PAY-2023-006",
    orderId: "ORD-2023-006",
    customer: "Sarah Brown",
    date: "2023-06-10",
    amount: "₹950.00",
    status: "pending",
    paymentMethod: "UPI",
    transactionId: "TXN321654987",
  },
  {
    id: "PAY-2023-007",
    orderId: "ORD-2023-007",
    customer: "David Miller",
    date: "2023-06-09",
    amount: "₹1,800.50",
    status: "completed",
    paymentMethod: "Cash",
    transactionId: "CASH-2023-007",
  },
  {
    id: "PAY-2023-008",
    orderId: "ORD-2023-008",
    customer: "Lisa Anderson",
    date: "2023-06-08",
    amount: "₹650.75",
    status: "completed",
    paymentMethod: "Credit Card",
    transactionId: "TXN147258369",
  },
  {
    id: "PAY-2023-009",
    orderId: "ORD-2023-009",
    customer: "James Taylor",
    date: "2023-06-07",
    amount: "₹1,350.25",
    status: "refunded",
    paymentMethod: "UPI",
    transactionId: "TXN963852741",
  },
  {
    id: "PAY-2023-010",
    orderId: "ORD-2023-010",
    customer: "Patricia Martinez",
    date: "2023-06-06",
    amount: "₹2,250.00",
    status: "completed",
    paymentMethod: "Cash",
    transactionId: "CASH-2023-010",
  },
];

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("");
  
  // Filter payments based on search term, status, and payment method
  const filteredPayments = paymentData.filter((payment) => {
    const matchesSearch = 
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "" || payment.status === selectedStatus;
    const matchesPaymentMethod = selectedPaymentMethod === "" || payment.paymentMethod === selectedPaymentMethod;
    return matchesSearch && matchesStatus && matchesPaymentMethod;
  });
  
  // Get unique statuses for filter dropdown
  const statuses = [...new Set(paymentData.map(payment => payment.status))];
  
  // Get unique payment methods for filter dropdown
  const paymentMethods = [...new Set(paymentData.map(payment => payment.paymentMethod))];
  
  // Get status icon and color
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "completed":
        return {
          icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
          label: "Completed",
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
      case "refunded":
        return {
          icon: <ArrowDownRightIcon className="w-5 h-5 text-blue-500" />,
          label: "Refunded",
          color: "bg-blue-100 text-blue-800"
        };
      default:
        return {
          icon: <CreditCardIcon className="w-5 h-5 text-gray-500" />,
          label: "Unknown",
          color: "bg-gray-100 text-gray-800"
        };
    }
  };
  
  // Get payment method icon
  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "Credit Card":
        return <CreditCardIcon className="w-5 h-5 text-blue-500" />;
      case "Debit Card":
        return <CreditCardIcon className="w-5 h-5 text-purple-500" />;
      case "UPI":
        return <WalletIcon className="w-5 h-5 text-green-500" />;
      case "Cash":
        return <BanknoteIcon className="w-5 h-5 text-yellow-500" />;
      default:
        return <CreditCardIcon className="w-5 h-5 text-gray-500" />;
    }
  };
  
  // Calculate summary statistics
  const totalPayments = paymentData.length;
  const completedPayments = paymentData.filter(payment => payment.status === "completed").length;
  const pendingPayments = paymentData.filter(payment => payment.status === "pending").length;
  const failedPayments = paymentData.filter(payment => payment.status === "failed").length;
  const refundedPayments = paymentData.filter(payment => payment.status === "refunded").length;
  
  const totalAmount = paymentData.reduce((sum, payment) => {
    return sum + parseFloat(payment.amount.replace("₹", "").replace(",", ""));
  }, 0);
  
  const completedAmount = paymentData
    .filter(payment => payment.status === "completed")
    .reduce((sum, payment) => {
      return sum + parseFloat(payment.amount.replace("₹", "").replace(",", ""));
    }, 0);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50">
            <RefreshCwIcon className="h-5 w-5 mr-2" />
            Refresh
          </button>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
            <ArrowUpRightIcon className="h-5 w-5 mr-2" />
            Record Payment
          </button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Total Payments</h3>
            <CreditCardIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{totalPayments}</p>
            <p className="ml-2 text-sm text-gray-500">transactions</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Completed</h3>
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{completedPayments}</p>
            <p className="ml-2 text-sm text-gray-500">transactions</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">₹{completedAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Pending</h3>
            <ClockIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{pendingPayments}</p>
            <p className="ml-2 text-sm text-gray-500">transactions</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">
              ₹{paymentData
                .filter(payment => payment.status === "pending")
                .reduce((sum, payment) => {
                  return sum + parseFloat(payment.amount.replace("₹", "").replace(",", ""));
                }, 0)
                .toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-gray-500">total amount</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Failed & Refunded</h3>
            <XCircleIcon className="h-5 w-5 text-red-500" />
          </div>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{failedPayments + refundedPayments}</p>
            <p className="ml-2 text-sm text-gray-500">transactions</p>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-900">
              ₹{paymentData
                .filter(payment => payment.status === "failed" || payment.status === "refunded")
                .reduce((sum, payment) => {
                  return sum + parseFloat(payment.amount.replace("₹", "").replace(",", ""));
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
              placeholder="Search by ID, order ID, customer, or transaction ID..."
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
                value={selectedPaymentMethod}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              >
                <option value="">All Methods</option>
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
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
      
      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment ID
                </th>
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
                  Amount
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
              {filteredPayments.map((payment) => {
                const statusInfo = getStatusInfo(payment.status);
                return (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{payment.id}</div>
                      <div className="text-xs text-gray-500">{payment.transactionId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/store-panel/orders`} className="text-sm text-primary-600 hover:text-primary-900">
                        {payment.orderId}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{payment.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getPaymentMethodIcon(payment.paymentMethod)}
                        <span className="ml-2 text-sm text-gray-500">{payment.paymentMethod}</span>
                      </div>
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
                              <p>Print Receipt</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        
                        {payment.status === "pending" && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-green-600 hover:text-green-900">
                                  <CheckCircleIcon className="h-5 w-5" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mark as Paid</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                        
                        {payment.status === "failed" && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-blue-600 hover:text-blue-900">
                                  <RefreshCwIcon className="h-5 w-5" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Retry Payment</p>
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