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
import { Search, Filter, MoreVertical, Plus, Eye, Edit, CreditCard, Ban } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    registeredDate: "2024-03-15",
    location: "Los Angeles",
  },
  {
    id: 3,
    name: "PharmaCare",
    owner: "Robert Johnson",
    email: "robert@pharmacare.com",
    phone: "+1122334455",
    status: "active",
    subscription: "premium",
    registeredDate: "2024-03-10",
    location: "Chicago",
  },
  {
    id: 4,
    name: "MediPlus",
    owner: "Emily Davis",
    email: "emily@mediplus.com",
    phone: "+5544332211",
    status: "active",
    subscription: "basic",
    registeredDate: "2024-03-05",
    location: "Houston",
  },
];

export default function StoresPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subscriptionFilter, setSubscriptionFilter] = useState("all");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Stores</h1>
        <Button onClick={() => router.push("/admin/stores/new")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Store
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search stores..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
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
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="trial">Trial</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-900">Store Name</TableHead>
              <TableHead className="text-gray-900">Owner</TableHead>
              <TableHead className="text-gray-900">Contact</TableHead>
              <TableHead className="text-gray-900">Status</TableHead>
              <TableHead className="text-gray-900">Subscription</TableHead>
              <TableHead className="text-gray-900">Location</TableHead>
              <TableHead className="text-gray-900">Registered</TableHead>
              <TableHead className="text-right text-gray-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStores.map((store) => (
              <TableRow key={store.id} className="hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{store.name}</TableCell>
                <TableCell className="text-gray-700">{store.owner}</TableCell>
                <TableCell>
                  <div className="text-gray-700">{store.email}</div>
                  <div className="text-sm text-gray-500">{store.phone}</div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      store.status === "active"
                        ? "success"
                        : store.status === "inactive"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {store.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-700 capitalize">{store.subscription}</TableCell>
                <TableCell className="text-gray-700">{store.location}</TableCell>
                <TableCell className="text-gray-700">{store.registeredDate}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4 text-gray-500" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>More Actions</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border border-gray-200">
                      <DropdownMenuItem className="text-gray-700 hover:bg-gray-50">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-700 hover:bg-gray-50">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Store
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-700 hover:bg-gray-50">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Manage Subscription
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 hover:bg-red-50">
                        <Ban className="h-4 w-4 mr-2" />
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