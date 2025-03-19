"use client";

import { useState } from "react";
import { 
  ArrowLeftIcon, 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon,
  DollarSignIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
  FileTextIcon,
  SendIcon
} from "lucide-react";
import Link from "next/link";

// Sample data for staff salary
const salaryData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Pharmacist",
    salaryType: "Fixed",
    baseSalary: 35000,
    workingDays: 22,
    overtime: 5,
    bonus: 2000,
    deductions: 1500,
    netSalary: 35500,
    status: "Paid",
    paymentDate: "2023-03-05",
    bankAccount: "XXXX1234",
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Cashier",
    salaryType: "Fixed",
    baseSalary: 25000,
    workingDays: 22,
    overtime: 0,
    bonus: 0,
    deductions: 1000,
    netSalary: 24000,
    status: "Paid",
    paymentDate: "2023-03-05",
    bankAccount: "XXXX5678",
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Manager",
    salaryType: "Fixed",
    baseSalary: 50000,
    workingDays: 22,
    overtime: 8,
    bonus: 5000,
    deductions: 2500,
    netSalary: 52500,
    status: "Paid",
    paymentDate: "2023-03-05",
    bankAccount: "XXXX9012",
    image: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Delivery Boy",
    salaryType: "Hourly",
    baseSalary: 15000,
    workingDays: 18,
    overtime: 0,
    bonus: 0,
    deductions: 500,
    netSalary: 14500,
    status: "Pending",
    paymentDate: "-",
    bankAccount: "XXXX3456",
    image: "/placeholder-user.jpg"
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Pharmacist",
    salaryType: "Fixed",
    baseSalary: 35000,
    workingDays: 20,
    overtime: 3,
    bonus: 1000,
    deductions: 1500,
    netSalary: 34500,
    status: "Pending",
    paymentDate: "-",
    bankAccount: "XXXX7890",
    image: "/placeholder-user.jpg"
  }
];

export default function SalaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [showSalaryModal, setShowSalaryModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  
  // Filter staff based on search term and filters
  const filteredStaff = salaryData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? staff.role === filterRole : true;
    const matchesStatus = filterStatus ? staff.status === filterStatus : true;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Handle previous month
  const handlePrevMonth = () => {
    const prevMonth = new Date(selectedMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setSelectedMonth(prevMonth);
  };

  // Handle next month
  const handleNextMonth = () => {
    const nextMonth = new Date(selectedMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setSelectedMonth(nextMonth);
  };

  // Open salary details modal
  const openSalaryModal = (staff: any) => {
    setSelectedStaff(staff);
    setShowSalaryModal(true);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/store-panel/staff" className="btn-icon">
            <ArrowLeftIcon className="h-4 w-4" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Salary & Payroll</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            Export
          </button>
          <button className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <DollarSignIcon className="h-4 w-4" />
            Process All Salaries
          </button>
        </div>
      </div>

      {/* Month Selection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Salary Month</h2>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
            </button>
            <h3 className="text-md font-medium text-gray-800">
              {selectedMonth.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </h3>
            <button 
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-blue-600">Total Salary</p>
                <h3 className="text-xl font-bold text-blue-800 mt-1">₹1,61,000</h3>
              </div>
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSignIcon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-green-600">Paid</p>
                <h3 className="text-xl font-bold text-green-800 mt-1">₹1,12,000</h3>
              </div>
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-amber-600">Pending</p>
                <h3 className="text-xl font-bold text-amber-800 mt-1">₹49,000</h3>
              </div>
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                <ClockIcon className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-purple-600">Bonuses</p>
                <h3 className="text-xl font-bold text-purple-800 mt-1">₹8,000</h3>
              </div>
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSignIcon className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Salary List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="search" 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                placeholder="Search staff by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="">All Roles</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Cashier">Cashier</option>
                <option value="Manager">Manager</option>
                <option value="Delivery Boy">Delivery Boy</option>
              </select>
              <select 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Base Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Salary
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
              {filteredStaff.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                          {staff.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        <div className="text-sm text-gray-500">ID: EMP-{staff.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{staff.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{staff.salaryType}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{formatCurrency(staff.baseSalary)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(staff.netSalary)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      staff.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        className="text-primary-600 hover:text-primary-900"
                        onClick={() => openSalaryModal(staff)}
                      >
                        View Details
                      </button>
                      {staff.status === 'Pending' && (
                        <button className="text-green-600 hover:text-green-900 ml-3">
                          Process
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredStaff.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 text-sm">No staff members found matching your filters.</p>
          </div>
        )}
      </div>

      {/* Salary Details Modal */}
      {showSalaryModal && selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Salary Details</h3>
              <button 
                type="button" 
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setShowSalaryModal(false)}
              >
                <XCircleIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  {selectedStaff.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{selectedStaff.name}</h4>
                  <p className="text-sm text-gray-500">{selectedStaff.role} • ID: EMP-{selectedStaff.id.toString().padStart(4, '0')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Salary Month</p>
                  <p className="text-lg font-medium text-gray-900">
                    {selectedMonth.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Payment Status</p>
                  <p className={`text-lg font-medium ${
                    selectedStaff.status === 'Paid' ? 'text-green-600' : 'text-amber-600'
                  }`}>
                    {selectedStaff.status}
                    {selectedStaff.status === 'Paid' && ` on ${selectedStaff.paymentDate}`}
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h5 className="text-sm font-medium text-gray-700 mb-4">Salary Breakdown</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Base Salary ({selectedStaff.salaryType})</span>
                    <span className="text-sm font-medium text-gray-900">{formatCurrency(selectedStaff.baseSalary)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Working Days</span>
                    <span className="text-sm font-medium text-gray-900">{selectedStaff.workingDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Overtime Hours</span>
                    <span className="text-sm font-medium text-gray-900">{selectedStaff.overtime} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bonus</span>
                    <span className="text-sm font-medium text-green-600">+{formatCurrency(selectedStaff.bonus)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Deductions</span>
                    <span className="text-sm font-medium text-red-600">-{formatCurrency(selectedStaff.deductions)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Net Salary</span>
                    <span className="text-sm font-bold text-primary-600">{formatCurrency(selectedStaff.netSalary)}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h5 className="text-sm font-medium text-gray-700 mb-4">Payment Information</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bank Account</span>
                    <span className="text-sm font-medium text-gray-900">{selectedStaff.bankAccount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Payment Method</span>
                    <span className="text-sm font-medium text-gray-900">Bank Transfer</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-100">
              <button 
                type="button" 
                className="btn-secondary py-2 px-4 flex items-center gap-1"
                onClick={() => setShowSalaryModal(false)}
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn-secondary py-2 px-4 flex items-center gap-1"
              >
                <FileTextIcon className="h-4 w-4" />
                Generate Slip
              </button>
              {selectedStaff.status === 'Pending' && (
                <button 
                  type="button" 
                  className="btn-primary py-2 px-4 flex items-center gap-1"
                >
                  <DollarSignIcon className="h-4 w-4" />
                  Process Salary
                </button>
              )}
              {selectedStaff.status === 'Paid' && (
                <button 
                  type="button" 
                  className="btn-primary py-2 px-4 flex items-center gap-1"
                >
                  <SendIcon className="h-4 w-4" />
                  Send Slip
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 