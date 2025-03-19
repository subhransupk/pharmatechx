import { 
  PlusIcon, 
  SearchIcon, 
  SaveIcon,
  AlertTriangleIcon
} from "lucide-react";

export default function StockAdjustmentPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Stock Adjustment</h1>
        <div className="flex items-center space-x-2">
          <button className="btn-primary text-sm py-1.5 flex items-center gap-1">
            <SaveIcon className="h-4 w-4" />
            Save Adjustment
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="adjustment-type" className="block text-sm font-medium text-gray-700 mb-2">Adjustment Type*</label>
              <select 
                id="adjustment-type" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-full"
              >
                <option value="">Select adjustment type</option>
                <option value="damage">Damaged Stock</option>
                <option value="expired">Expired Stock</option>
                <option value="correction">Inventory Correction</option>
                <option value="return">Return to Supplier</option>
                <option value="write-off">Write-Off</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-2">Reference Number</label>
              <input 
                type="text" 
                id="reference" 
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-full"
                placeholder="Enter reference number (optional)"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Adjustment Date*</label>
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
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch No.</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adjust Qty</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Stock</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">Paracetamol 500mg</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">PCM2023-45</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2024-12-31</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">120</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center">
                        <select className="border border-gray-200 rounded-l-lg p-1.5 focus:ring-primary-500 focus:border-primary-500 w-20">
                          <option value="-">-</option>
                          <option value="+">+</option>
                        </select>
                        <input 
                          type="number" 
                          className="border border-l-0 border-gray-200 rounded-r-lg p-1.5 w-20 focus:ring-primary-500 focus:border-primary-500"
                          defaultValue={10}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">110</td>
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
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">AMX2023-78</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">2024-10-15</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-600">85</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center">
                        <select className="border border-gray-200 rounded-l-lg p-1.5 focus:ring-primary-500 focus:border-primary-500 w-20">
                          <option value="-">-</option>
                          <option value="+" selected>+</option>
                        </select>
                        <input 
                          type="number" 
                          className="border border-l-0 border-gray-200 rounded-r-lg p-1.5 w-20 focus:ring-primary-500 focus:border-primary-500"
                          defaultValue={5}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-sm font-medium text-gray-900">90</td>
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
              <label htmlFor="reason" className="text-sm font-medium text-gray-700">Reason for Adjustment*</label>
              <textarea 
                id="reason" 
                rows={3}
                className="border border-gray-200 rounded-lg p-2.5 focus:ring-primary-500 focus:border-primary-500 w-96"
                placeholder="Explain the reason for this adjustment..."
              ></textarea>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-amber-600">
                <AlertTriangleIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Requires Approval</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Stock adjustments over 10 units require manager approval.
              </p>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Total Items:</span>
                <span className="text-sm font-medium">2</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Net Adjustment:</span>
                <span className="text-sm font-medium">-5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 