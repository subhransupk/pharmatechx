import { 
  PlusIcon, 
  SearchIcon, 
  BarcodeIcon,
  SaveIcon,
  ShoppingCartIcon
} from "lucide-react";

export default function RestockMedicinePage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Restock Medicines</h1>
        <div className="flex items-center space-x-2">
          <button className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <SaveIcon className="h-4 w-4" />
            Save Restock
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="supplier" className="block text-sm font-medium text-gray-700 mb-2">Supplier</label>
              <select 
                id="supplier" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-full"
              >
                <option value="">Select supplier</option>
                <option value="1">ABC Pharmaceuticals</option>
                <option value="2">MediSupply Inc.</option>
                <option value="3">HealthCare Distributors</option>
                <option value="4">PharmaWholesale Ltd.</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="invoice" className="block text-sm font-medium text-gray-700 mb-2">Invoice Number</label>
              <input 
                type="text" 
                id="invoice" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-full"
                placeholder="Enter invoice number"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Restock Date</label>
              <input 
                type="date" 
                id="date" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-full"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                  type="search" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                  placeholder="Search medicines by name or code..."
                />
              </div>
              <div className="flex-shrink-0">
                <button className="bg-primary-100 text-primary-600 p-2.5 rounded-lg border border-gray-200 hover:bg-primary-200 transition-colors">
                  <BarcodeIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Restock Qty</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch No.</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost (₹)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total (₹)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Paracetamol 500mg</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">120</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="number" 
                        className="border border-gray-200 rounded-lg p-1.5 w-20 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue={50}
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="text" 
                        className="border border-gray-200 rounded-lg p-1.5 w-28 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="PCM2024-01"
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="date" 
                        className="border border-gray-200 rounded-lg p-1.5 w-36 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="2025-03-31"
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="number" 
                        className="border border-gray-200 rounded-lg p-1.5 w-24 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue={30}
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹1,500</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Amoxicillin 250mg</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">85</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="number" 
                        className="border border-gray-200 rounded-lg p-1.5 w-20 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue={100}
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="text" 
                        className="border border-gray-200 rounded-lg p-1.5 w-28 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="AMX2024-05"
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="date" 
                        className="border border-gray-200 rounded-lg p-1.5 w-36 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="2025-05-15"
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <input 
                        type="number" 
                        className="border border-gray-200 rounded-lg p-1.5 w-24 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue={45}
                      />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">₹4,500</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <button className="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <button className="flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium">
                <PlusIcon className="h-4 w-4" />
                Add Another Medicine
              </button>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex justify-between items-start">
            <div className="flex flex-col space-y-2">
              <label htmlFor="notes" className="text-sm font-medium text-gray-700">Notes</label>
              <textarea 
                id="notes" 
                rows={3}
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-96"
                placeholder="Add any notes about this restock..."
              ></textarea>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Total Items:</span>
                <span className="text-sm font-medium">2</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Total Quantity:</span>
                <span className="text-sm font-medium">150</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">Total Cost:</span>
                <span className="text-sm font-bold text-gray-900">₹6,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 