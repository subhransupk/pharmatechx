"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  SaveIcon,
  ShieldIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  CheckIcon,
  XIcon,
  KeyIcon,
  LockIcon,
  UnlockIcon
} from "lucide-react";

// Permission category type
interface PermissionCategory {
  id: string;
  name: string;
  permissions: Permission[];
}

// Permission type
interface Permission {
  id: string;
  name: string;
  description: string;
}

// Role type
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isDefault?: boolean;
  isSystem?: boolean;
}

// Sample permission categories
const permissionCategories: PermissionCategory[] = [
  {
    id: "inventory",
    name: "Inventory Management",
    permissions: [
      { id: "inventory:read", name: "View Inventory", description: "Can view inventory items and stock levels" },
      { id: "inventory:write", name: "Manage Inventory", description: "Can add, edit, and update inventory items" },
      { id: "inventory:delete", name: "Delete Inventory", description: "Can remove inventory items from the system" }
    ]
  },
  {
    id: "sales",
    name: "Sales & Billing",
    permissions: [
      { id: "sales:read", name: "View Sales", description: "Can view sales records and transactions" },
      { id: "sales:write", name: "Process Sales", description: "Can create new sales and process payments" },
      { id: "sales:refund", name: "Process Refunds", description: "Can process refunds and returns" },
      { id: "sales:reports", name: "View Sales Reports", description: "Can access and export sales reports" }
    ]
  },
  {
    id: "prescriptions",
    name: "Prescriptions",
    permissions: [
      { id: "prescriptions:read", name: "View Prescriptions", description: "Can view patient prescriptions" },
      { id: "prescriptions:write", name: "Manage Prescriptions", description: "Can create and update prescriptions" },
      { id: "prescriptions:approve", name: "Approve Prescriptions", description: "Can approve and validate prescriptions" }
    ]
  },
  {
    id: "staff",
    name: "Staff Management",
    permissions: [
      { id: "staff:read", name: "View Staff", description: "Can view staff accounts and details" },
      { id: "staff:write", name: "Manage Staff", description: "Can create and edit staff accounts" },
      { id: "staff:delete", name: "Delete Staff", description: "Can remove staff accounts" }
    ]
  },
  {
    id: "settings",
    name: "System Settings",
    permissions: [
      { id: "settings:read", name: "View Settings", description: "Can view system settings" },
      { id: "settings:write", name: "Manage Settings", description: "Can modify system settings" },
      { id: "settings:advanced", name: "Advanced Settings", description: "Can access and modify advanced system settings" }
    ]
  }
];

// Sample roles
const initialRoles: Role[] = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full access to all features and settings",
    permissions: ["all"],
    isSystem: true
  },
  {
    id: "manager",
    name: "Store Manager",
    description: "Can manage inventory, sales, and staff schedules",
    permissions: ["inventory:read", "inventory:write", "sales:read", "sales:write", "sales:reports", "staff:read", "settings:read"],
    isDefault: true
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    description: "Can dispense medications and manage prescriptions",
    permissions: ["inventory:read", "prescriptions:read", "prescriptions:write", "prescriptions:approve", "sales:read", "sales:write"]
  },
  {
    id: "cashier",
    name: "Cashier",
    description: "Can process sales and handle customer payments",
    permissions: ["sales:read", "sales:write", "inventory:read"]
  },
  {
    id: "inventory",
    name: "Inventory Clerk",
    description: "Can manage and update inventory",
    permissions: ["inventory:read", "inventory:write"]
  }
];

// New role form type
interface RoleForm {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isDefault: boolean;
}

// Initial new role form
const initialRoleForm: RoleForm = {
  id: "",
  name: "",
  description: "",
  permissions: [],
  isDefault: false
};

