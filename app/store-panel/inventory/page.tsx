"use client";

import { useState } from "react";
import { 
  PlusIcon, 
  SearchIcon, 
  FilterIcon, 
  DownloadIcon,
  AlertTriangleIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  EditIcon,
  Trash2Icon,
  UploadIcon,
  BarcodeIcon,
  CameraIcon,
  SaveIcon,
  XIcon,
  ImageIcon,
  RefreshCwIcon
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for inventory
const inventoryData = [
  {
    id: 1,
    name: "Paracetamol",
    category: "Tablet",
    strength: "500mg",
    batchNumber: "PCM2023-45",
    stock: 120,
    minStock: 50,
    manufacturer: "ABC Pharma",
    expiryDate: "2025-06-15",
    purchaseDate: "2023-06-15",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Amoxicillin",
    category: "Capsule",
    strength: "250mg",
    batchNumber: "AMX2023-78",
    stock: 35,
    minStock: 40,
    manufacturer: "XYZ Healthcare",
    expiryDate: "2024-12-10",
    purchaseDate: "2023-12-10",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Cetirizine",
    category: "Tablet",
    strength: "10mg",
    batchNumber: "CTZ2023-22",
    stock: 200,
    minStock: 30,
    manufacturer: "Wellness Pharma",
    expiryDate: "2025-03-22",
    purchaseDate: "2023-03-22",
    status: "In Stock",
  },
  {
    id: 4,
    name: "Omeprazole",
    category: "Capsule",
    strength: "20mg",
    batchNumber: "OMP2023-15",
    stock: 15,
    minStock: 30,
    manufacturer: "Health Solutions",
    expiryDate: "2024-09-18",
    purchaseDate: "2023-09-18",
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Aspirin",
    category: "Tablet",
    strength: "75mg",
    batchNumber: "ASP2023-90",
    stock: 180,
    minStock: 50,
    manufacturer: "Global Meds",
    expiryDate: "2025-08-30",
    purchaseDate: "2023-08-30",
    status: "In Stock",
  },
  {
    id: 6,
    name: "Ibuprofen",
    category: "Tablet",
    strength: "400mg",
    batchNumber: "IBU2023-65",
    stock: 95,
    minStock: 40,
    manufacturer: "ABC Pharma",
    expiryDate: "2025-05-12",
    purchaseDate: "2023-05-12",
    status: "In Stock",
  },
  {
    id: 7,
    name: "Metformin",
    category: "Tablet",
    strength: "500mg",
    batchNumber: "MET2023-33",
    stock: 5,
    minStock: 30,
    manufacturer: "Diabetes Care",
    expiryDate: "2024-11-25",
    purchaseDate: "2023-11-25",
    status: "Critical",
  },
  {
    id: 8,
    name: "Atorvastatin",
    category: "Tablet",
    strength: "10mg",
    batchNumber: "ATV2023-42",
    stock: 110,
    minStock: 40,
    manufacturer: "Heart Health",
    expiryDate: "2025-02-08",
    purchaseDate: "2023-02-08",
    status: "In Stock",
  },
  {
    id: 9,
    name: "Vitamin D3",
    category: "Tablet",
    strength: "1000 IU",
    batchNumber: "VITD2023-55",
    stock: 0,
    minStock: 20,
    manufacturer: "Wellness Pharma",
    expiryDate: "2025-07-20",
    purchaseDate: "2023-07-20",
    status: "Out of Stock",
  },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  
  // Filter inventory based on search term and status
  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.batchNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  // Get unique statuses for filter dropdown
  const statuses = [...new Set(inventoryData.map(item => item.status))];
  
  // Calculate summary stats
  const totalItems = inventoryData.length;
  const lowStockItems = inventoryData.filter(item => item.status === "Low Stock").length;
  const criticalItems = inventoryData.filter(item => item.status === "Critical").length;
  const expiringItems = inventoryData.filter(item => {
    const expiryDate = new Date(item.expiryDate);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 90; // Expiring in 90 days
  }).length;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        <div className="flex space-x-2">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export
          </button>
          <Link href="/store-panel/inventory/restock" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Stock
          </Link>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard 
          title="Total Items" 
          value={totalItems.toString()} 
          icon={<div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
            <PlusIcon className="h-6 w-6" />
          </div>}
        />
        <SummaryCard 
          title="Low Stock Items" 
          value={lowStockItems.toString()} 
          icon={<div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
            <AlertTriangleIcon className="h-6 w-6" />
          </div>}
        />
        <SummaryCard 
          title="Critical Stock" 
          value={criticalItems.toString()} 
          icon={<div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <AlertTriangleIcon className="h-6 w-6" />
          </div>}
        />
        <SummaryCard 
          title="Expiring Soon" 
          value={expiringItems.toString()} 
          icon={<div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <ClockIcon className="h-6 w-6" />
          </div>}
        />
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
              placeholder="Search by medicine name or batch number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <div className="w-48">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-50">
              <FilterIcon className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medicine
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batch Number
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Manufacturer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
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
              {filteredInventory.map((item) => {
                // Calculate days until expiry
                const expiryDate = new Date(item.expiryDate);
                const today = new Date();
                const diffTime = expiryDate.getTime() - today.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                // Determine status color
                let statusColor = "";
                switch(item.status) {
                  case "In Stock":
                    statusColor = "bg-green-100 text-green-800";
                    break;
                  case "Low Stock":
                    statusColor = "bg-amber-100 text-amber-800";
                    break;
                  case "Critical":
                    statusColor = "bg-red-100 text-red-800";
                    break;
                  default:
                    statusColor = "bg-gray-100 text-gray-800";
                }
                
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-500">{item.category} • {item.strength}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.batchNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`text-sm font-medium ${item.stock < item.minStock ? 'text-red-600' : 'text-gray-900'}`}>
                          {item.stock}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">/ {item.minStock} min</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.manufacturer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {item.expiryDate.split('-').reverse().join('/')}
                      </div>
                      <div className={`text-xs ${diffDays <= 30 ? 'text-red-600' : diffDays <= 90 ? 'text-amber-600' : 'text-gray-500'}`}>
                        {diffDays <= 0 ? 'Expired' : `${diffDays} days left`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-green-600 hover:text-green-900 p-1 rounded-full hover:bg-green-50">
                                <ArrowUpIcon className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Increase Stock</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50">
                                <ArrowDownIcon className="h-4 w-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Decrease Stock</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredInventory.length}</span> of{" "}
                <span className="font-medium">{filteredInventory.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function SummaryCard({ title, value, icon }: SummaryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
} 