"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeftIcon, 
  PlusIcon, 
  CheckIcon, 
  XIcon, 
  CreditCardIcon,
  SmartphoneIcon,
  BanknoteIcon,
  WalletIcon,
  GlobeIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EditIcon,
  Trash2Icon,
  InfoIcon
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample payment methods data
const paymentMethodsData = [
  {
    id: 1,
    name: "Cash",
    type: "offline",
    icon: BanknoteIcon,
    enabled: true,
    default: true,
    description: "Accept cash payments at your store counter",
    instructions: "Record cash payments manually in the system",
    fees: "No fees",
  },
  {
    id: 2,
    name: "Credit/Debit Card",
    type: "offline",
    icon: CreditCardIcon,
    enabled: true,
    default: false,
    description: "Accept card payments using your POS terminal",
    instructions: "Swipe or insert customer's card in your POS terminal",
    fees: "Varies by card type (1.5-3%)",
  },
  {
    id: 3,
    name: "UPI",
    type: "online",
    icon: SmartphoneIcon,
    enabled: true,
    default: false,
    description: "Accept UPI payments via QR code",
    instructions: "Customer scans QR code and completes payment on their device",
    fees: "0.5% per transaction",
    qrCode: true,
  },
  {
    id: 4,
    name: "PayTM",
    type: "online",
    icon: WalletIcon,
    enabled: false,
    default: false,
    description: "Accept payments via PayTM wallet",
    instructions: "Customer scans QR code or enters your PayTM number",
    fees: "2% per transaction",
    qrCode: true,
    apiKey: "••••••••••••••••",
    merchantId: "PAYTM123456",
  },
  {
    id: 5,
    name: "Razorpay",
    type: "gateway",
    icon: GlobeIcon,
    enabled: true,
    default: false,
    description: "Integrated payment gateway for online transactions",
    instructions: "Customer completes payment on checkout page",
    fees: "2% + ₹3 per transaction",
    apiKey: "••••••••••••••••",
    secretKey: "••••••••••••••••",
  },
];

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState(paymentMethodsData);
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingMethod, setEditingMethod] = useState<number | null>(null);

  const toggleMethodStatus = (id: number) => {
    setPaymentMethods(methods => 
      methods.map(method => 
        method.id === id ? { ...method, enabled: !method.enabled } : method
      )
    );
  };

  const setDefaultMethod = (id: number) => {
    setPaymentMethods(methods => 
      methods.map(method => ({
        ...method,
        default: method.id === id
      }))
    );
  };

  const toggleExpand = (id: number) => {
    setExpandedMethod(expandedMethod === id ? null : id);
  };

  const handleEdit = (id: number) => {
    setEditingMethod(id);
    setShowEditModal(true);
  };

  const handleDelete = (id: number) => {
    // In a real app, this would show a confirmation dialog
    setPaymentMethods(methods => methods.filter(method => method.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link 
            href="/store-panel/settings" 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <PlusIcon className="h-4 w-4" />
          <span>Add Payment Method</span>
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        Configure which payment methods your store accepts and set up payment gateways for online transactions.
      </p>

      {/* Payment Methods List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div className="col-span-4">Payment Method</div>
          <div className="col-span-3">Type</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Default</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {paymentMethods.map((method) => (
          <div key={method.id} className="border-b border-gray-200 last:border-0">
            <div className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50 transition-colors">
              <div className="col-span-4 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <method.icon className="h-5 w-5 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">{method.name}</span>
              </div>
              <div className="col-span-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                  {method.type === "offline" && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">In-Store</span>
                  )}
                  {method.type === "online" && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Online</span>
                  )}
                  {method.type === "gateway" && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Gateway</span>
                  )}
                </span>
              </div>
              <div className="col-span-2">
                <button 
                  onClick={() => toggleMethodStatus(method.id)}
                  className="inline-flex items-center"
                >
                  {method.enabled ? (
                    <>
                      <ToggleRightIcon className="h-5 w-5 text-primary-500 mr-1.5" />
                      <span className="text-sm text-primary-700">Enabled</span>
                    </>
                  ) : (
                    <>
                      <ToggleLeftIcon className="h-5 w-5 text-gray-400 mr-1.5" />
                      <span className="text-sm text-gray-500">Disabled</span>
                    </>
                  )}
                </button>
              </div>
              <div className="col-span-2">
                {method.default ? (
                  <span className="inline-flex items-center text-primary-600">
                    <CheckIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">Default</span>
                  </span>
                ) : (
                  <button 
                    onClick={() => setDefaultMethod(method.id)}
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    Set as default
                  </button>
                )}
              </div>
              <div className="col-span-1 flex items-center justify-end gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={() => toggleExpand(method.id)}
                        className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        {expandedMethod === method.id ? (
                          <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                          <ChevronDownIcon className="h-4 w-4" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{expandedMethod === method.id ? "Collapse Details" : "Expand Details"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={() => handleEdit(method.id)}
                        className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <EditIcon className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit Payment Method</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {!method.default && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          onClick={() => handleDelete(method.id)}
                          className="p-1.5 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete Payment Method</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>

            {/* Expanded details */}
            {expandedMethod === method.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Details</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">{method.description}</p>
                      <p className="text-gray-700">
                        <span className="font-medium">Instructions:</span> {method.instructions}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Fees:</span> {method.fees}
                      </p>
                    </div>
                  </div>
                  
                  {(method.type === "online" || method.type === "gateway") && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Configuration</h4>
                      <div className="space-y-2 text-sm">
                        {method.apiKey && (
                          <p className="text-gray-700">
                            <span className="font-medium">API Key:</span> {method.apiKey}
                          </p>
                        )}
                        {method.secretKey && (
                          <p className="text-gray-700">
                            <span className="font-medium">Secret Key:</span> {method.secretKey}
                          </p>
                        )}
                        {method.merchantId && (
                          <p className="text-gray-700">
                            <span className="font-medium">Merchant ID:</span> {method.merchantId}
                          </p>
                        )}
                        {method.qrCode && (
                          <div className="mt-3">
                            <p className="text-gray-700 mb-2">
                              <span className="font-medium">QR Code:</span>
                            </p>
                            <div className="h-32 w-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                              <div className="text-xs text-gray-400">QR Code Placeholder</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Payment Gateway Tips */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-blue-800 mb-2">Tips for Payment Methods</h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
              <li>Enable multiple payment methods to provide flexibility to your customers</li>
              <li>Set up at least one online payment method for digital transactions</li>
              <li>Keep your API keys and credentials secure</li>
              <li>Regularly verify that all payment methods are working correctly</li>
              <li>Consider transaction fees when pricing your products</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add Payment Method Modal (simplified) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-medium text-lg">Add Payment Method</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 overflow-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select a type</option>
                    <option value="offline">In-Store Payment</option>
                    <option value="online">Online Payment</option>
                    <option value="gateway">Payment Gateway</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., Credit Card, PayPal, etc."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea 
                    placeholder="Describe this payment method..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    rows={3}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instructions
                  </label>
                  <textarea 
                    placeholder="Instructions for using this payment method..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    rows={2}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction Fees
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., 2% per transaction"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="enableMethod" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableMethod" className="ml-2 block text-sm text-gray-700">
                    Enable this payment method
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 p-4 border-t border-gray-200">
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Add Payment Method
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Payment Method Modal (simplified) */}
      {showEditModal && editingMethod && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-medium text-lg">Edit Payment Method</h3>
              <button 
                onClick={() => setShowEditModal(false)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 overflow-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method Name
                  </label>
                  <input 
                    type="text" 
                    value={paymentMethods.find(m => m.id === editingMethod)?.name || ''}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea 
                    value={paymentMethods.find(m => m.id === editingMethod)?.description || ''}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    rows={3}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instructions
                  </label>
                  <textarea 
                    value={paymentMethods.find(m => m.id === editingMethod)?.instructions || ''}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    rows={2}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction Fees
                  </label>
                  <input 
                    type="text" 
                    value={paymentMethods.find(m => m.id === editingMethod)?.fees || ''}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="enableMethod" 
                    checked={paymentMethods.find(m => m.id === editingMethod)?.enabled || false}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="enableMethod" className="ml-2 block text-sm text-gray-700">
                    Enable this payment method
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 p-4 border-t border-gray-200">
              <button 
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 