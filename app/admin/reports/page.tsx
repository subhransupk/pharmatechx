"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Search,
  Filter,
  Download,
  BarChart3,
  TrendingUp,
  Users,
  Store,
  Calendar,
  ChevronDown,
} from "lucide-react";

// Mock data - replace with actual data from your backend
const reports = [
  {
    id: "REP001",
    name: "Monthly Revenue Report",
    type: "Revenue",
    date: "2024-03-15",
    status: "Generated",
    size: "2.4 MB",
    generatedBy: "Admin User",
  },
  {
    id: "REP002",
    name: "Subscription Analytics",
    type: "Subscription",
    date: "2024-03-14",
    status: "Generated",
    size: "1.8 MB",
    generatedBy: "Admin User",
  },
  {
    id: "REP003",
    name: "User Activity Report",
    type: "User",
    date: "2024-03-13",
    status: "Processing",
    size: "0 MB",
    generatedBy: "System",
  },
];

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateRange, setDateRange] = useState("all");

  const filteredReports = reports.filter((report) => {
    const matchesSearch = 
      report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || report.type.toLowerCase() === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
          <Button>
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">$24,567.89</p>
          <p className="text-sm text-green-600">+12.5% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
            <Users className="h-4 w-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
          <p className="text-sm text-green-600">+8.2% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Active Stores</h3>
            <Store className="h-4 w-4 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">89</p>
          <p className="text-sm text-green-600">+5.7% from last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
            <BarChart3 className="h-4 w-4 text-orange-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">3.2%</p>
          <p className="text-sm text-red-600">-0.5% from last month</p>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-500">Date Range:</span>
        </div>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="revenue">Revenue</SelectItem>
            <SelectItem value="subscription">Subscription</SelectItem>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="store">Store</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Reports Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date Generated</TableHead>
              <TableHead>Generated By</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.id}</TableCell>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.generatedBy}</TableCell>
                <TableCell>{report.size}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      report.status === "Generated"
                        ? "bg-green-100 text-green-800"
                        : report.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                      >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Report</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 