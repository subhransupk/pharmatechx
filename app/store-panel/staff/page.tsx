"use client";

import { useState } from "react";
import { 
  PlusIcon, 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon,
  UserPlusIcon,
  ClockIcon,
  CalendarIcon,
  DollarSignIcon,
  StarIcon,
  UserIcon,
  EditIcon,
  Trash2Icon,
  MoreHorizontalIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CheckIcon,
  XIcon,
  ShieldIcon,
  MailIcon,
  PhoneIcon,
  KeyIcon,
  ChevronRightIcon
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for staff members
const staffData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Pharmacist",
    email: "rajesh@example.com",
    phone: "+91 98765 43210",
    joinDate: "2022-05-15",
    status: "Active",
    attendance: "Present",
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Cashier",
    email: "priya@example.com",
    phone: "+91 87654 32109",
    joinDate: "2022-08-10",
    status: "Active",
    attendance: "Present",
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Manager",
    email: "amit@example.com",
    phone: "+91 76543 21098",
    joinDate: "2021-11-05",
    status: "Active",
    attendance: "Present",
    image: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Delivery Boy",
    email: "neha@example.com",
    phone: "+91 65432 10987",
    joinDate: "2023-01-20",
    status: "On Leave",
    attendance: "Absent",
    image: "/placeholder-user.jpg"
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Pharmacist",
    email: "vikram@example.com",
    phone: "+91 54321 09876",
    joinDate: "2022-03-12",
    status: "Active",
    attendance: "Late",
    image: "/placeholder-user.jpg"
  }
];

export default function StaffManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Filter staff based on search term and filters
  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.phone.includes(searchTerm);
    
    const matchesRole = filterRole ? staff.role === filterRole : true;
    const matchesStatus = filterStatus ? staff.status === filterStatus : true;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
        <div className="flex items-center space-x-2">
          <Link href="/store-panel/staff/add" className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <UserPlusIcon className="h-4 w-4" />
            Add New Staff
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Staff</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">5</h3>
            </div>
            <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-primary-600" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <span className="text-green-600 font-medium">+2 new</span> in last 30 days
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Present Today</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">4</h3>
            </div>
            <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <span className="text-red-600 font-medium">1 absent</span> today
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">On Leave</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1</h3>
            </div>
            <div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <span className="text-amber-600 font-medium">2 pending</span> leave requests
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Salary Due</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">₹45,000</h3>
            </div>
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
              <DollarSignIcon className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <span className="text-blue-600 font-medium">Next payout:</span> 30th March
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Link href="/store-panel/staff/attendance" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-primary-200 hover:shadow transition-all flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center">
            <ClockIcon className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Attendance</h3>
            <p className="text-xs text-gray-500">Manage daily attendance</p>
          </div>
        </Link>

        <Link href="/store-panel/staff/salary" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-primary-200 hover:shadow transition-all flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center">
            <DollarSignIcon className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Salary & Payroll</h3>
            <p className="text-xs text-gray-500">Process payments</p>
          </div>
        </Link>

        <Link href="/store-panel/staff/performance" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-primary-200 hover:shadow transition-all flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center">
            <StarIcon className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Performance</h3>
            <p className="text-xs text-gray-500">Reviews & ratings</p>
          </div>
        </Link>

        <Link href="/store-panel/staff/resignation" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-primary-200 hover:shadow transition-all flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center">
            <XCircleIcon className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Resignation</h3>
            <p className="text-xs text-gray-500">Process exit formalities</p>
          </div>
        </Link>
      </div>

      {/* Staff List */}
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
                placeholder="Search staff by name, email or phone..."
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
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Suspended">Suspended</option>
              </select>
              <button className="btn-secondary text-sm py-2 px-3 flex items-center gap-1">
                <DownloadIcon className="h-4 w-4" />
                Export
              </button>
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
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Today
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
                          {staff.name.split(' ').map(n => n[0]).join('')}
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
                    <div className="text-sm text-gray-900">{staff.email}</div>
                    <div className="text-sm text-gray-500">{staff.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(staff.joinDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      staff.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      staff.status === 'On Leave' ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      staff.attendance === 'Present' ? 'bg-green-100 text-green-800' : 
                      staff.attendance === 'Late' ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {staff.attendance}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={`/store-panel/staff/edit/${staff.id}`} className="text-primary-600 hover:text-primary-900 p-1">
                              <EditIcon className="h-4 w-4" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit Staff</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-red-600 hover:text-red-900 p-1">
                              <Trash2Icon className="h-4 w-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete Staff</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-gray-500 hover:text-gray-700 p-1">
                              <MoreHorizontalIcon className="h-4 w-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>More Options</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
        
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredStaff.length}</span> of <span className="font-medium">{staffData.length}</span> staff members
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 