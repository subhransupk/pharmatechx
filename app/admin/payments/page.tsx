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
const payments = [
  {
    id: "PAY001",
    storeName: "HealthCare Pharmacy",
    amount: "$99.99",
    date: "2024-03-15",
    status: "Completed",
    method: "Credit Card",
    transactionId: "TRX123456",
  },
  {
    id: "PAY002",
    storeName: "MediPlus",
    amount: "$199.99",
    date: "2024-03-14",
    status: "Pending",
    method: "Bank Transfer",
    transactionId: "TRX123457",
  },
  {
    id: "PAY003",
    storeName: "PharmaCare",
    amount: "$49.99",
    date: "2024-03-13",
    status: "Failed",
    method: "Credit Card",
    transactionId: "TRX123458",
  },
];

export default function PaymentsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = 
      payment.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = 
      statusFilter === "all" || payment.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        <Button 
          onClick={() => router.push("/admin/payments/new")}
          className="bg-green-500 hover:bg-green-600 text-black font-medium"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Payment
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search payments..."
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
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
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
              <TableHead>Payment ID</TableHead>
              <TableHead>Store Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{payment.storeName}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>{payment.transactionId}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      payment.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {payment.status}
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
                      <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                      <DropdownMenuItem>Refund</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Cancel Payment
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