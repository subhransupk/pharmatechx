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
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data - Replace with actual API call
const mockStores = [
  {
    id: 1,
    name: "HealthCare Pharmacy",
    owner: "John Doe",
    email: "john@healthcare.com",
    phone: "+1234567890",
    status: "active",
    subscription: "premium",
    registeredDate: "2024-03-01",
    location: "New York",
  },
  {
    id: 2,
    name: "MediCare Plus",
    owner: "Jane Smith",
    email: "jane@medicare.com",
    phone: "+1987654321",
    status: "inactive",
    subscription: "basic",
    registeredDate: "2024-02-15",
    location: "Los Angeles",
  },
  // Add more mock data as needed
];

export default function StoresPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subscriptionFilter, setSubscriptionFilter] = useState("all");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Stores Management</h1>
        <Button 
          onClick={() => router.push("/admin/stores/new")}
          className="bg-green-500 hover:bg-green-600 text-black font-medium"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Store
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search stores..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
        <Select value={subscriptionFilter} onValueChange={setSubscriptionFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Subscription" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Stores Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Store Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Subscription</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Registered Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStores.map((store) => (
              <TableRow key={store.id}>
                <TableCell className="font-medium">{store.name}</TableCell>
                <TableCell>{store.owner}</TableCell>
                <TableCell>
                  <div>
                    <div>{store.email}</div>
                    <div className="text-sm text-gray-500">{store.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      store.status === "active"
                        ? "success"
                        : store.status === "inactive"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {store.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      store.subscription === "premium"
                        ? "default"
                        : "outline"
                    }
                  >
                    {store.subscription}
                  </Badge>
                </TableCell>
                <TableCell>{store.location}</TableCell>
                <TableCell>{store.registeredDate}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Store</DropdownMenuItem>
                      <DropdownMenuItem>Manage Subscription</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Suspend Store
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