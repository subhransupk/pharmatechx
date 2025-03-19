"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  SaveIcon,
  UsersIcon,
  PlusIcon,
  SearchIcon,
  EditIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
  ShieldIcon,
  MailIcon,
  PhoneIcon,
  KeyIcon,
  UserPlusIcon,
  ChevronRightIcon
} from "lucide-react";

// Staff user type
interface StaffUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "active" | "inactive" | "pending";
  lastActive: string;
  avatar?: string;
}

// Role type
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

// Sample roles
const roles: Role[] = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full access to all features and settings",
    permissions: ["all"]
  },
  {
    id: "manager",
    name: "Store Manager",
    description: "Can manage inventory, sales, and staff schedules",
    permissions: ["inventory:read", "inventory:write", "sales:read", "sales:write", "staff:read"]
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    description: "Can dispense medications and manage prescriptions",
    permissions: ["inventory:read", "prescriptions:read", "prescriptions:write"]
  },
  {
    id: "cashier",
    name: "Cashier",
    description: "Can process sales and handle customer payments",
    permissions: ["sales:read", "sales:write"]
  },
  {
    id: "inventory",
    name: "Inventory Clerk",
    description: "Can manage and update inventory",
    permissions: ["inventory:read", "inventory:write"]
  }
];

// Sample staff users
const initialStaffUsers: StaffUser[] = [
  {
    id: "user1",
    name: "Volter Anderson",
    email: "volter@example.com",
    phone: "+91 98765 43210",
    role: "admin",
    status: "active",
    lastActive: "Today at 10:30 AM",
    avatar: "VA"
  },
  {
    id: "user2",
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 87654 32109",
    role: "pharmacist",
    status: "active",
    lastActive: "Yesterday at 5:45 PM",
    avatar: "PS"
  },
  {
    id: "user3",
    name: "Rahul Patel",
    email: "rahul@example.com",
    phone: "+91 76543 21098",
    role: "manager",
    status: "active",
    lastActive: "Today at 9:15 AM",
    avatar: "RP"
  },
  {
    id: "user4",
    name: "Ananya Singh",
    email: "ananya@example.com",
    phone: "+91 65432 10987",
    role: "cashier",
    status: "inactive",
    lastActive: "3 days ago",
    avatar: "AS"
  },
  {
    id: "user5",
    name: "Vikram Mehta",
    email: "vikram@example.com",
    phone: "+91 54321 09876",
    role: "inventory",
    status: "pending",
    lastActive: "Never",
    avatar: "VM"
  }
];

// New user form type
interface NewUserForm {
  name: string;
  email: string;
  phone: string;
  role: string;
  sendInvite: boolean;
}

// Initial new user form
const initialNewUserForm: NewUserForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  sendInvite: true
};

export default function StaffAccountsPage() {
  const [staffUsers, setStaffUsers] = useState<StaffUser[]>(initialStaffUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState<NewUserForm>(initialNewUserForm);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter staff users based on search query
  const filteredUsers = staffUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle new user form change
  const handleNewUserChange = (field: keyof NewUserForm, value: any) => {
    setNewUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle add new user
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newStaffUser: StaffUser = {
        id: `user${staffUsers.length + 1}`,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        status: "pending",
        lastActive: "Never",
        avatar: newUser.name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      
      setStaffUsers(prev => [...prev, newStaffUser]);
      setNewUser(initialNewUserForm);
      setIsAddingUser(false);
      setIsLoading(false);
      
      // Show success message
      alert(`Staff account for ${newUser.name} created successfully! ${newUser.sendInvite ? 'An invitation email has been sent.' : ''}`);
    }, 1000);
  };

  // Handle user status change
  const handleStatusChange = (userId: string, newStatus: "active" | "inactive" | "pending") => {
    setStaffUsers(prev => 
      prev.map(user => 
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  // Handle user role change
  const handleRoleChange = (userId: string, newRole: string) => {
    setStaffUsers(prev => 
      prev.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  // Handle user deletion
  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      setStaffUsers(prev => prev.filter(user => user.id !== userId));
    }
  };

  // Get role name by ID
  const getRoleName = (roleId: string): string => {
    const role = roles.find(r => r.id === roleId);
    return role ? role.name : roleId;
  };

  // Get status badge class
  const getStatusBadgeClass = (status: string): string => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Link 
          href="/store-panel/settings" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Settings
        </Link>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Accounts</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage staff accounts and access permissions
          </p>
        </div>
        <button
          onClick={() => setIsAddingUser(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <UserPlusIcon className="h-4 w-4 mr-2" />
          Add Staff
        </button>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Add new user form */}
      {isAddingUser && (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <UserPlusIcon className="h-5 w-5 mr-2 text-primary-500" />
              Add New Staff Member
            </h2>
            <button 
              onClick={() => setIsAddingUser(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          
          <form onSubmit={handleAddUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={newUser.name}
                  onChange={(e) => handleNewUserChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) => handleNewUserChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={newUser.phone}
                  onChange={(e) => handleNewUserChange("phone", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <select
                  id="role"
                  required
                  value={newUser.role}
                  onChange={(e) => handleNewUserChange("role", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a role</option>
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <input
                id="sendInvite"
                type="checkbox"
                checked={newUser.sendInvite}
                onChange={(e) => handleNewUserChange("sendInvite", e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="sendInvite" className="ml-2 block text-sm text-gray-700">
                Send invitation email to set up account
              </label>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setIsAddingUser(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  <>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    Create Account
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Staff users list */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff Member
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No staff members found matching your search.
                  </td>
                </tr>
              ) : (
                filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                          {user.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center">
                        <MailIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {user.email}
                      </div>
                      {user.phone && (
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <PhoneIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {user.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingUserId === user.id ? (
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.id, e.target.value)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        >
                          {roles.map(role => (
                            <option key={role.id} value={role.id}>
                              {role.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="flex items-center">
                          <ShieldIcon className="h-4 w-4 mr-1.5 text-primary-500" />
                          <span className="text-sm text-gray-900">{getRoleName(user.role)}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingUserId === user.id ? (
                        <select
                          value={user.status}
                          onChange={(e) => handleStatusChange(user.id, e.target.value as any)}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="pending">Pending</option>
                        </select>
                      ) : (
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(user.status)}`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {editingUserId === user.id ? (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => setEditingUserId(null)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => setEditingUserId(null)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <XIcon className="h-5 w-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => setEditingUserId(user.id)}
                            className="text-primary-600 hover:text-primary-900"
                          >
                            <EditIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Role descriptions */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <KeyIcon className="h-5 w-5 mr-2 text-primary-500" />
          Role Descriptions
        </h2>
        
        <div className="space-y-4">
          {roles.map(role => (
            <div key={role.id} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-md font-medium text-gray-900">{role.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{role.description}</p>
              <div className="mt-2">
                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions:</h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {role.permissions.map(permission => (
                    <span key={permission} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {permission === "all" ? "All Permissions" : permission.replace(":", ": ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link
            href="/store-panel/settings/roles"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Manage Roles & Permissions
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 