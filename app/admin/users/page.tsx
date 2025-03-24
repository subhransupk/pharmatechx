"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { MoreHorizontal, Search, Filter, UserPlus } from "lucide-react";

// Mock data - replace with actual data from your backend
const users = [
  {
    id: "USR001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-03-15 14:30",
    department: "Management",
    store: "HealthCare Pharmacy",
  },
  {
    id: "USR002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Store Manager",
    status: "Active",
    lastLogin: "2024-03-15 13:45",
    department: "Operations",
    store: "MediPlus",
  },
  {
    id: "USR003",
    name: "Mike Johnson",
    email: "mike.j@example.com",
    role: "Pharmacist",
    status: "Inactive",
    lastLogin: "2024-03-14 09:15",
    department: "Pharmacy",
    store: "PharmaCare",
  },
];

export default function UsersPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
        <Button 
          onClick={() => router.push("/admin/users/new")}
          className="bg-green-500 hover:bg-green-600 text-black font-medium"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="store manager">Store Manager</SelectItem>
            <SelectItem value="pharmacist">Pharmacist</SelectItem>
            <SelectItem value="staff">Staff</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>{user.store}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Inactive"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
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
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Deactivate User
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