export default function RolesPermissionsPage() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [isAddingRole, setIsAddingRole] = useState(false);
  const [isEditingRole, setIsEditingRole] = useState<string | null>(null);
  const [roleForm, setRoleForm] = useState<RoleForm>(initialRoleForm);
  const [isLoading, setIsLoading] = useState(false);

  // Handle role form change
  const handleRoleFormChange = (field: keyof RoleForm, value: any) => {
    setRoleForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle permission toggle
  const handlePermissionToggle = (permissionId: string) => {
    setRoleForm(prev => {
      const newPermissions = [...prev.permissions];
      
      if (permissionId === "all") {
        // If toggling "all", either add it or remove it and all other permissions
        if (newPermissions.includes("all")) {
          return { ...prev, permissions: [] };
        } else {
          return { ...prev, permissions: ["all"] };
        }
      } else {
        // If toggling a specific permission
        if (newPermissions.includes("all")) {
          // If "all" is currently selected, remove it and add all individual permissions except the one being toggled
          const allPermissions = permissionCategories.flatMap(category => 
            category.permissions.map(permission => permission.id)
          );
          return { ...prev, permissions: allPermissions.filter(id => id !== permissionId) };
        } else {
          // Normal toggle behavior
          if (newPermissions.includes(permissionId)) {
            return { ...prev, permissions: newPermissions.filter(id => id !== permissionId) };
          } else {
            return { ...prev, permissions: [...newPermissions, permissionId] };
          }
        }
      }
    });
  };

  // Handle category toggle (select/deselect all permissions in a category)
  const handleCategoryToggle = (categoryId: string) => {
    const categoryPermissions = permissionCategories
      .find(category => category.id === categoryId)
      ?.permissions.map(permission => permission.id) || [];
    
    setRoleForm(prev => {
      const currentPermissions = [...prev.permissions];
      
      // Check if all permissions in this category are already selected
      const allSelected = categoryPermissions.every(permId => 
        currentPermissions.includes(permId) || currentPermissions.includes("all")
      );
      
      if (allSelected) {
        // If all are selected, remove them
        return { 
          ...prev, 
          permissions: currentPermissions
            .filter(id => !categoryPermissions.includes(id))
            .filter(id => id !== "all") // Also remove "all" if present
        };
      } else {
        // If not all are selected, add all missing ones
        const newPermissions = [...currentPermissions];
        
        // Remove "all" if present
        const withoutAll = newPermissions.filter(id => id !== "all");
        
        // Add all category permissions that aren't already included
        categoryPermissions.forEach(permId => {
          if (!withoutAll.includes(permId)) {
            withoutAll.push(permId);
          }
        });
        
        return { ...prev, permissions: withoutAll };
      }
    });
  };

  // Check if all permissions in a category are selected
  const isCategoryFullySelected = (categoryId: string): boolean => {
    const categoryPermissions = permissionCategories
      .find(category => category.id === categoryId)
      ?.permissions.map(permission => permission.id) || [];
    
    return categoryPermissions.every(permId => 
      roleForm.permissions.includes(permId) || roleForm.permissions.includes("all")
    );
  };

  // Check if some permissions in a category are selected
  const isCategoryPartiallySelected = (categoryId: string): boolean => {
    const categoryPermissions = permissionCategories
      .find(category => category.id === categoryId)
      ?.permissions.map(permission => permission.id) || [];
    
    const hasAny = categoryPermissions.some(permId => 
      roleForm.permissions.includes(permId) || roleForm.permissions.includes("all")
    );
    
    return hasAny && !isCategoryFullySelected(categoryId);
  };

  // Handle add/edit role submission
  const handleRoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate a unique ID if adding a new role
    const roleId = isEditingRole || `role-${Date.now()}`;
    
    // Create the new role object
    const newRole: Role = {
      id: roleId,
      name: roleForm.name,
      description: roleForm.description,
      permissions: roleForm.permissions,
      isDefault: roleForm.isDefault
    };
    
    // Simulate API call
    setTimeout(() => {
      if (isEditingRole) {
        // Update existing role
        setRoles(prev => prev.map(role => 
          role.id === isEditingRole ? newRole : role
        ));
        
        // If this role is set as default, update other roles
        if (newRole.isDefault) {
          setRoles(prev => prev.map(role => 
            role.id !== isEditingRole ? { ...role, isDefault: false } : role
          ));
        }
      } else {
        // Add new role
        setRoles(prev => [...prev, newRole]);
        
        // If this role is set as default, update other roles
        if (newRole.isDefault) {
          setRoles(prev => prev.map(role => 
            role.id !== roleId ? { ...role, isDefault: false } : role
          ));
        }
      }
      
      // Reset form and state
      setRoleForm(initialRoleForm);
      setIsAddingRole(false);
      setIsEditingRole(null);
      setIsLoading(false);
      
      // Show success message
      alert(`Role "${newRole.name}" ${isEditingRole ? 'updated' : 'created'} successfully!`);
    }, 1000);
  };

  // Handle role deletion
  const handleDeleteRole = (roleId: string) => {
    const roleToDelete = roles.find(role => role.id === roleId);
    
    if (roleToDelete?.isSystem) {
      alert("System roles cannot be deleted.");
      return;
    }
    
    if (confirm(`Are you sure you want to delete the "${roleToDelete?.name}" role? This action cannot be undone.`)) {
      setRoles(prev => prev.filter(role => role.id !== roleId));
    }
  };

  // Handle edit role
  const handleEditRole = (roleId: string) => {
    const roleToEdit = roles.find(role => role.id === roleId);
    
    if (roleToEdit) {
      setRoleForm({
        id: roleToEdit.id,
        name: roleToEdit.name,
        description: roleToEdit.description,
        permissions: [...roleToEdit.permissions],
        isDefault: !!roleToEdit.isDefault
      });
      
      setIsEditingRole(roleId);
      setIsAddingRole(true);
    }
  };

  // Handle setting a role as default
  const handleSetDefaultRole = (roleId: string) => {
    setRoles(prev => prev.map(role => ({
      ...role,
      isDefault: role.id === roleId
    })));
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
          <h1 className="text-2xl font-bold text-gray-900">Roles & Permissions</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create and manage role-based permissions for staff access
          </p>
        </div>
        <button
          onClick={() => {
            setRoleForm(initialRoleForm);
            setIsEditingRole(null);
            setIsAddingRole(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Role
        </button>
      </div>

      {/* Add/Edit role form */}
      {isAddingRole && (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <KeyIcon className="h-5 w-5 mr-2 text-primary-500" />
              {isEditingRole ? 'Edit Role' : 'Add New Role'}
            </h2>
            <button 
              onClick={() => {
                setIsAddingRole(false);
                setIsEditingRole(null);
              }}
              className="text-gray-400 hover:text-gray-500"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          
          <form onSubmit={handleRoleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Role Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={roleForm.name}
                  onChange={(e) => handleRoleFormChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter role name"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <input
                  id="description"
                  type="text"
                  required
                  value={roleForm.description}
                  onChange={(e) => handleRoleFormChange("description", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter role description"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-md font-medium text-gray-900">Permissions</h3>
                <div className="ml-auto flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={roleForm.permissions.includes("all")}
                      onChange={() => handlePermissionToggle("all")}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      All Permissions
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {permissionCategories.map((category, index) => (
                  <div key={category.id} className={`${index > 0 ? 'border-t border-gray-200' : ''}`}>
                    <div 
                      className="bg-gray-50 px-4 py-3 flex items-center cursor-pointer hover:bg-gray-100"
                      onClick={() => handleCategoryToggle(category.id)}
                    >
                      <div className="mr-3">
                        <input
                          type="checkbox"
                          checked={isCategoryFullySelected(category.id)}
                          readOnly
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          style={{ 
                            opacity: isCategoryPartiallySelected(category.id) ? 0.5 : 1 
                          }}
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">{category.name}</h4>
                    </div>
                    
                    <div className="px-4 py-2 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.permissions.map(permission => (
                          <div key={permission.id} className="flex items-start py-1">
                            <div className="flex items-center h-5">
                              <input
                                id={permission.id}
                                type="checkbox"
                                checked={roleForm.permissions.includes(permission.id) || roleForm.permissions.includes("all")}
                                onChange={() => handlePermissionToggle(permission.id)}
                                disabled={roleForm.permissions.includes("all")}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor={permission.id} className="font-medium text-gray-700">
                                {permission.name}
                              </label>
                              <p className="text-gray-500">{permission.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              <input
                id="isDefault"
                type="checkbox"
                checked={roleForm.isDefault}
                onChange={(e) => handleRoleFormChange("isDefault", e.target.checked)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="isDefault" className="ml-2 block text-sm text-gray-700">
                Set as default role for new staff members
              </label>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsAddingRole(false);
                  setIsEditingRole(null);
                }}
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
                    {isEditingRole ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    <SaveIcon className="h-4 w-4 mr-2" />
                    {isEditingRole ? 'Update Role' : 'Create Role'}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Roles list */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
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
              {roles.map(role => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <ShieldIcon className="h-5 w-5 text-primary-500 mr-2" />
                      <div className="text-sm font-medium text-gray-900">{role.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{role.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.includes("all") ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          All Permissions
                        </span>
                      ) : (
                        role.permissions.slice(0, 3).map(permId => {
                          // Find the permission details
                          let permName = permId;
                          for (const category of permissionCategories) {
                            const perm = category.permissions.find(p => p.id === permId);
                            if (perm) {
                              permName = perm.name;
                              break;
                            }
                          }
                          
                          return (
                            <span key={permId} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {permName}
                            </span>
                          );
                        })
                      )}
                      
                      {!role.permissions.includes("all") && role.permissions.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{role.permissions.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {role.isSystem && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                          System
                        </span>
                      )}
                      {role.isDefault && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Default
                        </span>
                      )}
                      {!role.isSystem && !role.isDefault && (
                        <button
                          onClick={() => handleSetDefaultRole(role.id)}
                          className="text-xs text-primary-600 hover:text-primary-700"
                        >
                          Set as Default
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditRole(role.id)}
                        className="text-primary-600 hover:text-primary-900"
                        disabled={role.isSystem}
                        title={role.isSystem ? "System roles cannot be edited" : "Edit role"}
                      >
                        <EditIcon className={`h-5 w-5 ${role.isSystem ? 'opacity-50 cursor-not-allowed' : ''}`} />
                      </button>
                      <button
                        onClick={() => handleDeleteRole(role.id)}
                        className="text-red-600 hover:text-red-900"
                        disabled={role.isSystem}
                        title={role.isSystem ? "System roles cannot be deleted" : "Delete role"}
                      >
                        <TrashIcon className={`h-5 w-5 ${role.isSystem ? 'opacity-50 cursor-not-allowed' : ''}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Information section */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <LockIcon className="h-5 w-5 mr-2 text-primary-500" />
          About Roles & Permissions
        </h2>
        
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            <strong>Roles</strong> define what actions staff members can perform in the system. Each role has a set of permissions that determine access levels.
          </p>
          <p>
            <strong>System roles</strong> (like Administrator) cannot be edited or deleted as they are essential for system functionality.
          </p>
          <p>
            <strong>Default role</strong> is automatically assigned to new staff members when they are created.
          </p>
          <p>
            <strong>Permissions</strong> are grouped by category and control access to specific features and actions in the system.
          </p>
        </div>
      </div>
    </div>
  );
} 