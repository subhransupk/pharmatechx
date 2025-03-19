"use client";

import React from "react";
import { 
  SearchIcon, 
  PlusIcon, 
  MinusIcon, 
  TrashIcon, 
  PrinterIcon,
  SaveIcon,
  UserIcon,
  CalendarIcon,
  CreditCardIcon,
  ReceiptIcon,
  FileTextIcon,
  UploadIcon,
  XIcon,
  ClipboardIcon,
  CheckIcon,
  UserPlusIcon,
  ShoppingCartIcon
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NewSalePage() {
  // State for form values
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  
  // Customer related state
  const [customerType, setCustomerType] = useState("walk-in");
  const [customerSearchQuery, setCustomerSearchQuery] = useState("");
  const [showCustomerSearchResults, setShowCustomerSearchResults] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [newCustomerData, setNewCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  
  // Mock customer data (in a real app, this would come from an API)
  const mockCustomers = [
    { id: 1, name: "Rahul Sharma", phone: "9876543210", email: "rahul@example.com", address: "123 Main St, Delhi" },
    { id: 2, name: "Priya Patel", phone: "8765432109", email: "priya@example.com", address: "456 Park Ave, Mumbai" },
    { id: 3, name: "Amit Kumar", phone: "7654321098", email: "amit@example.com", address: "789 Lake Rd, Bangalore" },
    { id: 4, name: "Sneha Gupta", phone: "6543210987", email: "sneha@example.com", address: "321 Hill St, Chennai" },
  ];
  
  // Filter customers based on search query
  const filteredCustomers = mockCustomers.filter(customer => 
    customer.name.toLowerCase().includes(customerSearchQuery.toLowerCase()) || 
    customer.phone.includes(customerSearchQuery)
  );
  
  // Ref for customer search dropdown
  const searchResultsRef = useRef<HTMLDivElement>(null);
  
  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target as Node)) {
        setShowCustomerSearchResults(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Handle customer selection
  const handleSelectCustomer = (customer: any) => {
    setSelectedCustomer(customer);
    setCustomerSearchQuery(`${customer.name} (${customer.phone})`);
    setShowCustomerSearchResults(false);
  };
  
  // Handle customer type change
  const handleCustomerTypeChange = (type: string) => {
    setCustomerType(type);
    setSelectedCustomer(null);
    setCustomerSearchQuery("");
  };
  
  // Handle new customer form changes
  const handleNewCustomerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewCustomerData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Handle new customer form submission
  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    console.log("Adding new customer:", newCustomerData);
    
    // Create a new customer object
    const newCustomer = {
      id: mockCustomers.length + 1,
      ...newCustomerData
    };
    
    // Select the new customer
    setSelectedCustomer(newCustomer);
    setCustomerSearchQuery(`${newCustomer.name} (${newCustomer.phone})`);
    
    // Close modal and reset form
    setShowAddCustomerModal(false);
    setNewCustomerData({
      name: "",
      phone: "",
      email: "",
      address: ""
    });
  };
  
  // Handle doctor selection
  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDoctor(e.target.value);
  };
  
  // Handle prescription file upload
  const handlePrescriptionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Remove prescription
  const removePrescription = () => {
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
  };
  
  // New doctor form state
  const [newDoctorData, setNewDoctorData] = useState({
    name: "",
    specialization: "",
    phone: "",
    email: "",
    address: ""
  });
  
  // Handle new doctor form changes
  const handleNewDoctorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewDoctorData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Handle new doctor form submission
  const handleAddDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    console.log("Adding new doctor:", newDoctorData);
    
    // Close modal and reset form
    setShowAddDoctorModal(false);
    setNewDoctorData({
      name: "",
      specialization: "",
      phone: "",
      email: "",
      address: ""
    });
    
    // In a real app, you would add the new doctor to the dropdown
    // For now, we'll just simulate it by setting the selected doctor
    setSelectedDoctor("new");
  };
  
  // Add state for cart items with dosage information
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      type: "Tablet",
      brand: "Calpol",
      batch: "BT2023045",
      expiry: "Dec 2024",
      mrp: 25.00,
      quantity: 2,
      discount: 0,
      total: 50.00,
      dosage: "1 tablet twice daily after meals"
    },
    {
      id: 2,
      name: "Azithromycin 500mg",
      type: "Tablet",
      brand: "Zithromax",
      batch: "BT2023032",
      expiry: "Nov 2024",
      mrp: 85.00,
      quantity: 1,
      discount: 5,
      total: 80.75,
      dosage: "1 tablet daily for 3 days"
    }
  ]);
  
  // State for dosage editing
  const [editingDosageForItemId, setEditingDosageForItemId] = useState<number | null>(null);
  const [tempDosage, setTempDosage] = useState("");
  
  // Common dosage templates
  const dosageTemplates = [
    "1 tablet once daily",
    "1 tablet twice daily after meals",
    "1 tablet three times daily after meals",
    "1 tablet at bedtime",
    "1 teaspoon twice daily after meals",
    "2 tablets as needed for pain",
    "Apply to affected area twice daily",
    "1 tablet every 8 hours"
  ];
  
  // Handle dosage change
  const handleDosageChange = (itemId: number, dosage: string) => {
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, dosage } : item
      )
    );
    setEditingDosageForItemId(null);
  };
  
  // Start editing dosage
  const startEditingDosage = (itemId: number, currentDosage: string) => {
    setEditingDosageForItemId(itemId);
    setTempDosage(currentDosage);
  };
  
  // Define types for our data
  type Medicine = {
    id: number;
    name: string;
    type: string;
    brand: string;
    batch: string;
    expiry: string;
    mrp: number;
    stock: number;
  };
  
  type CartItem = {
    id: number;
    name: string;
    type: string;
    brand: string;
    batch: string;
    expiry: string;
    mrp: number;
    quantity: number;
    discount: number;
    total: number;
    dosage: string;
  };
  
  // Add state for medicine search
  const [medicineSearchQuery, setMedicineSearchQuery] = useState("");
  
  // Mock medicine search results (in a real app, this would come from an API)
  const mockMedicines: Medicine[] = [
    {
      id: 101,
      name: "Paracetamol 500mg",
      type: "Tablet",
      brand: "Calpol",
      batch: "BT2023045",
      expiry: "Dec 2024",
      mrp: 25.00,
      stock: 120
    },
    {
      id: 102,
      name: "Azithromycin 500mg",
      type: "Tablet",
      brand: "Zithromax",
      batch: "BT2023032",
      expiry: "Nov 2024",
      mrp: 85.00,
      stock: 45
    },
    {
      id: 103,
      name: "Cetirizine 10mg",
      type: "Tablet",
      brand: "Zyrtec",
      batch: "BT2023028",
      expiry: "Oct 2024",
      mrp: 45.00,
      stock: 78
    },
    {
      id: 104,
      name: "Amoxicillin 250mg",
      type: "Capsule",
      brand: "Mox",
      batch: "BT2023056",
      expiry: "Jan 2025",
      mrp: 65.00,
      stock: 92
    },
    {
      id: 105,
      name: "Ibuprofen 400mg",
      type: "Tablet",
      brand: "Brufen",
      batch: "BT2023067",
      expiry: "Feb 2025",
      mrp: 35.00,
      stock: 110
    }
  ];
  
  // Filter medicines based on search query
  const filteredMedicines = medicineSearchQuery 
    ? mockMedicines.filter(medicine => 
        medicine.name.toLowerCase().includes(medicineSearchQuery.toLowerCase()) ||
        medicine.brand.toLowerCase().includes(medicineSearchQuery.toLowerCase())
      )
    : mockMedicines;
  
  // Handle adding medicine to cart
  const handleAddMedicine = (medicine: Medicine) => {
    // Check if medicine already exists in cart
    const existingItemIndex = cartItems.findIndex(item => 
      item.name === medicine.name && item.batch === medicine.batch
    );
    
    if (existingItemIndex !== -1) {
      // If medicine already exists, increase quantity
      const updatedItems = [...cartItems];
      const item = updatedItems[existingItemIndex];
      item.quantity += 1;
      item.total = calculateItemTotal(item.mrp, item.quantity, item.discount);
      setCartItems(updatedItems);
    } else {
      // If medicine doesn't exist, add new item to cart
      const newItem = {
        id: Date.now(), // Generate a unique ID
        name: medicine.name,
        type: medicine.type,
        brand: medicine.brand,
        batch: medicine.batch,
        expiry: medicine.expiry,
        mrp: medicine.mrp,
        quantity: 1,
        discount: 0,
        total: medicine.mrp,
        dosage: ""
      };
      
      setCartItems([...cartItems, newItem]);
    }
  };
  
  // Calculate item total based on MRP, quantity, and discount
  const calculateItemTotal = (mrp: number, quantity: number, discountPercent: number): number => {
    const totalBeforeDiscount = mrp * quantity;
    const discountAmount = totalBeforeDiscount * (discountPercent / 100);
    return totalBeforeDiscount - discountAmount;
  };
  
  // Handle quantity change
  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity less than 1
    
    setCartItems(items => 
      items.map(item => {
        if (item.id === itemId) {
          const updatedItem = { 
            ...item, 
            quantity: newQuantity,
            total: calculateItemTotal(item.mrp, newQuantity, item.discount)
          };
          return updatedItem;
        }
        return item;
      })
    );
  };
  
  // Handle discount change
  const handleDiscountChange = (itemId: number, newDiscount: number) => {
    if (newDiscount < 0) return; // Prevent negative discount
    
    setCartItems(items => 
      items.map(item => {
        if (item.id === itemId) {
          const updatedItem = { 
            ...item, 
            discount: newDiscount,
            total: calculateItemTotal(item.mrp, item.quantity, newDiscount)
          };
          return updatedItem;
        }
        return item;
      })
    );
  };
  
  // Handle removing item from cart
  const handleRemoveItem = (itemId: number) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };
  
  // Calculate cart totals
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const cartDiscount = cartItems.reduce((sum, item) => {
    const totalBeforeDiscount = item.mrp * item.quantity;
    const discountAmount = totalBeforeDiscount * (item.discount / 100);
    return sum + discountAmount;
  }, 0);
  const taxRate = 12; // GST 12%
  const cartTax = cartSubtotal * (taxRate / 100);
  const cartTotal = cartSubtotal + cartTax;
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">New Sale</h1>
        <div className="flex items-center space-x-2">
          <Link href="/store-panel/billing" className="btn-secondary text-sm py-1.5 flex items-center gap-1">
            Cancel
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Medicine Search & Cart */}
        <div className="lg:col-span-2 space-y-6">
          {/* Medicine Search */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Medicines</h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="search" 
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                placeholder="Search medicine by name, brand, or composition..."
                value={medicineSearchQuery}
                onChange={(e) => setMedicineSearchQuery(e.target.value)}
              />
            </div>

            {/* Search Results */}
            <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MRP</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMedicines.map(medicine => (
                    <tr key={medicine.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{medicine.name}</div>
                          <div className="text-xs text-gray-500">{medicine.type} | {medicine.brand}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{medicine.batch}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{medicine.expiry}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">₹{medicine.mrp.toFixed(2)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{medicine.stock}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          className="text-primary-600 hover:text-primary-800 font-medium"
                          onClick={() => handleAddMedicine(medicine)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredMedicines.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-4 text-center text-sm text-gray-500">
                        No medicines found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cart Items</h2>
            {cartItems.length > 0 ? (
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MRP</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map(item => (
                      <React.Fragment key={item.id}>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.type} | {item.brand}</div>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">{item.batch}</td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">{item.expiry}</td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹{item.mrp.toFixed(2)}</td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              <button 
                                className="p-1 rounded-md hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <MinusIcon className="h-4 w-4 text-gray-500" />
                              </button>
                              <input
                                type="number"
                                className="w-12 p-1 text-center border border-gray-200 rounded-md"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                min="1"
                              />
                              <button 
                                className="p-1 rounded-md hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <PlusIcon className="h-4 w-4 text-gray-500" />
                              </button>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                type="number"
                                className="w-12 p-1 text-center border border-gray-200 rounded-md"
                                value={item.discount}
                                onChange={(e) => handleDiscountChange(item.id, parseInt(e.target.value) || 0)}
                                min="0"
                                max="100"
                              />
                              <span className="ml-1 text-sm text-gray-600">%</span>
                            </div>
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹{item.total.toFixed(2)}</td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">
                            <button 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td colSpan={8} className="px-4 py-2">
                            <div className="flex items-center">
                              <span className="text-xs font-medium text-gray-500 mr-2">Dosage:</span>
                              {editingDosageForItemId === item.id ? (
                                <div className="flex-1">
                                  <div className="flex items-center">
                                    <input
                                      type="text"
                                      className="flex-1 p-1 text-sm border border-gray-200 rounded-md"
                                      value={tempDosage}
                                      onChange={(e) => setTempDosage(e.target.value)}
                                      placeholder="Enter dosage instructions"
                                    />
                                    <button 
                                      className="ml-2 p-1 text-primary-600 hover:text-primary-800"
                                      onClick={() => handleDosageChange(item.id, tempDosage)}
                                    >
                                      <CheckIcon className="h-4 w-4" />
                                    </button>
                                    <button 
                                      className="ml-1 p-1 text-gray-500 hover:text-gray-700"
                                      onClick={() => setEditingDosageForItemId(null)}
                                    >
                                      <XIcon className="h-4 w-4" />
                                    </button>
                                  </div>
                                  <div className="mt-1 flex flex-wrap gap-1">
                                    {dosageTemplates.map((template, index) => (
                                      <button
                                        key={index}
                                        type="button"
                                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded"
                                        onClick={() => setTempDosage(template)}
                                      >
                                        {template}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex flex-1 items-center justify-between">
                                  <span className="text-sm text-gray-700">
                                    {item.dosage || "No dosage specified"}
                                  </span>
                                  <button 
                                    className="text-primary-600 hover:text-primary-800 text-xs"
                                    onClick={() => startEditingDosage(item.id, item.dosage || "")}
                                  >
                                    {item.dosage ? "Edit" : "Add"} Dosage
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">
                  <ShoppingCartIcon className="h-12 w-12 mx-auto" />
                </div>
                <p className="text-gray-500">No items in cart</p>
                <p className="text-sm text-gray-400 mt-1">Search and add medicines above</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Customer Info & Payment */}
        <div className="space-y-6">
          {/* Customer Info */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Type</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="customerType" 
                      className="form-radio text-primary-600" 
                      checked={customerType === "walk-in"}
                      onChange={() => handleCustomerTypeChange("walk-in")}
                    />
                    <span className="ml-2 text-sm text-gray-700">Walk-in</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="customerType" 
                      className="form-radio text-primary-600" 
                      checked={customerType === "registered"}
                      onChange={() => handleCustomerTypeChange("registered")}
                    />
                    <span className="ml-2 text-sm text-gray-700">Registered</span>
                  </label>
                </div>
              </div>

              {customerType === "walk-in" ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <UserIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Customer name"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <input 
                      type="tel" 
                      className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Phone number"
                    />
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="relative" ref={searchResultsRef}>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm font-medium text-gray-700">Search Customer</label>
                      <button 
                        type="button" 
                        className="text-primary-600 hover:text-primary-700 text-xs font-medium flex items-center"
                        onClick={() => setShowAddCustomerModal(true)}
                      >
                        <UserPlusIcon className="h-3 w-3 mr-1" />
                        Add New Customer
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-4 h-4 text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                        placeholder="Search by name or phone number"
                        value={customerSearchQuery}
                        onChange={(e) => {
                          setCustomerSearchQuery(e.target.value);
                          setShowCustomerSearchResults(true);
                        }}
                        onFocus={() => setShowCustomerSearchResults(true)}
                      />
                    </div>
                    
                    {/* Customer Search Results Dropdown */}
                    {showCustomerSearchResults && customerSearchQuery && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                        {filteredCustomers.length > 0 ? (
                          <ul className="py-1">
                            {filteredCustomers.map(customer => (
                              <li 
                                key={customer.id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                                onClick={() => handleSelectCustomer(customer)}
                              >
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                                  <div className="text-xs text-gray-500">{customer.phone}</div>
                                </div>
                                <button className="text-primary-600 hover:text-primary-800">
                                  <CheckIcon className="h-4 w-4" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500 flex justify-between items-center">
                            <span>No customers found</span>
                            <button 
                              className="text-primary-600 hover:text-primary-700 text-xs font-medium flex items-center"
                              onClick={() => setShowAddCustomerModal(true)}
                            >
                              <PlusIcon className="h-3 w-3 mr-1" />
                              Add New
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Selected Customer Details */}
                  {selectedCustomer && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{selectedCustomer.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{selectedCustomer.phone}</p>
                          {selectedCustomer.email && <p className="text-xs text-gray-600">{selectedCustomer.email}</p>}
                          {selectedCustomer.address && <p className="text-xs text-gray-600 mt-1">{selectedCustomer.address}</p>}
                        </div>
                        <button 
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => {
                            setSelectedCustomer(null);
                            setCustomerSearchQuery("");
                          }}
                        >
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Doctor</label>
                  <button 
                    type="button" 
                    className="text-primary-600 hover:text-primary-700 text-xs font-medium flex items-center"
                    onClick={() => setShowAddDoctorModal(true)}
                  >
                    <PlusIcon className="h-3 w-3 mr-1" />
                    Add New Doctor
                  </button>
                </div>
                <select 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  value={selectedDoctor}
                  onChange={handleDoctorChange}
                >
                  <option value="">Select doctor (optional)</option>
                  <option value="1">Dr. Sharma</option>
                  <option value="2">Dr. Patel</option>
                  <option value="3">Dr. Gupta</option>
                  {/* In a real app, you would dynamically add the new doctor here */}
                  {newDoctorData.name && <option value="new">Dr. {newDoctorData.name}</option>}
                </select>
              </div>

              {/* Prescription Upload Section - Only visible when a doctor is selected */}
              {selectedDoctor && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Prescription</label>
                    <span className="text-xs text-amber-600 font-medium">Required for certain medicines</span>
                  </div>
                  
                  {prescriptionPreview ? (
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden">
                      <div className="flex items-center p-3 bg-gray-50 border-b border-gray-200">
                        <FileTextIcon className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700 truncate flex-1">
                          {prescriptionFile?.name || "Prescription"}
                        </span>
                        <button
                          type="button"
                          onClick={removePrescription}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="p-3">
                        {prescriptionPreview.startsWith('data:image') ? (
                          <img 
                            src={prescriptionPreview} 
                            alt="Prescription preview" 
                            className="max-h-32 mx-auto object-contain"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-32 bg-gray-50">
                            <ClipboardIcon className="h-10 w-10 text-gray-300" />
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-24 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <label className="flex flex-col items-center cursor-pointer">
                        <UploadIcon className="h-6 w-6 text-gray-400 mb-1" />
                        <span className="text-sm text-gray-500">Upload prescription</span>
                        <span className="text-xs text-gray-400 mt-1">PDF, JPG, PNG (max 5MB)</span>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handlePrescriptionUpload}
                        />
                      </label>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Payment Info */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Subtotal:</span>
                <span className="text-sm font-medium text-gray-900">₹{cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Discount:</span>
                <span className="text-sm font-medium text-gray-900">₹{cartDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Tax (GST {taxRate}%):</span>
                <span className="text-sm font-medium text-gray-900">₹{cartTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 font-medium">
                <span className="text-base text-gray-800">Total:</span>
                <span className="text-base text-primary-600">₹{cartTotal.toFixed(2)}</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center justify-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" className="form-radio text-primary-600 mr-2" defaultChecked />
                    <span className="text-sm text-gray-700">Cash</span>
                  </label>
                  <label className="flex items-center justify-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" className="form-radio text-primary-600 mr-2" />
                    <span className="text-sm text-gray-700">UPI</span>
                  </label>
                  <label className="flex items-center justify-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" className="form-radio text-primary-600 mr-2" />
                    <span className="text-sm text-gray-700">Card</span>
                  </label>
                  <label className="flex items-center justify-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="paymentMethod" className="form-radio text-primary-600 mr-2" />
                    <span className="text-sm text-gray-700">Credit</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button className="btn-primary w-full py-2.5 flex items-center justify-center gap-2">
                  <SaveIcon className="h-4 w-4" />
                  Complete Sale
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="btn-secondary py-2 flex items-center justify-center gap-1">
                    <PrinterIcon className="h-4 w-4" />
                    Print
                  </button>
                  <button className="btn-secondary py-2 flex items-center justify-center gap-1">
                    <ReceiptIcon className="h-4 w-4" />
                    Save Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Doctor Modal */}
      {showAddDoctorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add New Doctor</h3>
              <button 
                type="button" 
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setShowAddDoctorModal(false)}
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddDoctor} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Doctor Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Dr. Full Name"
                  value={newDoctorData.name}
                  onChange={handleNewDoctorChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                <input 
                  type="text" 
                  id="specialization" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="e.g. Cardiologist, General Physician"
                  value={newDoctorData.specialization}
                  onChange={handleNewDoctorChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Phone number"
                    value={newDoctorData.phone}
                    onChange={handleNewDoctorChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Email address"
                    value={newDoctorData.email}
                    onChange={handleNewDoctorChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea 
                  id="address" 
                  rows={2}
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Clinic/Hospital address"
                  value={newDoctorData.address}
                  onChange={handleNewDoctorChange}
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  type="button" 
                  className="btn-secondary py-2 px-4"
                  onClick={() => setShowAddDoctorModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-primary py-2 px-4"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {showAddCustomerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add New Customer</h3>
              <button 
                type="button" 
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setShowAddCustomerModal(false)}
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddCustomer} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Customer Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Full Name"
                  value={newCustomerData.name}
                  onChange={handleNewCustomerChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Phone number"
                  value={newCustomerData.phone}
                  onChange={handleNewCustomerChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Email address"
                  value={newCustomerData.email}
                  onChange={handleNewCustomerChange}
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea 
                  id="address" 
                  rows={2}
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Customer address"
                  value={newCustomerData.address}
                  onChange={handleNewCustomerChange}
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button 
                  type="button" 
                  className="btn-secondary py-2 px-4"
                  onClick={() => setShowAddCustomerModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn-primary py-2 px-4"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 