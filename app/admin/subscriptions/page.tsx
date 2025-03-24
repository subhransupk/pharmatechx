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
import { MoreHorizontal, Search, Filter, Plus } from "lucide-react";

// Mock data - replace with actual data from your backend
const subscriptions = [
  {
    id: "SUB001",
    storeName: "HealthCare Pharmacy",
    plan: "Professional",
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    amount: "$99.99",
    paymentStatus: "Paid",
  },
  {
    id: "SUB002",
    storeName: "MediPlus",
    plan: "Enterprise",
    status: "Active",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    amount: "$199.99",
    paymentStatus: "Paid",
  },
  {
    id: "SUB003",
    storeName: "PharmaCare",
    plan: "Basic",
    status: "Expired",
    startDate: "2023-12-01",
    endDate: "2024-01-31",
    amount: "$49.99",
    paymentStatus: "Pending",
  },
];

export default function SubscriptionsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSubscriptions = subscriptions.filter((subscription) => {
    const matchesSearch = subscription.storeName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || subscription.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Subscriptions</h1>
        <Button 
          onClick={() => router.push("/admin/subscriptions/new")}
          className="bg-green-500 hover:bg-green-600 text-black font-medium"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Subscription
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search subscriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subscription ID</TableHead>
              <TableHead>Store Name</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscriptions.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{subscription.id}</TableCell>
                <TableCell>{subscription.storeName}</TableCell>
                <TableCell>{subscription.plan}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      subscription.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : subscription.status === "Expired"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {subscription.status}
                  </span>
                </TableCell>
                <TableCell>{subscription.startDate}</TableCell>
                <TableCell>{subscription.endDate}</TableCell>
                <TableCell>{subscription.amount}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      subscription.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {subscription.paymentStatus}
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
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Subscription</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Cancel Subscription
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