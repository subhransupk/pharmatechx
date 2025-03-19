"use client";

import { useState } from "react";
import { 
  ArrowLeftIcon, 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import Link from "next/link";

// Sample data for staff attendance
const staffData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Pharmacist",
    status: "Present",
    checkInTime: "09:05 AM",
    checkOutTime: "06:10 PM",
    totalHours: "9h 5m",
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Cashier",
    status: "Present",
    checkInTime: "08:55 AM",
    checkOutTime: "06:00 PM",
    totalHours: "9h 5m",
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Manager",
    status: "Present",
    checkInTime: "08:45 AM",
    checkOutTime: "06:30 PM",
    totalHours: "9h 45m",
    image: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Delivery Boy",
    status: "Absent",
    checkInTime: "-",
    checkOutTime: "-",
    totalHours: "-",
    image: "/placeholder-user.jpg"
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Pharmacist",
    status: "Late",
    checkInTime: "10:15 AM",
    checkOutTime: "06:20 PM",
    totalHours: "8h 5m",
    image: "/placeholder-user.jpg"
  }
];

// Generate dates for the calendar
const generateCalendarDates = () => {
  const today = new Date();
  const dates = [];
  
  // Get the first day of the current month
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  
  // Get the last day of the current month
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  // Generate all dates in the current month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    dates.push(date);
  }
  
  return dates;
};

export default function AttendancePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarDates = generateCalendarDates();
  
  // Filter staff based on search term and filters
  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? staff.role === filterRole : true;
    const matchesStatus = filterStatus ? staff.status === filterStatus : true;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // Handle previous month
  const handlePrevMonth = () => {
    const prevMonth = new Date(selectedDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setSelectedDate(prevMonth);
  };

  // Handle next month
  const handleNextMonth = () => {
    const nextMonth = new Date(selectedDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setSelectedDate(nextMonth);
  };

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Check if a date is selected
  const isSelected = (date: Date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/store-panel/staff" className="btn-icon">
            <ArrowLeftIcon className="h-4 w-4" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Staff Attendance</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <DownloadIcon className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Date Selection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Attendance Date</h2>
          </div>
          <div className="text-sm text-gray-500">
            {formatDate(selectedDate)}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
            </button>
            <h3 className="text-md font-medium text-gray-800">
              {selectedDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </h3>
            <button 
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index} className="text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            
            {/* Empty cells for days before the first day of the month */}
            {Array.from({ length: calendarDates[0].getDay() }).map((_, index) => (
              <div key={`empty-${index}`} className="h-10 rounded-md"></div>
            ))}
            
            {/* Calendar days */}
            {calendarDates.map((date, index) => (
              <button
                key={index}
                className={`h-10 rounded-md flex items-center justify-center text-sm ${
                  isSelected(date) 
                    ? 'bg-primary-600 text-white' 
                    : isToday(date)
                      ? 'bg-primary-50 text-primary-600 font-medium'
                      : 'hover:bg-gray-50'
                }`}
                onClick={() => handleDateSelect(date)}
              >
                {date.getDate()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance List */}
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
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check In
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check Out
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Hours
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
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      staff.status === 'Present' ? 'bg-green-100 text-green-800' : 
                      staff.status === 'Late' ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.checkInTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.checkOutTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {staff.totalHours}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {staff.status === 'Absent' ? (
                      <button className="text-primary-600 hover:text-primary-900 font-medium">
                        Mark Present
                      </button>
                    ) : (
                      <button className="text-gray-600 hover:text-gray-900 font-medium">
                        Edit Time
                      </button>
                    )}
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
        
        <div className="p-5 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Present: 3</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                <span className="text-sm text-gray-600">Late: 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-600">Absent: 1</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary text-sm py-1.5 px-3">
                Mark All Present
              </button>
              <button className="btn-primary text-sm py-1.5 px-3">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 