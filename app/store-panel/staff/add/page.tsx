"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeftIcon,
  SaveIcon,
  XIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  BriefcaseIcon,
  KeyIcon,
  DollarSignIcon,
  ClockIcon,
  InfoIcon
} from "lucide-react";
import Link from "next/link";

export default function AddStaffPage() {
  const router = useRouter();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    dateOfBirth: "",
    joinDate: new Date().toISOString().split('T')[0],
    role: "",
    department: "",
    salaryType: "fixed", // fixed or hourly
    salaryAmount: "",
    workingHours: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    panNumber: "",
    aadharNumber: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    password: "",
    confirmPassword: ""
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    console.log("Adding new staff member:", formData);
    
    // Navigate back to staff list
    router.push("/store-panel/staff");
  };
  
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/store-panel/staff" className="btn-icon">
            <ArrowLeftIcon className="h-4 w-4" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Add New Staff</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/store-panel/staff" className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            <XIcon className="h-4 w-4" />
            Cancel
          </Link>
          <button 
            type="submit" 
            form="add-staff-form"
            className="btn-primary text-sm py-1.5 flex items-center gap-1"
          >
            <SaveIcon className="h-4 w-4" />
            Save Staff
          </button>
        </div>
      </div>

      <form id="add-staff-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2">
            <UserIcon className="h-5 w-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
          </div>
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MailIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <PhoneIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea 
                id="address" 
                rows={2}
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Street address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input 
                  type="text" 
                  id="city" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input 
                  type="text" 
                  id="state" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">PIN Code</label>
                <input 
                  type="text" 
                  id="pincode" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="date" 
                    id="dateOfBirth" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="joinDate" className="block text-sm font-medium text-gray-700">Join Date*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="date" 
                    id="joinDate" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    value={formData.joinDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Employment Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Employment Information</h2>
          </div>
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role*</label>
                <select 
                  id="role" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select role</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Cashier">Cashier</option>
                  <option value="Manager">Manager</option>
                  <option value="Delivery Boy">Delivery Boy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <select 
                  id="department" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select department</option>
                  <option value="Sales">Sales</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Inventory">Inventory</option>
                  <option value="Administration">Administration</option>
                  <option value="Delivery">Delivery</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Salary Type*</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="salaryType" 
                    id="salaryType" 
                    value="fixed" 
                    className="form-radio text-primary-600" 
                    checked={formData.salaryType === "fixed"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-sm text-gray-700">Fixed Salary</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="salaryType" 
                    id="salaryType" 
                    value="hourly" 
                    className="form-radio text-primary-600"
                    checked={formData.salaryType === "hourly"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-sm text-gray-700">Hourly Rate</span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="salaryAmount" className="block text-sm font-medium text-gray-700">
                  {formData.salaryType === "fixed" ? "Monthly Salary*" : "Hourly Rate*"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <DollarSignIcon className="w-4 h-4 text-gray-400" />
                  </div>
                  <input 
                    type="number" 
                    id="salaryAmount" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    placeholder={formData.salaryType === "fixed" ? "Monthly salary amount" : "Hourly rate amount"}
                    value={formData.salaryAmount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {formData.salaryType === "hourly" && (
                <div className="space-y-2">
                  <label htmlFor="workingHours" className="block text-sm font-medium text-gray-700">Working Hours per Week*</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <ClockIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    <input 
                      type="number" 
                      id="workingHours" 
                      className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Hours per week"
                      value={formData.workingHours}
                      onChange={handleChange}
                      required={formData.salaryType === "hourly"}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Bank & ID Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2">
            <InfoIcon className="h-5 w-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Bank & ID Information</h2>
          </div>
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
                <input 
                  type="text" 
                  id="bankName" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Bank name"
                  value={formData.bankName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
                <input 
                  type="text" 
                  id="accountNumber" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Account number"
                  value={formData.accountNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">IFSC Code</label>
                <input 
                  type="text" 
                  id="ifscCode" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="IFSC code"
                  value={formData.ifscCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">PAN Number</label>
                <input 
                  type="text" 
                  id="panNumber" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="PAN number"
                  value={formData.panNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
                <input 
                  type="text" 
                  id="aadharNumber" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Aadhar number"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                <input 
                  type="text" 
                  id="emergencyContactName" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Emergency contact name"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700">Emergency Contact Phone</label>
                <input 
                  type="tel" 
                  id="emergencyContactPhone" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Emergency contact phone"
                  value={formData.emergencyContactPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Account Access */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2">
            <KeyIcon className="h-5 w-5 text-primary-600" />
            <h2 className="text-lg font-semibold text-gray-900">Account Access</h2>
          </div>
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                <input 
                  type="password" 
                  id="password" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password*</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <InfoIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-800">Access Information</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    Staff will receive an email with login instructions. They will be able to access features based on their assigned role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3">
          <Link href="/store-panel/staff" className="btn-secondary py-2 px-4">
            Cancel
          </Link>
          <button type="submit" className="btn-primary py-2 px-4">
            Add Staff
          </button>
        </div>
      </form>
    </div>
  );
} 